export type AppointmentStatus =
  | "analysis"
  | "confirmed"
  | "cancelled";

export type Appointment = {
  id: string;
  service: string;
  date: string;
  time: string;
  tutor: string;
  pet: string;
  phone: string;
  status: AppointmentStatus;
  createdAt: string;
};

const STORAGE_KEY = "petcare-appointments";

export function getStoredAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveStoredAppointments(
  appointments: Appointment[]
) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(appointments)
  );
}