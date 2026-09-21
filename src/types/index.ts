export type TicketType = "General" | "VIP" | "Staff"

export type CheckInStatus = "pending" | "checked-in"

export interface Attendee {
  id: string
  registrationCode: string
  fullName: string
  email: string
  ticketType: TicketType
  tableNumber?: string
  seatNumber?: string
  registrationDate: string
  status: CheckInStatus
  checkedInAt: string | null
  notes?: string
}
