export interface TeamMember {
  name: string;
}

export interface TeamRegistrationPayload {
  team_name: string;
  school_name?: string;
  city?: string;
  team_leader_name: string;
  team_leader_phone?: string;
  team_leader_email?: string;
  team_members: TeamMember[];
  team_supervisor?: string;
  supervisor_phone?: string;
  supervisor_email?: string;
  additional_info?: string;
}
