# TBP

TBP is a multi-tenant communication SaaS foundation for WhatsApp messaging and AI voice calling. The repository is a TypeScript npm-workspaces monorepo.

## Local development

1. Copy `.env.example` to `.env` and adjust local values.
2. Install dependencies with `npm install`.
3. Run validation with `npm run typecheck`, `npm test`, and `npm run build`.
4. Start the API and web apps with `npm run dev`.

The API health endpoint is available at `GET http://localhost:4000/health`, and the web app is available at `http://localhost:3000`.

PostgreSQL and Redis are production dependencies. The foundation can be inspected and built without live provider credentials; provider calls are not made by default.

See `docs/architecture.md` for the current design and milestone boundaries.
