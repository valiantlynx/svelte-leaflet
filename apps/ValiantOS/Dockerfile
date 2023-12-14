FROM node:18-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune valiantos --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN


# You can adjust the memory limit based on your specific requirements.
RUN NODE_OPTIONS="--max-old-space-size=8192" DEPLOY_TARGET=node yarn turbo run build --filter=valiantos --concurrency 2


# Create a new stage for the runner
FROM base AS runner
WORKDIR /app

# Don't run production as root - add a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 svelte
USER svelte


# Copy the necessary files from the installer stage
COPY --from=installer /app/apps/ValiantOS/package.json .
COPY --from=installer /app/apps/ValiantOS/build /app/build

EXPOSE 3000

# Modify this line to start your SvelteKit application, e.g., run your server.js or the appropriate script.
CMD [ "node", "build" ]
