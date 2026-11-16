# Risks, credentials, and open inputs

## Risks

- Baileys messaging and WhatsApp calling have different feasibility and support profiles; calling must not be represented as working until an isolated two-way-audio proof of concept succeeds.
- Provider webhooks can be duplicated or arrive out of order; every handler needs signature verification, idempotency, and persisted events.
- Tenant isolation is a security invariant and must be enforced in service/database access, not only in UI filters.
- Telnyx balance, customer credits, and internal ledger values are distinct financial concepts.
- Recordings/transcripts require private storage, authorization checks, retention controls, and consent handling.

## Required credentials by milestone

Foundation: local PostgreSQL and Redis URLs for integration work.

Authentication: `AUTH_SECRET`, Google OAuth credentials, GitHub OAuth credentials.

Voice: Telnyx API key, webhook verification/public key configuration, phone numbers, and recording policy.

AI: approved provider set, API keys, model/voice choices, Urdu/Roman Urdu test authorization, and cost limits.

Storage: S3-compatible endpoint, bucket, credentials, encryption, and retention policy.

Tally: exact product/account, API capabilities, webhook signing details, and credentials.

No secrets belong in Git, browser-exposed environment variables, or automated tests.
