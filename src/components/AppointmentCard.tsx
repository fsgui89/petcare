"use client";

import type { Appointment } from "@/lib/storage";

import { useAppointments } from "@/hooks/useAppointments";

import styles from "@/styles/dashboard.module.css";

export default function AppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  const {
    updateStatus,
    removeAppointment,
  } = useAppointments();

  const statusInfo = {
    analysis: {
      text: "Em análise",
      className: styles.statusAnalysis,
    },

    confirmed: {
      text: "Confirmado",
      className: styles.statusConfirmed,
    },

    cancelled: {
      text: "Cancelado",
      className: styles.statusCancelled,
    },
  };

  const status =
    statusInfo[appointment.status];

  const formattedDate = new Date(
    `${appointment.date}T12:00:00`
  ).toLocaleDateString("pt-BR");

  return (
    <article className={styles.appointmentCard}>
      <div className={styles.cardTop}>
        <div>
          <span className={styles.service}>
            {appointment.service}
          </span>

          <h3>🐾 {appointment.pet}</h3>
        </div>

        <span
          className={`${styles.status} ${status.className}`}
        >
          {status.text}
        </span>
      </div>

      <div className={styles.detailsGrid}>
        <div>
          <small>Data</small>
          <strong>{formattedDate}</strong>
        </div>

        <div>
          <small>Horário</small>
          <strong>{appointment.time}</strong>
        </div>

        <div>
          <small>Tutor</small>
          <strong>{appointment.tutor}</strong>
        </div>

        <div>
          <small>Telefone</small>
          <strong>{appointment.phone}</strong>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.confirmButton}
          onClick={() =>
            updateStatus(
              appointment.id,
              "confirmed"
            )
          }
        >
          Confirmar
        </button>

        <button
          className={styles.cancelButton}
          onClick={() =>
            updateStatus(
              appointment.id,
              "cancelled"
            )
          }
        >
          Cancelar
        </button>

        <button
          className={styles.removeButton}
          onClick={() =>
            removeAppointment(appointment.id)
          }
        >
          Remover
        </button>
      </div>
    </article>
  );
}