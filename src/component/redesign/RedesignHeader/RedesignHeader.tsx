import styles from "./RedesignHeader.module.css";

export default function RedesignHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="Your Wedding Lens, back to top">
          <span className={styles.mark} aria-hidden="true">
            <span className={styles.w}>W</span>
            <span className={styles.l}>L</span>
          </span>
          <span className={styles.wordmark}>
            your wedding lens
            <span className={styles.descriptor}>THE MOMENTS IN BETWEEN</span>
          </span>
        </a>

        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#moments">The moments</a>
          <a href="#packages">Packages</a>
          <a href="#faq">FAQs</a>
        </nav>

        <a className={styles.enquire} href="#enquire" aria-label="Enquire about your wedding date">
          <span className={styles.desktopLabel}>Enquire about your date</span>
          <span className={styles.mobileLabel}>Enquire</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
