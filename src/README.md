# Rajshahi Regional Tape T-10 Cricket Tournament Website

একটি আধুনিক, সুন্দর এবং প্রাণবন্ত ওয়েবসাইট যা রাজশাহী আঞ্চলিক টেপ টি-১০ ক্রিকেট টুর্নামেন্টের জন্য তৈরি করা হয়েছে।

## 🚀 বৈশিষ্ট্য

- ✨ আধুনিক অ্যানিমেশন এবং ইন্টারঅ্যাকশন
- 🏏 ক্রিকেট-থিমযুক্ত ডিজাইন এবং পটভূমি উপাদান
- 📱 সম্পূর্ণ রেসপন্সিভ ডিজাইন
- 🎨 বাংলাদেশ ক্রিকেটের রঙ (সবুজ #00833E এবং সোনালি #FFD700)
- 🎬 ভিডিও টিজার এবং ফটো গ্যালারি
- 📞 WhatsApp ইন্টিগ্রেশন সহ যোগাযোগ ফর্ম
- 🎥 cricGeo মিডিয়া পার্টনার সেকশন

## 📋 সিস্টেম প্রয়োজনীয়তা

আপনার কম্পিউটারে নিম্নলিখিত সফটওয়্যার ইনস্টল থাকতে হবে:

- **Node.js** (সংস্করণ 18.x বা তার উপরে) - [ডাউনলোড করুন](https://nodejs.org/)
- **npm** বা **yarn** (Node.js এর সাথে আসে)

## 🛠️ ইনস্টলেশন নির্দেশাবলী

### ⚠️ গুরুত্বপূর্ণ: ইমেজ সেটআপ

**প্রথমে এই কাজ করুন:**

1. `public/assets/` ফোল্ডারে দুটি লোগো ফাইল রাখুন:
   - `rrt10-logo.png` (Tournament Logo)
   - `cricgeo-logo.png` (Media Partner Logo)

2. নিচের দুটি ফাইলে `figma:asset/...` ইমপোর্ট রিপ্লেস করুন:

**`/components/Navigation.tsx`** তে লাইন 4 পরিবর্তন করুন:
```typescript
// পুরাতন
import tournamentLogo from "figma:asset/0a2d74cb0f78f18fcd2bb7ca1866ace809c45348.png";

// নতুন
const tournamentLogo = "/assets/rrt10-logo.png";
```

**`/components/MediaPartners.tsx`** তে লাইন 2 পরিবর্তন করুন:
```typescript
// পুরাতন  
import cricGeoLogo from "figma:asset/a0d91351382b23f877bed8f3c522adcbd8764346.png";

// নতুন
const cricGeoLogo = "/assets/cricgeo-logo.png";
```

বিস্তারিত দেখুন: `SETUP-LOCAL.md` ফাইলে

### ধাপ ১: প্রজেক্ট ডাউনলোড করুন

প্রজেক্ট ফোল্ডারটি আপনার কম্পিউটারের যেকোনো জায়গায় রাখুন।

### ধাপ ২: টার্মিনাল খুলুন

- **Windows**: Command Prompt বা PowerShell খুলুন
- **Mac**: Terminal খুলুন
- **VS Code ব্যবহারকারীরা**: VS Code এ প্রজেক্ট খুলে Ctrl+\` (backtick) চাপুন

### ধাপ ৩: প্রজেক্ট ফোল্ডারে যান

```bash
cd path/to/your/project
```

### ধাপ ৪: প্যাকেজ ইনস্টল করুন

```bash
npm install
```

অথবা যদি Yarn ব্যবহার করেন:

```bash
yarn install
```

### ধাপ ৫: ডেভেলপমেন্ট সার্ভার চালু করুন

```bash
npm run dev
```

অথবা Yarn এর জন্য:

```bash
yarn dev
```

### ধাপ ৬: ব্রাউজারে দেখুন

টার্মিনালে একটি URL দেখাবে, সাধারণত:
```
http://localhost:5173
```

এই URL টি আপনার ব্রাউজারে খুলুন।

## 📦 বিল্ড করুন (প্রোডাকশনের জন্য)

প্রোডাকশন বিল্ড তৈরি করতে:

```bash
npm run build
```

অথবা:

```bash
yarn build
```

বিল্ড করা ফাইলগুলো `dist/` ফোল্ডারে পাওয়া যাবে।

## 🔧 প্রযুক্তি স্ট্যাক

- **React 18** - UI লাইব্রেরি
- **TypeScript** - টাইপ সেফটির জন্য
- **Vite** - বিল্ড টুল এবং ডেভ সার্ভার
- **Tailwind CSS v4** - স্টাইলিং
- **Motion (Framer Motion)** - অ্যানিমেশন
- **Lucide React** - আইকন
- **Recharts** - চার্ট এবং গ্রাফ
- **Radix UI** - UI কম্পোনেন্ট

## 📁 প্রজেক্ট স্ট্রাকচার

```
├── App.tsx                 # মূল অ্যাপ কম্পোনেন্ট
├── main.tsx               # এন্ট্রি পয়েন্ট
├── index.html             # HTML টেমপ্লেট
├── components/            # সব কম্পোনেন্ট
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── TournamentOverview.tsx
│   ├── TeamRegistration.tsx
│   ├── SponsorsSection.tsx
│   ├── MediaPartners.tsx
│   ├── PhotoGallery.tsx
│   ├── VideoTeaser.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css        # গ্লোবাল স্টাইল
└── package.json           # প্রজেক্ট ডিপেন্ডেন্সি

```

## 🎨 কাস্টমাইজেশন

### রঙ পরিবর্তন করতে

`styles/globals.css` ফাইলে CSS ভেরিয়েবল পরিবর্তন করুন অথবা সরাসরি Tailwind ক্লাসে রঙ ব্যবহার করুন:

- প্রাইমারি গ্রিন: `#00833E`
- সোনালি: `#FFD700`

### ছবি পরিবর্তন করতে

`App.tsx` ফাইলে ছবির URL পরিবর্তন করুন।

### যোগাযোগ তথ্য আপডেট করতে

`components/ContactSection.tsx` ফাইলে WhatsApp নম্বর এবং অন্যান্য তথ্য পরিবর্তন করুন।

## 🐛 সমস্যা সমাধান

### যদি `npm install` কাজ না করে:

```bash
npm cache clean --force
npm install
```

### যদি পোর্ট 5173 ব্যবহৃত থাকে:

`vite.config.ts` ফাইলে পোর্ট নম্বর পরিবর্তন করুন:

```typescript
export default defineConfig({
  server: {
    port: 3000, // আপনার পছন্দের পোর্ট
  },
  // ... rest of config
})
```

### যদি ছবি লোড না হয়:

নিশ্চিত করুন যে আপনার ইন্টারনেট সংযোগ আছে কারণ কিছু ছবি Unsplash থেকে লোড হয়।

## 📞 সাহায্য দরকার?

যদি কোন সমস্যা হয়, নিম্নলিখিত পদক্ষেপ নিন:

1. নিশ্চিত করুন Node.js সঠিকভাবে ইনস্টল হয়েছে: `node --version`
2. `node_modules` ফোল্ডার ডিলিট করে পুনরায় `npm install` চালান
3. ব্রাউজার ক্যাশ ক্লিয়ার করুন

## 📄 লাইসেন্স

এই প্রজেক্ট Rajshahi Regional Tape T-10 Cricket Tournament এর জন্য তৈরি।

---

**তৈরি করেছেন ❤️ দিয়ে বাংলাদেশে**
