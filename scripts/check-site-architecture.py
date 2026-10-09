"""Validate exported routes, canonicals, sitemap and exact Netlify redirects."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, urljoin
import json, tomllib, xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]; OUT=ROOT/'out'
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__(); self.links=[]; self.canonical=[]; self.robots=[]; self.h1=0; self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='a' and a.get('href'):self.links.append(a['href'])
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='meta' and a.get('name')=='robots':self.robots.append(a.get('content',''))
  if tag=='h1':self.h1+=1
routes=json.loads((ROOT/'docs/connected-routes.json').read_text()); retired=json.loads((ROOT/'docs/route-consolidation.json').read_text())
redirects=tomllib.loads((ROOT/'netlify.toml').read_text())['redirects']; exact={r['from']:r for r in redirects if '*' not in r['from'] and r.get('status')==301}
errors=[]; pages={('/'+str(p.parent.relative_to(OUT))+'/').replace('/./','/'):Page(p.read_text()) for p in OUT.rglob('index.html')}
sitemap=[e.text for e in ET.parse(OUT/'sitemap.xml').iter() if e.tag.endswith('}loc')]; paths=[urlparse(u).path for u in sitemap]
for old,new in retired.items():
 for variant in (old,old.rstrip('/')):
  rule=exact.get(variant,{})
  if rule.get('to')!=new or not rule.get('force'):errors.append(f'Missing permanent forced redirect: {variant}')
 if old in pages or old in paths:errors.append(f'Retired page still exported/indexed: {old}')
 if new not in pages or new in retired:errors.append(f'Invalid final destination: {new}')
for route in routes.values():
 p=pages.get(route)
 if not p:errors.append(f'Missing new page: {route}');continue
 if p.h1!=1:errors.append(f'H1 count {route}: {p.h1}')
 if p.canonical!=['https://certifyd.io'+route]:errors.append(f'Canonical {route}: {p.canonical}')
 if any('noindex' in r for r in p.robots):errors.append(f'New route noindex: {route}')
 if route not in paths:errors.append(f'Not in sitemap: {route}')
for route,p in pages.items():
 for href in p.links:
  u=urlparse(urljoin('https://certifyd.io'+route,href))
  if u.netloc!='certifyd.io':continue
  dest=u.path
  if dest in retired:errors.append(f'Internal link to retired URL: {route} -> {dest}')
  if dest.endswith('/') and dest not in pages and not dest.startswith(('/sponsors/','/api/')):errors.append(f'Broken internal route: {route} -> {dest}')
for route in ['/products/codewords/demo/','/products/id/demo/','/products/portal/demo/']:
 p=pages[route]
 if not any('noindex' in r for r in p.robots) or p.canonical!=['https://certifyd.io'+route]:errors.append(f'Demo indexing incorrect: {route}')
if len(paths)!=len(set(paths)):errors.append('Duplicate sitemap URLs')
result={'exported_pages':len(pages),'sitemap_urls':len(paths),'new_routes':len(routes),'consolidations':len(retired),'errors':sorted(set(errors))}
(ROOT/'docs/architecture-validation.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2));raise SystemExit(bool(errors))
