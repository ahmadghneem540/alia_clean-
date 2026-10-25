export type Lang = 'ar' | 'en';
export const config = {
 name: { ar: 'عليا كلين', en: 'ALIA CLEAN' },
 whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
 phone: process.env.NEXT_PUBLIC_PHONE || '', email: process.env.NEXT_PUBLIC_EMAIL || '',
 domain: process.env.NEXT_PUBLIC_SITE_URL || '',
 areas: (process.env.NEXT_PUBLIC_SERVICE_AREAS || '').split(',').filter(Boolean),
 instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '', map: process.env.NEXT_PUBLIC_MAP_URL || '',
 colors: { primary: '#0B5E57', secondary: '#7CC27C', mint: '#CFEDE8' },
 reviews: [] as { name: string; text: string; verified: boolean }[],
 comparison: null as null | { before: string; after: string; permission: boolean },
};
export const services = [
 ['home','تنظيف المنازل','Home cleaning','عناية متكاملة بكل زاوية، لمنزل يرحّب بك كل يوم.','Thoughtful care for every corner of your home.','photo-1600210492486-724fe5c67fb0'],
 ['villa','تنظيف الفلل','Villa cleaning','عناية مدروسة للمساحات الواسعة وتفاصيلها.','Considered care for generous spaces and their details.','photo-1600047509807-ba8f99d2cdde'],
 ['apartment','تنظيف الشقق','Apartment cleaning','مساحات مرتبة ونظيفة، ووقت أكثر لما تحب.','A fresh, orderly space and more time for what you love.','photo-1600607687920-4e2a09cf159d'],
 ['sofa','تنظيف المجالس والكنب','Sofa & majlis cleaning','اهتمام بالأقمشة والمجالس مع مراعاة نوع الخامة.','Care for your seating, tailored to the fabric.','photo-1555041469-a586c61ea9bc'],
 ['kitchen','تنظيف المطابخ','Kitchen cleaning','عناية بالأسطح والتفاصيل وفق احتياجات مطبخك.','Attention to surfaces and details throughout your kitchen.','photo-1556912172-45b7abe8b7e1'],
 ['bathroom','تنظيف الحمامات','Bathroom cleaning','نظافة دقيقة للأسطح والزوايا كثيرة الاستخدام.','Detailed cleaning for everyday surfaces and corners.','photo-1620626011761-996317b8d101'],
 ['construction','تنظيف ما بعد التشطيب','Post-renovation cleaning','تهيئة المساحات بعد التشطيب حسب حالة الموقع.','Prepare your space after renovation, based on its condition.','photo-1600566753086-00f18fb6b3ea'],
 ['deep','التنظيف العميق','Deep cleaning','عناية أعمق بالتفاصيل التي تحتاج وقتًا إضافيًا.','Extra attention to the details that need a little more time.','photo-1600210492486-724fe5c67fb0'],
].map(([slug,ar,en,descAr,descEn,photo])=>({slug,title:{ar,en},description:{ar:descAr,en:descEn},image:`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1200&q=85`,enabled:true}));
export const pages = ['','about','services','booking','faq','contact','privacy','terms'];
export const titles: Record<string,{ar:string;en:string}> = {
 '':{ar:'نظافة استثنائية… وراحة تستحقها',en:'Exceptional care. A calmer home.'},about:{ar:'العناية تبدأ من التفاصيل',en:'Care begins with the details'},services:{ar:'عناية تناسب كل مساحة',en:'Care for every kind of space'},booking:{ar:'خطوتك الأولى لمنزل أنظف',en:'Your first step to a fresher home'},faq:{ar:'كل ما تود معرفته',en:'A little clarity, before we begin'},contact:{ar:'يسعدنا أن نسمع منك',en:'We would love to hear from you'},privacy:{ar:'سياسة الخصوصية',en:'Privacy policy'},terms:{ar:'الشروط والأحكام',en:'Terms & conditions'}};
export const faqs = [
 {ar:['كيف أطلب خدمة تنظيف؟','اختر الخدمة وأكمل نموذج الحجز. سيُجهّز الموقع رسالة واتساب لمراجعتها وإرسالها، ويتواصل معك الفريق لتأكيد التفاصيل.'],en:['How do I request a service?','Choose a service and complete the booking form. Review and send the prepared WhatsApp message; the team will confirm the details.']},
 {ar:['ما خدمات التنظيف المتاحة؟','يمكنك استعراض الخدمات في صفحة خدماتنا. يُحدَّد نطاق العمل المناسب بعد معرفة تفاصيل المساحة واحتياجاتك.'],en:['What services are available?','Browse our services page. The exact scope is agreed after reviewing your space and requirements.']},
 {ar:['هل الموعد الذي أختاره مؤكد؟','الموعد المختار هو موعد مفضّل، ويصبح مؤكدًا فقط بعد موافقة الفريق على التوفر والتفاصيل.'],en:['Is my selected date confirmed?','Your selection is a preferred date. It is confirmed only after the team agrees availability and details.']},
 {ar:['ما مناطق التغطية؟','يرجى مشاركة المدينة والحي للتحقق من إمكانية تقديم الخدمة في موقعك.'],en:['Which areas do you cover?','Share your city and neighborhood so the team can check availability in your area.']},
 {ar:['كيف يتم تحديد السعر؟','يعتمد عرض السعر على نوع الخدمة ومساحة المكان وحالته ونطاق العمل المتفق عليه.'],en:['How is pricing determined?','Quotes depend on the service, size and condition of the property, and agreed scope.']},
 {ar:['كيف أتواصل مع الدعم؟','تظهر وسائل التواصل المعتمدة في صفحة تواصل معنا فور إضافتها من الشركة.'],en:['How can I contact support?','Approved contact channels appear on the contact page once supplied by the company.']},
];
export function whatsappUrl(message:string) { const number=config.whatsapp.replace(/[\s+()-]/g,''); return /^9665\d{8}$/.test(number)?`https://wa.me/${number}?text=${encodeURIComponent(message)}`:null; }
