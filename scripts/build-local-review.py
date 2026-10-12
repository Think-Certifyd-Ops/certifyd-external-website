from pathlib import Path
import re,json,base64,mimetypes,shutil,html,subprocess,zipfile
from urllib.parse import urlsplit
site=Path(__file__).resolve().parents[1];out=site/'out';review=site.parent/'review';review.mkdir(exist_ok=True)
routes=['/','/platform/','/platform/records/']+[f'/outcomes/{s}/' for s in ['reduce-compliance-risk','import-compliance-records','reduce-compliance-admin','verified-worker-check-in','portable-worker-credentials']]+[f'/industries/{s}/' for s in ['care','recruitment','nhs','workforce','trades']]+['/products/id/','/products/id/demo/','/security/','/about/','/contact/','/blog/','/tools/']+[f'/tools/{s}/' for s in ['cost-calculator','roi-calculator','audit-readiness','audit-probability','penalty-calculator']]+[f'/resources/{s}/' for s in ['right-to-work-guide','fair-work-agency-checklist','worker-record-review-checklist','recruitment-placement-evidence-checklist']]+[f'/resources/preview/{s}/' for s in ['right-to-work-guide','fair-work-agency-checklist']]+[f'/blog/{s}/' for s in ['right-to-work-check-documents-list','right-to-work-follow-up-checks','agency-worker-compliance-who-checks','care-sector-rtw-compliance-guide']]
names={route:('home.html' if route=='/' else route.strip('/').replace('/','-')+'.html') for route in routes}
def data(path):
 mime=mimetypes.guess_type(str(path))[0] or 'application/octet-stream';return 'data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode()
def inline_css(path):
 css=path.read_text()
 def replace(m):
  value=m[1].strip('\"\'');asset=(out/value.lstrip('/')) if value.startswith('/') else path.parent/value
  return 'url('+data(asset.resolve())+')' if asset.exists() else m[0]
 return re.sub(r'url\(([^)]+)\)',replace,css)
script='''const menu=document.querySelector('#mobile-menu'),toggle=document.querySelector('#menu-toggle'),groups=[...document.querySelectorAll('.header-group')];toggle?.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});for(const group of groups)group.addEventListener('toggle',()=>{if(group.open)groups.forEach(g=>{if(g!==group)g.open=false})});document.addEventListener('click',e=>groups.forEach(g=>{if(!g.contains(e.target))g.open=false}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){groups.forEach(g=>g.open=false);if(menu)menu.hidden=true;toggle?.setAttribute('aria-expanded','false')}});[...document.querySelectorAll('form')].filter(form=>!form.closest('.story-tool')).forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const notice=document.createElement('p');notice.role='status';notice.textContent='This local review does not submit enquiries. Use the booking link to speak to the team.';form.querySelector('[data-review-notice]')?.remove();notice.dataset.reviewNotice='true';form.append(notice)}));'''
connected=(site/'src/components/connected/interactions.js').read_text().replace('export function','function')+'\nconst connected=document.querySelector(".connected");if(connected)initializeConnected(connected);'
profile='''const profile=document.querySelector('.profile-example');if(profile){const states=[['Eleanor Lee',[['Role','Electrician'],['Profile','Shared for this visit'],['Identity record','Reviewed by the company']]],['Northline Electrical',[['Organisation','Northline Electrical Ltd'],['Company link','Recorded in Eleanor’s work profile'],['Work contact','Company contact details']]],['Evidence shared for work',[['Qualification','Electrical qualification'],['Work record','Company authorisation'],['Next review','Shown against each record']]]];const buttons=[...profile.querySelectorAll('button')];buttons.forEach((button,i)=>button.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const target=profile.querySelector('.profile-result');target.querySelector('h3').textContent=states[i][0];target.querySelector('dl').innerHTML=states[i][1].map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+value+'</dd></div>').join('')}))}'''
helper=subprocess.run(['node','--input-type=module','-'],cwd=site,input="import fs from 'node:fs';import ts from 'typescript';const code=ts.transpileModule([fs.readFileSync('src/lib/tools/workload.ts','utf8'),fs.readFileSync('src/lib/measurement.ts','utf8')].join(String.fromCharCode(10)),{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ESNext}}).outputText.replace(/\\bexport (?=function|const)/g,'');process.stdout.write(code);",capture_output=True,text=True,check=True).stdout
native=(site/'docs/local-review-assets/offline-tools.js').read_text()
for route,name in names.items():
 path=out/route.strip('/')/'index.html';s=path.read_text();s=re.sub(r'<script\b[^>]*>.*?</script>','',s,flags=re.S);s=re.sub(r'<link\b[^>]*(?:as="script"|rel="preload")[^>]*>','',s)
 def style(m):
  tag=m[0];src=re.search(r'href="([^"]+)"',tag);return '<style>'+inline_css(out/src[1].lstrip('/'))+'</style>' if src and 'rel="stylesheet"' in tag else tag
 s=re.sub(r'<link\b[^>]+>',style,s)
 def asset(m):
  path=out/m[2].lstrip('/');return m[1]+data(path)+'"' if path.exists() and path.is_file() else m[0]
 s=re.sub(r'(src=")(/[^"?]+)"',asset,s);s=re.sub(r'\s+srcSet="[^"]+"','',s,flags=re.I)
 def link(m):
  href=html.unescape(m[1]);u=urlsplit(href)
  if u.netloc and u.netloc!='certifyd.io':return m[0]
  if not u.path.startswith('/'):return m[0]
  norm=u.path.rstrip('/')+'/' if u.path!='/' else '/'
  if norm in names:return 'href="'+names[norm]+('?'+html.escape(u.query,quote=True) if u.query else '')+('#'+html.escape(u.fragment,quote=True) if u.fragment else '')+'"'
  return 'href="https://certifyd.io'+href+'"'
 s=re.sub(r'href="([^"]+)"',link,s)
 s=s.replace('</head>','<meta name="robots" content="noindex,nofollow"></head>');s=s.replace('</body>','<script>'+script+connected+profile+helper+native+'</script></body>');(review/name).write_text(s)
