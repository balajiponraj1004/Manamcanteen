<<<<<<< HEAD
# ManamWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======

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
>>>>>>> 57997ece80d0464d464f1c3c71beb5f1e5ca1e3e
