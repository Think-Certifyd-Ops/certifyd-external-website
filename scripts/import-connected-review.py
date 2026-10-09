from pathlib import Path
import re,json,shutil
import sys
src=Path(sys.argv[1]).resolve()
dst=Path(__file__).resolve().parents[1]
routes={'index':'/','platform':'/platform/','records':'/platform/records/',**{x['local_page'][:-5]:x['original_route'] for x in json.loads((src/'outcome-routes.json').read_text())}}
for d in ['src/components/connected','src/app/_connected-html','public/images/connected','scripts','docs']: (dst/d).mkdir(parents=True,exist_ok=True)
for f in ['logo.svg','mark.svg','ibm-plex-sans.woff2','ibm-plex-mono-700.woff2','roles.png']:shutil.copyfile(src.parent/'assets'/f,dst/'public/images/connected'/f)
def transform(s):
 for name,path in sorted(routes.items(), key=lambda item: -len(item[0])):s=s.replace(name+'.html',path)
 s=s.replace('../assets/','/images/connected/').replace('https://certifyd.io/','/')
 return s
for name,route in routes.items():
 s=(src/(name+'.html')).read_text();body=re.search(r'<main\b.*?</main>',s,re.S).group();body=body.replace('<main','<div',1);body=body.rsplit('</main>',1)[0]+'</div>'
 dialog=re.search(r'<dialog\b.*?</dialog>',s,re.S).group();body=transform(body+dialog)
 # Preserve the approved review content; production visual proof remains a release gate.
 (dst/'src/app/_connected-html'/f'{name}.json').write_text(json.dumps(body,ensure_ascii=False)+'\n')
 title=re.search(r'<title>(.*?)</title>',s).group(1)
 if name=='index':title='Certifyd | Workplace credentials and compliance'
 if name=='platform':title='Workforce compliance platform | Certifyd'
 desc=re.search(r'name="description" content="([^"]+)',s).group(1)
 if name=='platform':desc='Manage role requirements, worker credentials, company records, expiry dates and site attendance in one workforce compliance platform.'
 if len(desc)>160:desc=desc[:157].rsplit(' ',1)[0]+'.'
 directory=dst/'src/app'/route.strip('/');directory.mkdir(parents=True,exist_ok=True)
 (directory/'page.tsx').write_text('import type { Metadata } from "next";\nimport { ConnectedPage } from "@/components/connected/ConnectedPage";\nimport body from "@/app/_connected-html/'+name+'.json";\nexport const metadata: Metadata = '+json.dumps({'title':{'absolute':title},'description':desc,'alternates':{'canonical':route},'openGraph':{'title':title,'description':desc,'url':'https://certifyd.io'+route}},indent=2)+';\nexport default function Page(){return <ConnectedPage html={body} />}\n')

html=(src/"index.html").read_text()
header=transform(re.search(r"<header\b.*?</header>",html,re.S).group()).replace('href="#demo"','href="https://cal.com/andrew-speer/certifyd-discovery"')
(dst/"src/components/marketing/header-content.json").write_text(json.dumps(header,ensure_ascii=False)+"\n")
