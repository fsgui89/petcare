import Link from "next/link";

import styles from "@/styles/layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandIcon}>🐾</span>

          <div>
            <strong>PetCare</strong>
            <small>Agendamento simples para pets</small>
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Início
          </Link>

          <Link
            href="/dashboard"
            className={styles.navLink}
          >
            Agenda Geral
          </Link>

          <Link href="/#agendar" className={styles.navButton}>
            Agendar agora
          </Link>
        </nav>
      </div>
    </header>
  );
}