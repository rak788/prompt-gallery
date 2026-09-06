# معرض البرومبتات التعليمية

موقع عربي (RTL) لعرض صور وبرومبتات تعليمية جاهزة للنسخ. كل بطاقة تعرض الصورة في الأعلى والبرومت التعليمي تحتها مع زر **نسخ البرومت**.

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح http://localhost:3000

لبناء نسخة الإنتاج:

```bash
npm install
npm run build
npm start
```

يمكنك أيضاً استخدام Bun: `bun install && bun run dev`

## إضافة صورة وبرومت جديد

1. (اختياري) ضع صورة في مجلد `public/` — مثلاً `public/my-lesson.jpg`.
2. افتح ملف البيانات `data/prompts.json` وأضف عنصراً جديداً:

```json
{
  "id": "7",
  "title": "عنوان الدرس",
  "prompt": "نص البرومت التعليمي هنا...",
  "image": "/my-lesson.jpg",
  "category": "تصنيف",
  "description": "وصف قصير اختياري"
}
```

- `image` يمكن أن يكون مساراً محلياً مثل `/my-lesson.jpg` أو رابطاً خارجياً (مثل Unsplash أو Picsum).
- تأكد أن `id` فريد لكل عنصر.
3. احفظ الملف وأعد تشغيل السيرفر إن لزم الأمر — سيظهر العنصر تلقائياً في المعرض وصفحة التفاصيل.

## هيكل المشروع

```
prompt-gallery/
├── data/prompts.json          # بيانات المعرض
├── public/                    # الصور المحلية
├── src/
│   ├── app/                   # صفحات App Router
│   │   ├── page.tsx           # الصفحة الرئيسية (شبكة البطاقات)
│   │   └── prompt/[id]/      # صفحة تفاصيل كل برومت
│   ├── components/            # بطاقة، زر النسخ، الهيدر
│   └── lib/                   # الأنواع وقراءة البيانات
└── README.md
```

## النشر على Cloudflare Pages

للنشر كـ static site على Cloudflare Pages:

1. اربط المستودع `rak788/prompt-gallery` بمشروع Pages جديد.
2. إعدادات البناء:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. انشر — لا حاجة لمتغيرات بيئة إضافية. المشروع مُعدّ بـ `output: 'export'` في `next.config.ts`.

## النشر على Vercel

1. اربط المستودع rak788/prompt-gallery بمشروع جديد على Vercel.
2. إعدادات البناء الافتراضية لـ Next.js كافية.
3. انشر — لا حاجة لمتغيرات بيئة إضافية.

## التقنيات

- Next.js (App Router) + TypeScript
- Tailwind CSS
- واجهة عربية بالكامل مع اتجاه RTL وخط Cairo
