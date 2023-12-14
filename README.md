[![Animevariant](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/svelte-manga.yaml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/svelte-manga.yaml)
[![breath-first-search](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/breath-first-search.yaml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/breath-first-search.yaml)
[![chatbot-ai](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/chatbot-ai.yaml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/chatbot-ai.yaml)
[![depth-first-search](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/depth-first-search.yaml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/depth-first-search.yaml)
[![issues](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/issues.yaml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/issues.yaml)
[![Lint Code Base](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/linter.yaml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/linter.yaml)
[![weather](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/weather.yml/badge.svg)](https://github.com/valiantlynx/valiantlynx-turborepo/actions/workflows/weather.yml)

# Animevariant

## Quick Start

## Included Packages and Tools

This Turborepo includes the following packages/apps and utilities:

### Apps and Packages

`docs`: A documentation app with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
`web`: A web app with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
`ui`: A React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
`svelte-docs`: A documentation app with [SvelteKit](https://kit.svelte.dev/)
`svelte-manga`: A web app with [SvelteKit](https://kit.svelte.dev/)
`svelte-ui`: A Svelte component library shared by both `svelte-web` and `svelte-docs`
`eslint-config-custom`: ESLint configurations (includes `eslint-config-next`, `eslint-plugin-svelte`, and `eslint-config-prettier`)
`tsconfig`: `tsconfig.json` files used throughout the monorepo
Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building `packages/ui`

This example is set up to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This is done to share one `tailwind.config.js` easily and ensure that only the CSS used by the current application and its dependencies is generated.
An alternative is to consume `packages/ui` directly from source without building. If you choose this option, update your `tailwind.config.js` to recognize your package locations, so it can find all usages of the `tailwindcss` class names. For instance:

```js
  content: [
    // App content
    `src/**/*.{js,ts,jsx,tsx}`,
    // Include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo includes a set of useful tools:
[Tailwind CSS](https://tailwindcss.com/) for styling
[TypeScript](https://www.typescriptlang.org/) for static type checking
[ESLint](https://eslint.org/) for code linting
[Prettier](https://prettier.io/) for code formatting

# Turborepo Docker Starter

This repository is your Turborepo Docker starter pack. It's designed to help you quickly set up a Turborepo project that includes a Docker-based deployment workflow.

## Getting Started

1. Build the Docker containers and start the applications:

```sh
  docker network create minfuel-turborepo
  COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build
  docker-compose -f docker-compose.yml up -d

```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

2. To shut down all running containers:

```sh
  docker kill $(docker ps -q) && docker rm $(docker ps -a -q)

```

### Remote Caching

This Turborepo includes optional remote caching. In the Dockerfiles of the apps, uncomment the build arguments for `TURBO_TEAM` and `TURBO_TOKEN`. Then, pass these build arguments to your Docker build.
You can test this behavior using a command like:
`docker build -f apps/svelte-manga/Dockerfile . --build

### adding new projects with their own git history
```sh
git subtree add --prefix=apps/anime-site https://github.com/valiantlynx/anime-site.git master --squash
git subtree pull --prefix=apps/anime-site https://github.com/valiantlynx/anime-site.git master --squash
git subtree push --prefix=apps/anime-site https://github.com/valiantlynx/anime-site.git master

```

### publishing packages 
```sh
yarn publish:packages // this will publish all packages that are not private
```

free svg icons: https://www.svgrepo.com/svg/122485/car-placeholder