for folder in ['ai-fraud-handover','demo-capture-spec','seo-overview']:
 shutil.copytree(site/'docs'/folder,review/folder,dirs_exist_ok=True)
for filename in ['route-consolidation.json','booking-event-configuration.json','metadata-audit.json','internal-link-audit.json']:
 shutil.copyfile(site/'docs'/filename,review/filename)
shutil.copytree(site/'docs/physical-qr-mockup',review/'rotating-qr',dirs_exist_ok=True)
body='<h1>Review the Certifyd rebuild.</h1><p>Local review · 12 October 2026. Open these files directly; no local server is needed.</p><p>The connected record examples, Trades profile tabs, calculators, readiness checklist and fictional ID-document sharing are available locally. Enquiry forms do not send messages. Booking links open the existing Cal.com page. Browser interaction checks are still pending.</p><p><a href="seo-overview/index.html">SEO overview</a> · <a href="ai-fraud-handover/handover.html">AI-fraud developer handover</a> · <a href="demo-capture-spec/index.html">Platform demo specification</a> · <a href="rotating-qr/index.html">Rotating QR mockup</a></p><ul>'+''.join('<li><a href="'+name+'">'+html.escape(route)+'</a></li>' for route,name in names.items())+'</ul>'
(review/'index.html').write_text('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Certifyd local review</title><style>body{font:18px/1.6 system-ui;color:#152238;background:#f3f6fa;margin:0}main{max-width:900px;background:white;padding:40px;margin:auto}h1{font-size:36px;line-height:1.2}a{color:#0753ce}li{margin:12px 0}a{min-height:44px;display:inline-flex;align-items:center}@media(max-width:700px){main{padding:24px}}</style></head><body><main>'+body+'</main></body></html>')
(review/'manifest.json').write_text(json.dumps({'built_from':'Current review branch, npm run build:review export','pages':names,'scripts':'Native connected examples, profile tabs, calculators, readiness and fictional ID sharing; calculator arithmetic comes from the canonical source helper. Browser checks pending. No local analytics, consent loader or submitted enquiries.','browser_qa':'Not performed: computer-use permission denied'},indent=2)+'\n');print('Wrote',len(names),'self-contained local pages plus handover, spec and device mockup.')

with zipfile.ZipFile(site/'docs/local-review.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in review.rglob('*'):
  if p.is_file():z.write(p,Path('certifyd-review')/p.relative_to(review))
