import styles from "./RedesignBookingNotes.module.css";

export default function RedesignBookingNotes() {
  return (
    <section className={styles.section} aria-labelledby="redesign-notes-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>BEFORE WE BEGIN</p>
        <h2 id="redesign-notes-title" className={styles.heading}>A few things to know.</h2>
        <ol className={styles.notes}>
          <li>
            <span className={styles.number} aria-hidden="true">01</span>
            <h3 className={styles.label}>Wedding content</h3>
            <p>We are wedding content creators, specialising in short-form wedding reels! Photography is not our primary service, however, we also capture a selection of natural, candid photographs throughout your day for you to keep and share.</p>
          </li>
          <li>
            <span className={styles.number} aria-hidden="true">02</span>
            <h3 className={styles.label}>Alamata requirement</h3>
            <p>If the bride’s and groom’s Alamata locations are 1 hour apart, there must be at least a 1.5-hour gap between the start times for us to be able to arrive on time.</p>
          </li>
          <li>
            <span className={styles.number} aria-hidden="true">03</span>
            <h3 className={styles.label}>Securing your date</h3>
            <p>Your date is secured once the booking is confirmed and the required deposit has been received.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
