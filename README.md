# SaaSify

A SaaS app example made for practice and skill showcase.
It has a Landing Page showing all details about the product with a web app containing all the functionalities that a SaaS might offer.

All made using Nuxt 3 and MongoDB as Database.

Look at the [Live demo](https://exemplo-saas-nuxt.vercel.app/). You can register and use the platform for free! =)

## Local Dev Setup

Make sure to have a [MongoDB](https://www.mongodb.com/) environment running either locally or on the cloud and to install dependencies:

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

Copy the content of the `.env.example` to a `.env` in the root folder.

```
NODE_ENV= // Environment control
MONGODB_URI= // MongoDB connection string
DB_NAME= // MongoDB database name
JWT_SECRET= // JWT secret hash
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```
