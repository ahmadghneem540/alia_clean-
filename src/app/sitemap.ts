import {config,pages,services} from '@/lib/config';
export const dynamic='force-static';
export default function sitemap(){if(!config.domain)return [];return ['','en/'].flatMap(prefix=>[...pages,...services.filter(s=>s.enabled).map(s=>`services/${s.slug}`)].map(p=>({url:`${config.domain}/${prefix}${p}${p?'/':''}`,changeFrequency:'monthly' as const,priority:p?0.7:1})));}
