import styles from "./PackageSection.module.css";

type PackageSectionProps = {
  number: 1 | 2 | 3;
  name: string;
  occasion: string;
  
  features: React.ReactNode[];
  dark?: boolean;
};

export default function PackageSection({ number, name, occasion, features, dark = false }: PackageSectionProps) {
  const titleId = `package-${number}-title`;

  return (
    <section id={`package-${number}`} className={`design-panel ${styles.section} ${dark ? styles.dark : ""}`} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.heading}>PACKAGE ({number})</h2>
      <h3 className={styles.name}>The {name} ({occasion}) </h3>
      <ul className={styles.features}>
        {features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
      <div className={styles.delivery}>
        <p>First batch delivered within 24–48 hours.</p>
        <p>Additional edited content delivered during the following week.</p>
      </div>
    </section>
  );
}
