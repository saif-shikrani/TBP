# Local development

## Prerequisites

- Node.js 20 or newer.
- npm 10 or newer.
- PostgreSQL 15 or newer for database integration.
- Redis 7 or newer for queues/realtime integration.

## Commands

```bash
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

Database commands are scoped to `@tbp/database`:

```bash
npm run db:validate
npm run db:generate
```

Provider credentials are not required for foundation health checks. Do not point local tests at paid provider accounts.
