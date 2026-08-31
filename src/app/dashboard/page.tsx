"use client";

import AppointmentCard from "@/components/AppointmentCard";
import StatsCard from "@/components/StatsCard";

import { useAppointments } from "@/hooks/useAppointments";

import styles from "@/styles/dashboard.module.css";

export default function DashboardPage() {
  const {
    appointments,
    stats,
    hydrated,
  } = useAppointments();

  if (!hydrated) {
    return (
      <main className={styles.page}>
        Carregando agenda...
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.pageHeader}>
        <span>Administração</span>

        <h1>Agenda Geral</h1>

        <p>
          Visualize e gerencie todos os atendimentos.
        </p>
      </div>

      <section className={styles.statsGrid}>
        <StatsCard
          icon="📅"
          label="Total"
          value={stats.total}
        />

        <StatsCard
          icon="⏳"
          label="Em análise"
          value={stats.analysis}
        />

        <StatsCard
          icon="✅"
          label="Confirmados"
          value={stats.confirmed}
        />

        <StatsCard
          icon="❌"
          label="Cancelados"
          value={stats.cancelled}
        />
      </section>

      <h2 className={styles.listTitle}>
        Agendamentos
      </h2>

      {appointments.length > 0 ? (
        <section className={styles.list}>
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
            />
          ))}
        </section>
      ) : (
        <div className={styles.empty}>
          🐾 Nenhum agendamento realizado ainda.
        </div>
      )}
    </main>
  );
}