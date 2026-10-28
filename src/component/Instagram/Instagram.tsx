import Image from "next/image";
import { celebrationImage } from "@/lib/images";
import styles from "./Instagram.module.css";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className={`design-panel ${styles.section}`}
      aria-label="Follow Your Wedding Lens on Instagram"
    >
      <a
        className={styles.link}
        href="https://www.instagram.com/yourweddinglens/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className={styles.photograph}>
          <Image
            src={celebrationImage}
            alt="A newly married couple celebrating with a bouquet of flowers"
            fill
            sizes="(max-width: 700px) 80vw, 40.12vw"
            className={styles.image}
          />
        </figure>
        <span className={styles.handle}>@yourweddinglens</span>
      </a>
    </section>
  );
}
