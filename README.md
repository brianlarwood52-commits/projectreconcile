# The Holy Spirit - Daytime Talk Show

A Next.js Progressive Web App (PWA) featuring a Christian talk show about the work of the Holy Spirit, designed with a warm, inviting daytime TV talk show aesthetic similar to Drew Barrymore's show.

## Features

- ✨ **Next.js 14** with App Router
- 📱 **Progressive Web App (PWA)** - Installable on mobile and desktop
- 🎨 **Daytime TV Aesthetic** - Warm, inviting design with cozy colors
- ⚡ **Fast & Responsive** - Optimized for all devices
- 🔄 **Offline Support** - Works offline with service worker

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
projectreconcile/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles with talk show theme
├── public/
│   ├── manifest.json   # PWA manifest
│   └── [icons]         # PWA icons (to be added)
├── next.config.js      # Next.js config with PWA
├── package.json
└── tsconfig.json
```

## PWA Setup

The app is configured as a PWA using `next-pwa`. To complete the setup:

1. Add app icons to `/public`:
   - `icon-192x192.png`
   - `icon-512x512.png`
   - `favicon.ico`

2. The service worker will be automatically generated on build

## Customization

### Colors
The color scheme is defined in `app/globals.css`:
- Warm beige and cream backgrounds
- Brown and golden accents
- Soft, inviting palette

### Content
Edit `app/page.tsx` to customize episodes and content.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **next-pwa** - PWA functionality
- **CSS Modules** - Styling

## License

This project is private and proprietary.

---

Built with ❤️ for sharing the work of the Holy Spirit

