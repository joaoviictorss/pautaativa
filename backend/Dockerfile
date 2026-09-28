FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
COPY prisma ./prisma

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3333

# Em produção (Render) aplica as migrations e sobe o build.
# No docker-compose local o comando é sobrescrito por `npm run dev`.
CMD ["npm", "run", "start:prod"]
