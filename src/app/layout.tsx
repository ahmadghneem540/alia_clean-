import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import './globals.css';
const cairo=Cairo({subsets:['arabic','latin'],variable:'--font-cairo',display:'swap'});
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
export const metadata:Metadata={title:'ALIA CLEAN | عليا كلين',description:'عناية احترافية بمنزلك. خدمات تنظيف المنازل والفلل والشقق.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body className={`${cairo.variable} ${inter.variable}`}>{children}</body></html>}
