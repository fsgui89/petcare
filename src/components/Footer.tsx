import styles from "@/styles/layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <strong>🐾 PetCare</strong>

        <p>
          © 2026 PetCare. Cuidado simples,
          organizado e profissional.
        </p>
      </div>
    </footer>
  );
}