import Image from "next/image";
import styles from "./WeddingMoment.module.css";

export default function WeddingMoment() {
  return (
    <section className={styles.section} aria-label="A wedding day, shared with the people you love">
      <Image
        src="/images/family-moment.webp"
        alt="A father embracing and kissing the bride, surrounded by family on her wedding day."
        fill
        sizes="100vw"
        className={styles.photo}
      />
    </section>
  );
}
