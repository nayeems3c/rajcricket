# 🏏 লোকাল সেটআপ গাইড - RRT10 টুর্নামেন্ট ওয়েবসাইট

## ⚠️ গুরুত্বপূর্ণ: ইমেজ সেটআপ

এই প্রজেক্টে Figma থেকে ইমপোর্ট করা ইমেজ আছে যা লোকালি রান করার জন্য আলাদাভাবে সেটআপ করতে হবে।

### স্টেপ ১: পাবলিক ফোল্ডার তৈরি করুন

প্রজেক্ট রুটে একটি `public` ফোল্ডার তৈরি করুন এবং তার ভিতরে `assets` ফোল্ডার তৈরি করুন:

```
mkdir -p public/assets
```

### স্টেপ ২: ইমেজ ফাইল গুলো ডাউনলোড করুন

নিচের ইমেজ গুলো ডাউনলোড করে `public/assets/` ফোল্ডারে রাখুন:

**প্রয়োজনীয় ইমেজ:**

1. **RRT10 Logo** (Navigation এ ব্যবহৃত)
   - ফাইল নাম: `rrt10-logo.png`
   - Figma থেকে এক্সপোর্ট করুন অথবা প্রদত্ত লোগো ব্যবহার করুন

2. **cricGeo Logo** (Media Partners সেকশনে ব্যবহৃত)
   - ফাইল নাম: `cricgeo-logo.png`
   - Figma থেকে এক্সপোর্ট করুন

### স্টেপ ৩: কোড আপডেট করুন

লোকালি রান করার জন্য নিচের ফাইল গুলো আপডেট করতে হবে:

#### 1. `/components/Navigation.tsx`

পরিবর্তন করুন:
```typescript
// পুরাতন
import tournamentLogo from "figma:asset/...";

// নতুন
const tournamentLogo = "/assets/rrt10-logo.png";
```

#### 2. `/components/MediaPartners.tsx`

পরিবর্তন করুন:
```typescript
// পুরাতন
import cricGeoLogo from "figma:asset/...";

// নতুন
const cricGeoLogo = "/assets/cricgeo-logo.png";
```

### স্টেপ ৪: প্রজেক্ট রান করুন

```bash
# প্যাকেজ ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev
```

## 📁 ফোল্ডার স্ট্রাকচার

সঠিক সেটআপের পরে আপনার ফোল্ডার স্ট্রাকচার এরকম হওয়া উচিত:

```
project-root/
├── public/
│   └── assets/
│       ├── rrt10-logo.png
│       └── cricgeo-logo.png
├── components/
│   ├── Navigation.tsx
│   ├── MediaPartners.tsx
│   └── ...
├── package.json
├── vite.config.ts
└── ...
```

## 🔧 বিকল্প পদ্ধতি: সব ইমেজ লোকালি রাখা

যদি আপনি সব Unsplash ইমেজ ও লোকালি রাখতে চান:

### Gallery Images

`App.tsx` তে আপনি Unsplash URL গুলো রিপ্লেস করতে পারেন:

```typescript
// আপনার লোকাল ইমেজ দিয়ে রিপ্লেস করুন
const galleryImages = [
  "/assets/gallery/cricket-1.jpg",
  "/assets/gallery/cricket-2.jpg",
  // ... ইত্যাদি
];
```

### Hero Background & Video Thumbnail

একইভাবে hero background এবং video thumbnail ও লোকাল পাথ দিয়ে রিপ্লেস করুন।

## ⚡ দ্রুত সমাধান (অনলাইন ইমেজ সহ)

যদি শুধু মাত্র লোগো গুলো ঠিক করতে চান এবং বাকি ইমেজ Unsplash থেকে লোড হলেই চলবে:

1. শুধু `rrt10-logo.png` এবং `cricgeo-logo.png` ডাউনলোড করে `public/assets/` তে রাখুন
2. `Navigation.tsx` এবং `MediaPartners.tsx` আপডেট করুন (উপরে দেখানো)
3. বাকি সব ইমেজ Unsplash থেকেই লোড হবে (ইন্টারনেট লাগবে)

## 🐛 সমস্যা সমাধান

### ইমেজ দেখা যাচ্ছে না

1. নিশ্চিত করুন `public/assets/` ফোল্ডারে ইমেজ গুলো আছে
2. ব্রাউজার রিফ্রেশ করুন (Ctrl + Shift + R)
3. ডেভ সার্ভার রিস্টার্ট করুন

### Logo ভেঙ্গে দেখাচ্ছে

1. PNG ফরম্যাটে ইমেজ সেভ করুন
2. ইমেজের সাইজ চেক করুন (খুব বড় হলে compress করুন)
3. ফাইলের নাম চেক করুন (স্পেস বা বিশেষ ক্যারেক্টার নেই তো?)

## 📞 আরও সাহায্য দরকার?

README.md ফাইল দেখুন সম্পূর্ণ ইনস্টলেশন গাইডের জন্য।

---

**সুখবর:** বাকি সব ফিচার (অ্যানিমেশন, স্ক্রোল ইফেক্ট, ডিজাইন) ঠিকভাবে কাজ করবে! শুধু ইমেজ গুলো সেটআপ করলেই হবে! 🎉
