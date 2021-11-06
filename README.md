# Portfolio (in Next.js)

My portfolio made in 4 languages, with localisation and SEO emphasis (meta tags, favicons, lazy loading images, sitemap, robots.txt ...etc.). Comes with Cypress tests.

Viewable here: **https://yhr.vercel.app/**
Tests viewable here: **https://dashboard.cypress.io/projects/t4gjjp/runs/1/specs**

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

#### Tests:

```
npm run cypress
```

## Features:

- Fully responsive mobile-first server-side rendered website with emphasis on SEO (Updating HTML lang tag, title and description as the page changes).
- Available in 4 languages with localised routing (Example: language is automatically set to Russian if "/ru" follows the url).
- End-to-end tests written with Cypress with video provided on the link above (Cypress dashboard).
- Lazy-loading images for better performance.
- 404 routing when trying to access non-existent pages.
- Fully validated contact form with automatic acknowledgement-of-receipt e-mail in the viewer's language with form validation and error handling.
- Google reCAPTCHA preventing unwanted use of contact form.

## Technologies:

- Next.js (a production framework for React).
- TypeScript for less error-prone code.
- Functional ReactJS (with hooks).
- NodeJS for e-mail API.
- Cypress for end-to-end testing.
- Axios for HTTP requests to API.
- next-translate for internationalization.
- Sass using 7-1 pattern for styles.
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
