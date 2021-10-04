# Portfolio (in Next.js)

My portfolio made in 4 languages, with localisation and an emphasis on SEO (meta tags, favicons, lazy loading images, sitemap, robots.txt ...etc.).

Viewable here: **https://yacine-hadj-rabia-portfolio-nextjs.vercel.app/**

## Setup:

#### Installation:

From root folder

```
npm install
```

#### Use:

```
npm run dev
```

## Features:

- Fully responsive mobile-first server-side rendered website with emphasis on SEO (Updating HTML lang tag, title and description as the page changes).
- Site available in 4 languages with localised routing (Example: page switches automatically to Russian if "/ru" is added to the url).
- Lazy-loading images for better performance.
- 404 routing when trying to access non-existent pages.
- Fully validated contact form with automatic acknowledgement of receipt e-mail in the viewer's language with toaster for error handling.
- Google reCAPTCHA preventing bots from using contact form.

## Technologies:

- Next.js (a production framework for React).
- TypeScript for less error-prone code.
- Functional ReactJS (with hooks).
- NodeJS for e-mail API.
- Axios for HTTP requests to API.
- next-translate for internationalization.
- Sass using 7-1 pattern.
- regex for frontend and backend form validation.
- Emotion (CSS in JS) for dropdown menu.
- react-tsparticles for header particles.
- React-select for dropdown menu.
- Google reCAPTCHA for spam protection.
- Google Analytics for...analytics.
- SendGrid for sending e-mails.

## Upcoming features:

- Dark mode.
- Dynamic route generation.
