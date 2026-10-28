import styles from "./RedesignAbout.module.css";

export default function RedesignAbout() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>THE EYE BEHIND THE LENS</p>
          <h2 id="about-heading" className={styles.heading}>An eye for<br />the little things.</h2>
        </div>
        <div className={styles.copy}>
          <p className={styles.lead}>I’m Maria, a content creator based in Cyprus, with a love for the moments that happen naturally when people forget the camera is there.</p>
          <p>A nervous smile. A parent holding back tears. Your friends on the dance floor. I capture the atmosphere of your wedding day through short-form videos and candid content, so you can come back to how it felt.</p>
          <p>Every couple has a different story. My goal is to make sure yours feels like yours.</p>
          <div className={styles.signature}>
            <span className={styles.name}>Maria</span>
            <span className={styles.role}>YOUR WEDDING LENS · CYPRUS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
