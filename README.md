# Portfolio (in Next.js)

My portfolio made in 4 languages, with localisation and SEO emphasis (meta tags, favicons, lazy loading images, sitemap, robots.txt ...etc.). Comes with Cypress tests.

Viewable here: **https://yhr.vercel.app/**

Tests viewable here: **https://dashboard.cypress.io/projects/t4gjjp/runs/2/test-results**

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

- Fully responsive mobile-first server-side rendered website with emphasis on SEO (Updating HTML lang tag, title and description as the page changes);
- Available in 4 languages with localised routing (Example: language is automatically set to Russian if "/ru" follows the url);
- End-to-end tests written with Cypress with video provided on the link above (Cypress dashboard);
- Lazy-loading images for better performance;
- 404 routing when trying to access non-existent pages;
- Fully validated contact form with automatic acknowledgement-of-receipt e-mail in the viewer's language with form validation and error handling;
- Google reCAPTCHA preventing unwanted use of contact form;
- Dark mode theme taking into account browser preferences and persisting user's changes on localStorage.

## Technologies:

- Next.js (a production framework for React);
- TypeScript for less error-prone code;
- Functional ReactJS (with hooks);
- NodeJS for e-mail API (using Next's Backend-for-frontend);
- Cypress for end-to-end testing;
- Axios for HTTP requests to API;
- next-translate for internationalization;
- Sass using 7-1 pattern for styles;
- regex for frontend and backend form validation;
- Global state management for Authentication and Theme (context providers);
- Emotion (CSS in JS) for dropdown menu of below `React-select`;
- react-tsparticles for header particles;
- React-select for dropdown menu;
- Google reCAPTCHA for spam protection;
- Google Analytics for... analytics;
- SendGrid for sending e-mails;
- Husky, ESLint and Prettier, for git hooks, better code consistency and security.

## Upcoming features:

- Make it Jamstack with Strapi CMS & fetch data through GraphQL in SSG;
- Dynamic route generation;
- Authentication section.
