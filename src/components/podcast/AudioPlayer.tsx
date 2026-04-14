"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      const bar = progressRef.current;
      if (!audio || !bar || !duration) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = ratio * duration;
    },
    [duration]
  );

  const cycleSpeed = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const speeds = [1, 1.5, 2];
    const next = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length];
    audio.playbackRate = next;
    setPlaybackRate(next);
  }, [playbackRate]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-certifyd-navy rounded-sm p-4 sm:p-6">
      <audio ref={audioRef} src={src} preload="metadata" title={title} />

      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-certifyd-blue hover:bg-certifyd-blue/80 text-white flex items-center justify-center transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Progress + time */}
        <div className="flex-1 min-w-0">
          <div
            ref={progressRef}
            onClick={handleSeek}
            className="relative h-2 bg-white/20 rounded-full cursor-pointer group"
          >
            <div
              className="absolute inset-y-0 left-0 bg-certifyd-blue rounded-full transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${progress}%`, marginLeft: "-6px" }}
            />
          </div>
          <div className="flex justify-between mt-1.5 text-xs text-white/60 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Speed */}
        <button
          onClick={cycleSpeed}
          className="flex-shrink-0 px-2 py-1 text-xs font-mono text-white/70 hover:text-white border border-white/20 rounded transition-colors"
        >
          {playbackRate}x
        </button>
      </div>
    </div>
  );
}
