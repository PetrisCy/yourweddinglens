import Image from "next/image";
import styles from "./RedesignPhilosophy.module.css";

export default function RedesignPhilosophy() {
  return (
    <section className={styles.section} aria-label="The people who make your story">
      <figure className={styles.photograph}>
        <Image
          src="/images/family-moment.webp"
          alt="A father kissing his daughter on her wedding day, surrounded by the people she loves."
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          className={styles.image}
        />
      </figure>
      <div className={styles.content}>
        <p className={styles.eyebrow}>MORE THAN A MOMENT</p>
        <blockquote className={styles.quote}>
          <p>For me, love is never just about the <em>two of them.</em></p>
        </blockquote>
        <p className={styles.copy}>It lives in the people they hold close, in the laughter they share, and in every familiar face that makes their story complete.</p>
        <span className={styles.byline}>A LITTLE OF WHAT I LOOK FOR — MARIA</span>
      </div>
    </section>
  );
}
