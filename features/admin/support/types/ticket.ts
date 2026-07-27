export type TicketStatus = "open" | "in-progress" | "resolved" | "closed";

export type TicketPriority = "low" | "medium" | "high";

export interface Ticket {
  id: string;

  schoolId: string;
  schoolName: string;

  subject: string;

  message: string;

  priority: TicketPriority;

  status: TicketStatus;

  createdAt: string;

  updatedAt: string;
}
