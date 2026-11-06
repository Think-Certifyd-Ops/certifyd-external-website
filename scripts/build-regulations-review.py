#!/usr/bin/env python3
"""Write docs/website-rebuild/regulations-roles.md from src/data/regulations/roles.json.

Run after editing the dataset so the review list and the site stay in step:
    python3 scripts/build-regulations-review.py
"""
import collections
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
roles = json.loads((ROOT / "src/data/regulations/roles.json").read_text())
by_sector = collections.OrderedDict()
for r in roles:
    by_sector.setdefault(r["sector"], []).append(r)

out = []
w = out.append
w("# Regulations library: 150 roles for review")
w("")
w("Draft, 6 November 2026. Source of truth: `src/data/regulations/roles.json`. Regenerate this file with `python3 scripts/build-regulations-review.py`.")
w("")
w("No person has reviewed any of these roles yet. Every role page is built as `noindex` and left out of the sitemap until its row is marked `reviewed` in the dataset.")
w("")
w("## How to review")
w("")
w("- Mark each row: **keep**, **cut**, **rename** or **merge into** another role. Edit the `status` field in the dataset, or note it against the row number here.")
w("- Start with **review batch 1** (marked ★): 30 roles across the wave 1 segments (healthcare staffing, care providers, industrial and logistics).")
w(f"- {sum(1 for r in roles if r['flag'])} rows have a review note: a requirement that depends on duties, or a rule that may have changed.")
w("- Check types shown as tags on every page: **Law**, **Regulator guidance**, **Industry scheme** (new: client or sector schemes such as CSCS, Sentinel or BS 7858 that the law doesn't require) and **Agency choice**.")
w("")
w("## Baseline checks on every role")
w("")
w("Rows list only what sits on top of these.")
w("")
w("1. **Identity.** Photo ID matched to the person. Agencies must confirm identity under the Conduct Regulations 2003, regulation 19. The Home Office also expects reasonable steps to make sure the person working is the person checked.")
w("2. **Right to work, before day one.** A manual document check, a Home Office online check with a share code, or a registered digital provider. Follow-up checks before time-limited permission ends. From 1 October 2026 this also covers worker's contracts, individual subcontractors and online platforms, for work that starts on or after that date. The change is not retrospective.")
w("3. **Agency supply.** A Key Information Document and agreed terms before any work is found. The agency confirms the experience, training, qualifications and authorisations the law or the hirer needs, and gets two references for work with vulnerable people.")
w("4. **Agency workers' rights.** Equal treatment after 12 weeks in the same role (Agency Workers Regulations 2010). Not a check, but on the record.")
w("")
w("Sources: [Employer's guide to right to work checks, 1 October 2026](https://assets.publishing.service.gov.uk/media/6ad9dfe29ea4857e15ab3294/Employer_s_guide_to_right_to_work_checks.pdf) · [Code of practice on preventing illegal working](https://www.gov.uk/government/publications/illegal-working-penalties-codes-of-practice-for-employers) · [Illegal working operations: the changes are not retrospective](https://www.gov.uk/government/publications/powers-and-operational-procedure-caseworker-guidance/illegal-working-operations-accessible) · [Conduct Regulations 2003 overview](https://www.gov.uk/government/publications/conduct-regulations-2003-guidance-for-employment-agencies-and-employment-businesses/overview-of-the-conduct-regulations-2003) · [Key Information Document guidance](https://www.gov.uk/government/publications/providing-a-key-information-document-for-agency-workers-guidance-for-employment-businesses)")
w("")
w("## Roles by sector")
w("")
w("| Sector | Roles | Segment page | Wave |")
w("| --- | --- | --- | --- |")
for sec, rows in by_sector.items():
    w(f"| {sec} | {len(rows)} | {rows[0]['segment']} | {rows[0]['wave']} |")
w(f"| **Total** | **{len(roles)}** | | |")
w("")
w("The slug completes `https://certifyd.io/regulations/{slug}/`.")
for sec, rows in by_sector.items():
    w("")
    w(f"### {sec} ({len(rows)})")
    w("")
    w("| # | Role | Slug | Regulator | Role-specific checks | Legal basis | Types | Review note |")
    w("| --- | --- | --- | --- | --- | --- | --- | --- |")
    for r in rows:
        role = ("★ " if r["batch"] == "1" else "") + r["role"]
        if r["aliases"]:
            role += f" (also: {r['aliases']})"
        notes = [n for n in (r["flag"], r["nations"] if r["nations"] not in ("UK-wide", "Great Britain", "UK-wide register") and not r["nations"].startswith("As ") else "", ("Replaces " + r["replaces"]) if r["replaces"] else "") if n]
        types = ", ".join(r["types"])
        w(f"| {r['n']} | {role} | `{r['slug']}` | {r['regulator']} | {r['checks']} | {r['law']} | {types} | {'. '.join(notes)} |")
w("")
(ROOT / "docs/website-rebuild/regulations-roles.md").write_text("\n".join(out))
print("wrote", len(roles), "roles")
