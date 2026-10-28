import Image from "next/image";
import { heroImage } from "@/lib/images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} aria-labelledby="site-title">
      <h1 id="site-title" className="sr-only">Your Wedding Lens</h1>
      <Image
        src={heroImage}
        alt="A bride and groom kissing in a vintage convertible."
        fill
        priority
        sizes="100vw"
        className={styles.photo}
      />
      <div className={styles.monogram} aria-hidden="true">
        <span className={styles.w}>W</span>
        <span className={styles.l}>L</span>
      </div>
    </section>
  );
}
