# Initial ERD

```mermaid
erDiagram
  USER ||--o{ WORKSPACE_MEMBER : belongs_to
  WORKSPACE ||--o{ WORKSPACE_MEMBER : has
  USER ||--o{ ACCOUNT : authenticates
  USER ||--o{ SESSION : has
  WORKSPACE ||--o{ AUDIT_LOG : records
  WORKSPACE ||--o{ WEBHOOK_EVENT : receives
  WORKSPACE ||--o{ CREDIT_ACCOUNT : owns
  WORKSPACE ||--o{ WHATSAPP_ACCOUNT : owns
```

The foundation schema is not the complete product schema. Calls, messages, AI usage, ledger entries, and recordings will be added with their owning workspace and provider-event relationships in later milestones.
