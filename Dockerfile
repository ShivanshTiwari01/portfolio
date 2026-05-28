FROM node:24-alpine

WORKDIR /app

COPY package*.json  pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --config.onlyBuiltDependencies[]="sharp" --config.onlyBuiltDependencies[]="unrs-resolver" --config.onlyBuiltDependencies[]="@tsparticles/engine"

COPY . .

RUN pnpm build

EXPOSE 9000

CMD ["pnpm", "start"]
