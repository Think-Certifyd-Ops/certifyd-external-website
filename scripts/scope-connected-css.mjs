import fs from 'node:fs';
import postcss from 'postcss';
import selectors from 'postcss-selector-parser';
import { fileURLToPath } from 'node:url';
const input=process.argv[2];const output=fileURLToPath(new URL('../src/styles/connected.css',import.meta.url));
const root=postcss.parse(fs.readFileSync(input,'utf8').replaceAll('../assets/','/images/connected/'));
root.walkRules(rule=>{if(rule.parent.type==='atrule'&&/keyframes/.test(rule.parent.name))return;if(rule.selector.includes('&'))return;if(/certifyd-header|header-inner|header-brand|header-desktop|header-group|header-panel|header-item|header-actions|header-login|#mobile-menu/.test(rule.selector))return;rule.selector=selectors(sels=>{sels.each(sel=>{let scoped=false;sel.walk(node=>{if((node.type==='tag'&&['html','body'].includes(node.value))||(node.type==='pseudo'&&[':root',':host'].includes(node.value))){node.replaceWith(selectors.className({value:'connected'}));scoped=true}});if(!scoped){sel.prepend(selectors.combinator({value:' '}));sel.prepend(selectors.className({value:'connected'}))}})}).processSync(rule.selector)});
fs.writeFileSync(output,root.toString()+'\n.connected{font-family:Plex,sans-serif;color:#0A1224;background:#fff}.connected .display{font-size:var(--t-h1)}.connected .heading{font-size:var(--t-h2)}\n');
