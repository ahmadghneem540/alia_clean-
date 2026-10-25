import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
const html=[];
function scan(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())scan(p);else if(p.endsWith('.html'))html.push(p)}}
scan(root);let count=0;const broken=[];
for(const file of html){const content=fs.readFileSync(file,'utf8');for(const [,url] of content.matchAll(/href="(\/[^"#?]*)/g)){if(url.startsWith('//'))continue;const clean=decodeURIComponent(url.split('?')[0]);const full=path.join(root,clean);const valid=fs.existsSync(full)&&(fs.statSync(full).isFile()||fs.existsSync(path.join(full,'index.html')));if(!valid)broken.push({file:path.relative(root,file),url});count++;}}
if(broken.length){console.error(broken);process.exit(1)}
for(const p of ['index.html','booking/index.html','services/home/index.html','en/index.html','en/booking/index.html','privacy/index.html','terms/index.html','robots.txt','sitemap.xml'])if(!fs.existsSync(path.join(root,p)))throw new Error('Missing '+p);
console.log(`Passed: ${html.length} HTML files, ${count} internal link checks, required routes present.`);
