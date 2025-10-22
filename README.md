
# Manam Canteen – PRO (GA4 + Pixel + Live Reviews + Menu)

## Setup
1. Copy `.env.example` to `.env` and fill values:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (GA4)
   - `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` (Meta Pixel)
   - `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` (for Google reviews)
   - `NEXT_PUBLIC_BASE_URL` = your deployed URL on Vercel

2. Install & run:
```bash
npm i
npm run dev
```

3. Build + sitemap:
```bash
npm run build
```

## Edit Menu
- Update items in `app/data/menu.ts`
- Replace images in `/public/images/menu/` with real JPEG/PNG (keep filenames or update paths)

## Deploy
- Push to GitHub → Import on Vercel
- Add your domain `manamcanteen.com`
- Set env vars in Vercel Dashboard → Settings → Environment Variables
# Manamcanteen
