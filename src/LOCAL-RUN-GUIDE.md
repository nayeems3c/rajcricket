# 🚀 লোকাল রান করার সহজ গাইড

## 📝 দ্রুত শুরু করুন (৫ মিনিটে)

### ১. লোগো ফাইল প্রস্তুত করুন

প্রজেক্ট ফোল্ডারে `public/assets/` ফোল্ডার আছে। সেখানে দুটি ইমেজ রাখুন:

- **rrt10-logo.png** - টুর্নামেন্ট লোগো (সবুজ-কমলা RRT10 লোগো)
- **cricgeo-logo.png** - মিডিয়া পার্টনার লোগো (লাল-সাদা cricGeo লোগো)

### ২. কোড আপডেট করুন

#### 📄 ফাইল: `/components/Navigation.tsx`

**লাইন 4** খুঁজুন এবং পরিবর্তন করুন:

```typescript
// ❌ এটি মুছে দিন
import tournamentLogo from "figma:asset/0a2d74cb0f78f18fcd2bb7ca1866ace809c45348.png";

// ✅ এটি লিখুন
const tournamentLogo = "/assets/rrt10-logo.png";
```

**সম্পূর্ণ আপডেটেড শুরু (লাইন 1-4):**
```typescript
import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const tournamentLogo = "/assets/rrt10-logo.png";
```

---

#### 📄 ফাইল: `/components/MediaPartners.tsx`

**লাইন 2** খুঁজুন এবং পরিবর্তন করুন:

```typescript
// ❌ এটি মুছে দিন
import cricGeoLogo from "figma:asset/a0d91351382b23f877bed8f3c522adcbd8764346.png";

// ✅ এটি লিখুন
const cricGeoLogo = "/assets/cricgeo-logo.png";
```

**সম্পূর্ণ আপডেটেড শুরু (লাইন 1-2):**
```typescript
import { motion } from "motion/react";
const cricGeoLogo = "/assets/cricgeo-logo.png";
```

---

### ৩. প্যাকেজ ইনস্টল ও রান করুন

#### Terminal/CMD খুলুন:

**Windows:**
- `Win + R` চাপুন
- `cmd` টাইপ করে Enter চাপুন

**Mac/Linux:**
- Terminal খুলুন

#### প্রজেক্ট ফোল্ডারে যান:

```bash
cd "C:\path\to\your\project"
```

#### কমান্ড রান করুন:

```bash
# ১. প্যাকেজ ইনস্টল করুন
npm install

# ২. সার্ভার চালু করুন
npm run dev
```

#### ব্রাউজার খুলুন:

সার্ভার চালু হলে এরকম দেখাবে:
```
➜  Local:   http://localhost:5173/
```

এই URL টি আপনার ব্রাউজারে খুলুন! 🎉

---

## 📂 ফোল্ডার স্ট্রাকচার চেক করুন

আপনার প্রজেক্ট এরকম দেখতে হবে:

```
rrt10-project/
├── public/
│   └── assets/
│       ├── rrt10-logo.png       ✅ এই দুটি ফাইল থাকতে হবে
│       └── cricgeo-logo.png     ✅
│
├── components/
│   ├── Navigation.tsx           ⚙️ আপডেট করেছেন
│   ├── MediaPartners.tsx        ⚙️ আপডেট করেছেন
│   └── ...
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## ✅ চেকলিস্ট

নিচের সব কাজ করেছেন কিনা চেক করুন:

- [ ] `public/assets/rrt10-logo.png` ফাইল আছে
- [ ] `public/assets/cricgeo-logo.png` ফাইল আছে
- [ ] `/components/Navigation.tsx` এ `const tournamentLogo = "/assets/rrt10-logo.png";` লিখেছেন
- [ ] `/components/MediaPartners.tsx` এ `const cricGeoLogo = "/assets/cricgeo-logo.png";` লিখেছেন
- [ ] `npm install` কমান্ড রান করেছেন
- [ ] `npm run dev` কমান্ড রান করেছেন

সব ✅ হলে আপনার ওয়েবসাইট পারফেক্ট দেখাবে! 🏆

---

## 🎨 কি কি দেখতে পাবেন

✨ **Navigation Bar:**
- RRT10 লোগো (সবুজ-কমলা)
- স্মুথ স্ক্রোল অ্যানিমেশন
- রেসপন্সিভ মোবাইল মেনু

🏏 **Hero Section:**
- ক্রিকেট স্টেডিয়াম ব্যাকগ্রাউন্ড
- অ্যানিমেটেড টাইটেল
- ফ্লোটিং ক্রিকেট বল/ব্যাট

📺 **Media Partners:**
- cricGeo লোগো (লাল-সাদা)
- গ্রিন গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড
- Live স্ট্রিমিং ইনফো

📸 **Photo Gallery:**
- Unsplash ক্রিকেট ইমেজ (অটোমেটিক লোড)
- গ্রিড লেআউট

🎬 **Video Teaser**
📱 **Contact Form** (WhatsApp লিংক সহ)
👣 **Footer**

---

## 🐛 সমস্যা হলে

### ❌ "Cannot find module" এরর

**সমাধান:**
```bash
rm -rf node_modules
npm install
```

### ❌ লোগো দেখা যাচ্ছে না

**চেক করুন:**
1. `public/assets/` তে ফাইল আছে কিনা
2. ফাইলের নাম ঠিক আছে কিনা (ছোট হাতের অক্ষর, স্পেস নেই)
3. Browser refresh করুন (Ctrl + Shift + R)

### ❌ Port 5173 already in use

**সমাধান:**
```bash
# অন্য পোর্টে রান করুন
npm run dev -- --port 3000
```

### ❌ Unsplash ইমেজ লোড হচ্ছে না

**কারণ:** ইন্টারনেট সংযোগ দরকার gallery/hero/video ইমেজের জন্য

**সমাধান:** ইন্টারনেট চেক করুন, বা লোকাল ইমেজ ব্যবহার করুন

---

## 💡 টিপস

1. **VS Code ব্যবহার করুন** - সহজে কোড এডিট করা যায়
2. **Live Server** - কোড পরিবর্তন করলেই অটো রিফ্রেশ হয়
3. **DevTools** - F12 চেপে কোন এরর আছে কিনা দেখুন

---

## 🎯 পরবর্তী স্টেপ

আপনার ওয়েবসাইট চলছে? এখন:

- 🎨 কালার কাস্টমাইজ করুন (`styles/globals.css`)
- 📝 টেক্সট পরিবর্তন করুন (যেকোনো কম্পোনেন্ট ফাইলে)
- 📞 WhatsApp নম্বর আপডেট করুন (`ContactSection.tsx`)
- 🏢 স্পন্সর যোগ করুন (`SponsorsSection.tsx`)

---

**সফলতা কামনা করছি! যদি সব ঠিকভাবে কাজ করে তাহলে আপনি একটি প্রফেশনাল ক্রিকেট টুর্নামেন্ট ওয়েবসাইট পাবেন! 🏆✨**
