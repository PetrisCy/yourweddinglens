import styles from "./BookingNotes.module.css";

export default function BookingNotes() {
  return (
    <section
      className={`design-panel ${styles.section}`}
      aria-labelledby="booking-notes-heading"
    >
      <div className={styles.content}>
        <h2 id="booking-notes-heading" className={styles.heading}>
          Please note:
        </h2>
        <ol className={styles.notes}>
          <li>
            <strong>Wedding content:</strong> We are wedding content creators,
            specialising in short-form wedding reels! Photography is not our
            primary service, however, we also capture a selection of natural,
            candid photographs throughout your day for you to keep and share.
          </li>
          <li>
            <strong>Alamata Requirement:</strong> If the bride’s and groom’s
            Alamata locations are 1 hour apart, there must be at least a 1.5-hour
            gap between the start times for us to be able to arrive on time.
          </li>
          <li>
            <strong>Booking:</strong> Your date is secured once the booking is
            confirmed and the required deposit has been received.
          </li>
        </ol>
      </div>
    </section>
  );
}
