# Architecture

The web application owns presentation and browser-safe API clients. The Express application owns authentication enforcement, tenant authorization, provider integrations, webhooks, background jobs, and all secret-bearing operations. Shared packages contain types and validation only; they do not import application runtimes.

```text
Browser -> Next.js web -> Express API -> PostgreSQL (Prisma)
                                      -> Redis (queues, locks, realtime)
                                      -> provider adapters
```

Each protected service operation receives an authenticated principal and resolves workspace membership server-side. Browser-supplied workspace IDs are never trusted for authorization.

Provider adapters implement stable internal interfaces. The core domain stores internal IDs and provider IDs separately, records provider events idempotently, and keeps provider-specific metadata in bounded JSON fields. WhatsApp calling is isolated from normal messaging until an upstream proof of concept demonstrates real two-way audio and lifecycle support.

PostgreSQL is the source of truth for tenant data, lifecycle events, and the financial ledger. Redis is for ephemeral coordination, queues, locks, and realtime fan-out. Financial values use integer minor units. Webhook processing is idempotent and audit-sensitive operations append records rather than mutating history.

Milestone 1 establishes package boundaries, config validation, the health endpoint, the Prisma schema foundation, and documentation. Authentication, provider adapters, workers, and production infrastructure are intentionally deferred.
