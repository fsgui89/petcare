import AppointmentForm from "@/components/AppointmentForm";
import CTA from "@/components/CTA";

import styles from "@/styles/layout.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <span className={styles.eyebrow}>
              Sem filas • rápido • organizado
            </span>

            <h1 className={styles.heroTitle}>
              Cuide do seu pet com agendamento
              simples e profissional.
            </h1>

            <p className={styles.heroText}>
              Agende banho, tosa, consulta e outros
              serviços para seu pet em poucos cliques.
              Sem complicação e com tudo organizado.
            </p>

            <div className={styles.benefits}>
              <div className={styles.benefit}>
                Agendamento instantâneo
              </div>

              <div className={styles.benefit}>
                Organização automática
              </div>

              <div className={styles.benefit}>
                Histórico completo
              </div>

              <div className={styles.benefit}>
                Agenda administrativa
              </div>
            </div>
          </div>

          <AppointmentForm />
        </div>
      </section>

      <CTA />
    </main>
  );
}