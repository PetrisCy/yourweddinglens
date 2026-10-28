import styles from "./RedesignFooter.module.css";

export default function RedesignFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#top">Your Wedding Lens</a>
        <p className={styles.location}>WEDDING CONTENT CREATION · CYPRUS</p>
        <a className={styles.social} href="https://www.instagram.com/yourweddinglens/" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
