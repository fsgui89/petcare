"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getStoredAppointments,
  saveStoredAppointments,
  type Appointment,
  type AppointmentStatus,
} from "@/lib/storage";

type NewAppointment = Omit<
  Appointment,
  "id" | "status" | "createdAt"
>;

type AppointmentContextType = {
  appointments: Appointment[];
  lastAppointment: Appointment | null;
  hydrated: boolean;

  createAppointment: (
    data: NewAppointment
  ) => Appointment;

  updateStatus: (
    id: string,
    status: AppointmentStatus
  ) => void;

  removeAppointment: (id: string) => void;

  stats: {
    total: number;
    analysis: number;
    confirmed: number;
    cancelled: number;
  };
};

const AppointmentContext =
  createContext<AppointmentContextType | undefined>(
    undefined
  );

export function AppointmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [appointments, setAppointments] = useState<
    Appointment[]
  >([]);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setAppointments(getStoredAppointments());
      setHydrated(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveStoredAppointments(appointments);
    }
  }, [appointments, hydrated]);

  function createAppointment(
    data: NewAppointment
  ): Appointment {
    const appointment: Appointment = {
      ...data,
      id: crypto.randomUUID(),
      status: "analysis",
      createdAt: new Date().toISOString(),
    };

    setAppointments((current) => [
      appointment,
      ...current,
    ]);

    return appointment;
  }

  function updateStatus(
    id: string,
    status: AppointmentStatus
  ) {
    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  }

  function removeAppointment(id: string) {
    setAppointments((current) =>
      current.filter(
        (appointment) => appointment.id !== id
      )
    );
  }

  const stats = useMemo(
    () => ({
      total: appointments.length,

      analysis: appointments.filter(
        (appointment) =>
          appointment.status === "analysis"
      ).length,

      confirmed: appointments.filter(
        (appointment) =>
          appointment.status === "confirmed"
      ).length,

      cancelled: appointments.filter(
        (appointment) =>
          appointment.status === "cancelled"
      ).length,
    }),
    [appointments]
  );

  const lastAppointment =
    appointments.length > 0 ? appointments[0] : null;

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        lastAppointment,
        hydrated,
        createAppointment,
        updateStatus,
        removeAppointment,
        stats,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointments deve ser utilizado dentro de AppointmentProvider"
    );
  }

  return context;
}
