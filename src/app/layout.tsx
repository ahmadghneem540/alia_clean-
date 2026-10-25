import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import './globals.css';
const arabic=IBM_Plex_Sans_Arabic({weight:['400','500','600','700'],subsets:['arabic','latin'],variable:'--font-arabic',display:'swap'});
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
export const metadata:Metadata={title:'ALIA CLEAN | عليا كلين',description:'عناية احترافية بمنزلك. خدمات تنظيف المنازل والفلل والشقق.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body className={`${arabic.variable} ${inter.variable}`}>{children}</body></html>}
