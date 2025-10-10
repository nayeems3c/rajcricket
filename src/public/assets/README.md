# Assets Folder

## Required Images

এই ফোল্ডারে নিম্নলিখিত ইমেজ ফাইল গুলো রাখুন:

### Logos

1. **rrt10-logo.png** - Tournament Logo (RRT10)
   - Used in: Navigation bar
   - Recommended size: 200x100px (transparent background)
   - Format: PNG

2. **cricgeo-logo.png** - cricGeo Media Partner Logo
   - Used in: Media Partners section
   - Recommended size: 200x80px
   - Format: PNG

## How to Add Images

1. Download or export the logos from Figma
2. Save them in this folder with exact names:
   - `rrt10-logo.png`
   - `cricgeo-logo.png`

## File Structure

```
public/
└── assets/
    ├── rrt10-logo.png
    ├── cricgeo-logo.png
    └── README.md (this file)
```

## Note

- Gallery images, hero background, and video thumbnails are loaded from Unsplash URLs
- If you want to use local images for those, add them here and update the URLs in `App.tsx`
