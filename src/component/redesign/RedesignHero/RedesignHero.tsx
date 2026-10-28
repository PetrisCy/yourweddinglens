import Image from "next/image";
import { heroImage } from "@/lib/images";
import styles from "./RedesignHero.module.css";

export default function RedesignHero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="redesign-hero-heading">
      <Image
        className={styles.photograph}
        src={heroImage}
        alt="A bride and groom holding hands as they walk down an elegant staircase."
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Wedding content creation · Cyprus</p>
          <h1 id="redesign-hero-heading" className={styles.heading}>
            Your day.
            <span>As it felt.</span>
          </h1>
          <p className={styles.description}>
            Candid wedding content, full of the people, the feeling, and everything in between.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#enquire">
              Enquire about your date
              <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondary} href="#packages">
              Explore the packages
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <p className={styles.caption}>
          The people. The feeling.
          <br />
          The moments in between.
        </p>
      </div>
    </section>
  );
}
