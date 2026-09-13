# PautaViva

Plataforma de participação cidadã — proposição, discussão, moderação e
votação de pautas locais em tempo real. (TCC)

## Stack

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Fastify + TypeScript
- **Banco**: PostgreSQL + Prisma
- **Tempo real**: Socket.io (rooms por `pautaId`)
- **Auth**: JWT (`@fastify/jwt`)
- **Infra local**: Docker Compose

## Rodando com Docker (recomendado)

```bash
cp .env.example .env
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3333
- Postgres: localhost:5432

Na primeira vez (e sempre que o schema do Prisma mudar), rode a migration
dentro do container do backend:

```bash
docker compose exec backend npx prisma migrate dev --name init
```

## Rodando sem Docker

### Backend

```bash
cd backend
cp .env.example .env # ajuste DATABASE_URL para seu Postgres local
npm install
npx prisma migrate dev --name init
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Estado atual do setup

Este é o esqueleto técnico inicial do projeto — infraestrutura e stack
funcionando de ponta a ponta, ainda sem as regras de negócio do domínio:

- Backend com error handler central (Zod, `BadRequestError`,
  `UnauthorizedError`), middleware de auth JWT (`getCurrentUserId`) e as
  rotas `POST /users` (cadastro) e `POST /sessions/password` (login).
- Único model no Prisma é `User`, o suficiente para autenticação. A
  modelagem de pauta, comentário e voto entra na próxima etapa, junto das
  rotas de negócio.
- Socket.io já configurado no mesmo servidor HTTP do Fastify, com rooms por
  `pautaId` (`join-pauta` / `leave-pauta`) prontas para os eventos de
  discussão e votação em tempo real.
- Frontend com Tailwind CSS configurado, sem UI além de um placeholder.
