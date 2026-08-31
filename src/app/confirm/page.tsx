"use client";

import Link from "next/link";

import { useAppointments } from "@/hooks/useAppointments";

import styles from "@/styles/layout.module.css";

export default function ConfirmPage() {
  const {
    lastAppointment,
    hydrated,
  } = useAppointments();

  if (!hydrated) {
    return (
      <main className={styles.confirmPage}>
        Carregando...
      </main>
    );
  }

  if (!lastAppointment) {
    return (
      <main className={styles.confirmPage}>
        <div className={styles.confirmCard}>
          <h1>Nenhum agendamento encontrado.</h1>

          <div className={styles.confirmActions}>
            <Link
              href="/"
              className={styles.primaryButton}
            >
              Fazer agendamento
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(
    `${lastAppointment.date}T12:00:00`
  ).toLocaleDateString("pt-BR");

  return (
    <main className={styles.confirmPage}>
      <div className={styles.confirmCard}>
        <div className={styles.successIcon}>
          ✓
        </div>

        <h1>Agendamento realizado!</h1>

        <p className={styles.confirmText}>
          Recebemos sua solicitação. O atendimento
          está aguardando confirmação.
        </p>

        <div className={styles.detailGrid}>
          <div className={styles.detailItem}>
            <small>Pet</small>
            <strong>{lastAppointment.pet}</strong>
          </div>

          <div className={styles.detailItem}>
            <small>Serviço</small>
            <strong>
              {lastAppointment.service}
            </strong>
          </div>

          <div className={styles.detailItem}>
            <small>Data</small>
            <strong>{formattedDate}</strong>
          </div>

          <div className={styles.detailItem}>
            <small>Horário</small>
            <strong>{lastAppointment.time}</strong>
          </div>

          <div className={styles.detailItem}>
            <small>Tutor</small>
            <strong>{lastAppointment.tutor}</strong>
          </div>

          <div className={styles.detailItem}>
            <small>Status</small>
            <strong>Em análise</strong>
          </div>
        </div>

        <div className={styles.confirmActions}>
          <Link
            href="/"
            className={styles.secondaryButton}
          >
            Voltar ao início
          </Link>

          <Link
            href="/dashboard"
            className={styles.primaryButton}
          >
            Acessar agenda geral
          </Link>
        </div>
      </div>
    </main>
  );
}