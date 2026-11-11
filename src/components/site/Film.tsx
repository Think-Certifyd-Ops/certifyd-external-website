"use client";
import { useRef, useState, type ReactNode } from "react";
import { FILMS, type FilmKey } from "@/lib/site";
import { ChatStill } from "./Stills";

/**
 * One film. Shows the poster with a play button; the film plays with sound when someone presses play.
 * The films are voiced and have captions burned in, so nothing plays on its own.
 * If the film isn't available, shows a still illustration instead.
 */
export function FilmSlot({ film, still, autoPlay = false }: { film: FilmKey; still?: ReactNode; autoPlay?: boolean }) {
  const f = FILMS[film];
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(autoPlay);
  if (!f.available) return <>{still ?? <ChatStill />}</>;
  const play = () => { setStarted(true); void ref.current?.play(); };
  return (
    <div className="film film-live">
      <video
        ref={ref}
        src={f.file}
        poster={f.poster}
        preload="none"
        playsInline
        controls={started}
        autoPlay={autoPlay}
        onPlay={() => setStarted(true)}
        aria-label={`Certifyd film: ${f.label}. Captions are shown in the picture.`}
      />
      {!started && (
        <button type="button" className="film-play" onClick={play} aria-label={`Play the film: ${f.label}, ${f.length}`}>
          <span className="film-play-icon" aria-hidden="true">▶</span>
          <span>Play · {f.length}</span>
        </button>
      )}
    </div>
  );
}

const BAND: FilmKey[] = ["overview", "problem", "askOnce", "workers", "door", "audit"];

/** Homepage film band: the 30-second film first, then each part on its own. */
export function FilmBand() {
  const [film, setFilm] = useState<FilmKey>("overview");
  const [chosen, setChosen] = useState(false);
  return (
    <div className="stack gap-28">
      <div className="stack gap-12 max-780">
        <p className="eyebrow">The film</p>
        <h2 id="film-title" className="h2">Watch a new worker go from first message to first shift.</h2>
      </div>
      <FilmSlot key={film} film={film} autoPlay={chosen} />
      <div role="group" aria-label="Choose a part of the film" className="btn-row" style={{ gap: 10 }}>
        {BAND.filter((k) => FILMS[k].available).map((k, i) => (
          <button key={k} type="button" className="pill" aria-pressed={k === film} onClick={() => { setFilm(k); setChosen(true); }}>
            <span className="mono" style={{ marginRight: 8 }}>{i === 0 ? FILMS[k].length : `0${i}`}</span>{FILMS[k].label}
          </button>
        ))}
      </div>
    </div>
  );
}
