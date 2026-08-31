import styles from "@/styles/dashboard.module.css";

type StatsCardProps = {
  label: string;
  value: number;
  icon: string;
};

export default function StatsCard({
  label,
  value,
  icon,
}: StatsCardProps) {
  return (
    <article className={styles.statCard}>
      <span>{icon}</span>

      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </article>
  );
}