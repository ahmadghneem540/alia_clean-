import {config} from '@/lib/config';
export const dynamic='force-static';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},...(config.domain?{sitemap:`${config.domain}/sitemap.xml`}:{})};}
