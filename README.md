# Nuxt UI v3 Starter

This project is a starter template for Nuxt 3 with Nuxt UI, ESLint, and Axios. It includes a basic setup for a movie database viewer.

## Project Description

This project is a movie database viewer built with Nuxt 3. It fetches movie data from a JSON server and displays it in a grid layout. Users can click on a movie to view its details.

The project uses `https://my-json-server.typicode.com` to fetch JSON data from the GitHub repository associated with this project.
So as storing data relies on a third-party service, it could be broken somehow. If this happens, I decided not to replace fetched data with data stored locally but to add logic to handle null data.

## Features

- Fetch and display movie data
- View movie details
- Responsive design
- Customizable UI components

## Setup

Make sure to install the dependencies:

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

## Development Server

Start the development server on `http://localhost:3000`:

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

Build the application for production:

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

Locally preview production build:

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
