import Image from "next/image";
import { celebrationImage } from "@/lib/images";
import styles from "./RedesignContact.module.css";

export default function RedesignContact() {
  return (
    <section id="enquire" className={styles.section} aria-labelledby="enquire-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>LET’S MAKE SOMETHING TO REMEMBER</p>
          <h2 id="enquire-heading" className={styles.heading}>Tell me<br />about <em>your day.</em></h2>
          <p className={styles.copy}>Your date, your plans, the people you’ll have around you. I’d love to hear your story and find the coverage that feels right for you.</p>
          <a
            className={styles.button}
            href="https://www.instagram.com/yourweddinglens/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on Instagram <span aria-hidden="true">↗</span>
          </a>
          <p className={styles.handle}>@yourweddinglens</p>
        </div>
        <figure className={styles.photograph}>
          <Image
            src={celebrationImage}
            alt="A joyful bride and groom celebrating together, the bride holding a bouquet."
            fill
            sizes="(max-width: 760px) 90vw, 40vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>A DAY THAT FEELS LIKE YOU.</figcaption>
        </figure>
      </div>
    </section>
  );
}
