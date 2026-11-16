export type UserRole = "SUPER_ADMIN" | "ADMIN" | "USER";
export type WorkspaceRole = "OWNER" | "ADMIN" | "MEMBER";

export interface HealthStatus {
  status: "ok";
  service: string;
  timestamp: string;
}

export interface AuthenticatedPrincipal {
  userId: string;
  workspaceId: string;
  role: UserRole;
  workspaceRole: WorkspaceRole;
}
