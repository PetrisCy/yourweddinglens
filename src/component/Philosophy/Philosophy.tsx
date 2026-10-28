import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={`design-panel ${styles.section}`} aria-label="Our philosophy">
      <blockquote className={styles.quote}>
        <p>For me, love is never just about the <strong>two of them.</strong></p>
        <p>It lives in the people they hold close, in the laughter they share, and in every familiar face that makes their story complete.</p>
      </blockquote>
    </section>
  );
}
