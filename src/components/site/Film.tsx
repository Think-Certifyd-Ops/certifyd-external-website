"use client";
import { useRef, useState, type ReactNode } from "react";
import { FILMS, type FilmKey } from "@/lib/site";
import { ChatStill } from "./Stills";

export type Chapter = { t: string; name: string };

export const CHAPTERS: Record<FilmKey, Chapter[]> = {
  care: [{ t: "0:00", name: "Scattered records" }, { t: "0:17", name: "One record" }, { t: "0:27", name: "Workers respond" }, { t: "0:42", name: "Exceptions" }, { t: "0:49", name: "At reception" }, { t: "1:00", name: "Audit-ready" }],
  warehouse: [{ t: "0:00", name: "The pile-up" }, { t: "0:15", name: "One record" }, { t: "0:23", name: "Before the first shift" }, { t: "0:38", name: "No more chasing" }, { t: "0:45", name: "At the gate" }, { t: "0:55", name: "Audit-ready" }],
};
const secs = (t: string) => { const [m, s] = t.split(":").map(Number); return m * 60 + s; };

/** One film slot. Plays the MP4 when it's in /public/videos, otherwise shows a still illustration. */
export function FilmSlot({ film, chapter, still }: { film: FilmKey; chapter?: Chapter; label?: string; still?: ReactNode }) {
  const f = FILMS[film];
  const ref = useRef<HTMLVideoElement>(null);
  if (!f.available) return <>{still ?? <ChatStill />}</>;
  return (
    <div className="film">
      <video ref={ref} src={f.file} autoPlay muted loop playsInline controls preload="metadata" onLoadedMetadata={() => { if (chapter && ref.current) ref.current.currentTime = secs(chapter.t); }}>
        <track kind="captions" src={f.captions} srcLang="en" label="English" default />
      </video>
    </div>
  );
}

/** Homepage film band: choose a film, then a chapter. The homepage hides it until a film is available. */
export function FilmBand() {
  const [film, setFilm] = useState<FilmKey>("care");
  const [ch, setCh] = useState(1);
  const chapters = CHAPTERS[film];
  return (
    <div className="stack gap-28">
      <div className="head-row">
        <div className="stack gap-12 max-780"><p className="eyebrow">The film</p><h2 id="film-title" className="h2">Watch a new starter go from first message to first shift.</h2></div>
        <div role="tablist" aria-label="Choose a film" className="btn-row" style={{ gap: 8 }}>
          {(Object.keys(FILMS) as FilmKey[]).map((k) => <button key={k} type="button" role="tab" aria-selected={k === film} className="pill" onClick={() => { setFilm(k); setCh(1); }}>{FILMS[k].label}</button>)}
        </div>
      </div>
      <FilmSlot film={film} chapter={chapters[ch]} />
      <div role="group" aria-label="Film chapters" className="btn-row" style={{ gap: 10 }}>
        {chapters.map((c, i) => <button key={c.t} type="button" className="pill" aria-pressed={i === ch} onClick={() => setCh(i)}><span className="mono" style={{ marginRight: 8 }}>{c.t}</span>{c.name}</button>)}
      </div>
    </div>
  );
}
