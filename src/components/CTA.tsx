import Link from "next/link";

import styles from "@/styles/layout.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div>
        <span>🐶 Organização para quem ama pets</span>

        <h2>
          Todos os agendamentos em um único lugar.
        </h2>

        <p>
          Consulte, confirme e organize os atendimentos
          rapidamente pela Agenda Geral.
        </p>
      </div>

      <Link
        href="/dashboard"
        className={styles.ctaButton}
      >
        Acessar agenda
      </Link>
    </section>
  );
}