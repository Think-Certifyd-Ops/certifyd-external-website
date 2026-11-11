"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

type R = { slug: string; role: string; aliases: string; sector: string };

export function RoleSearch({ roles }: { roles: R[] }) {
  const [q, setQ] = useState("");
  const hits = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return roles.filter((r) => `${r.role} ${r.aliases} ${r.sector}`.toLowerCase().includes(t)).slice(0, 8);
  }, [q, roles]);
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} className="stack gap-10" style={{ maxWidth: 720 }}>
      <div className="field"><label htmlFor="role-q">Search for a job</label><input id="role-q" type="search" placeholder="e.g. healthcare assistant, forklift, door supervisor" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" /></div>
      {hits.length > 0 && <div className="card-flat" style={{ padding: "4px 20px" }} aria-live="polite">{hits.map((r) => <Link key={r.slug} href={`/regulations/${r.slug}/`} className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}><strong style={{ flex: 1 }}>{r.role}</strong><span className="note-line">{r.sector}</span></Link>)}</div>}
      {q.trim().length >= 2 && hits.length === 0 && <p className="small">We don&apos;t have that job yet. Tell us what it is and we&apos;ll build its checklist with you.</p>}
    </form>
  );
}
