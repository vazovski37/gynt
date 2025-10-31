export interface SchoolRegistrationPayload {
  school_name: string;
  school_address?: string;
  city: string;
  school_type?: string; // 'public', 'private', etc.
  contact_person: string;
  contact_phone?: string;
  contact_email: string;
  additional_info?: string;
}

export interface School {
  id: string;
  school_name: string;
  school_address?: string;
  city: string;
  school_type?: string;
  contact_person: string;
  contact_phone?: string;
  contact_email: string;
  additional_info?: string;
  created_at: string;
  language?: string;
}

