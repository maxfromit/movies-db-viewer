# Movies DB Viewer

Nuxt 3 / Vue 3 Movie Database Viewer

## Description

This project is a frontend application for a movie database, built as a technical assignment to demonstrate proficiency in Vue 3, Nuxt 3, TypeScript, and modern frontend best practices. The goal is to implement a responsive, maintainable, and cleanly structured interface that matches a provided Figma design, with a main page listing movies and a detail page for each movie.

## Project Goal

- Build a movie database viewer with a main page (movie list) and a detail page (movie info)
- Match the provided Figma design as closely as possible
- Ensure codebase is clean, maintainable, and easy to extend
- Demonstrate strong knowledge of Vue 3, Nuxt 3, and TypeScript

## Main Functionality

- Fetch and display a list of movies (max 16) on the main page (`/`)
- Each movie card links to a detail page (`/movie/<id>`) with more information
- Data is fetched from JSON files hosted via [my-json-server.typicode.com](https://my-json-server.typicode.com) using this GitHub repository as the source
- If the third-party data source is unavailable, the app handles null data gracefully (no fallback to local data)
- Responsive layout, no horizontal scrolling, and mobile support
- Fade page transitions (no loading animations required)

## Interesting Points

- Uses Nuxt 3 for SSR, routing, and DX improvements
- Uses Nuxt UI for fast, modern UI development
- Custom page transitions with fade effect
- Handles third-party API failures gracefully
- Clean separation of layout, components, and pages
- Uses Tailwind CSS for utility-first styling

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3 framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Nuxt UI](https://ui.nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) for HTTP requests
- [ESLint](https://eslint.org/) for code quality

## Setup

Install dependencies:

```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
# bun
bun install
```

## Development

Start the development server at [http://localhost:3000](http://localhost:3000):

```bash
# npm
npm run dev
# pnpm
pnpm run dev
# yarn
yarn dev
# bun
bun run dev
```

## Production

Build for production:

```bash
# npm
npm run build
# pnpm
pnpm run build
# yarn
yarn build
# bun
bun run build
```

Preview production build locally:

```bash
# npm
npm run preview
# pnpm
pnpm run preview
# yarn
yarn preview
# bun
bun run preview
```

See [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more info.

---

**Topic for GitHub:** `nuxt3`, `vue3`, `movie-db`, `frontend-test`, `tailwindcss`, `nuxt-ui`, `typescript`
