import styles from "./RedesignPackages.module.css";

const packages = [
  {
    name: "Essential",
    occasion: "Alamata & Church",
    coverage: "Up to 7 hours of coverage",
    features: [
      "Including bride moments before alamata",
      "3–4 edited reels",
      "Edited photos",
      "All raw content (photos & videos)",
    ],
  },
  {
    name: "Classic",
    occasion: "Church & Venue",
    coverage: "Up to 8 hours of coverage",
    features: [
      "3–4 edited reels",
      "Edited photos",
      "All raw content (photos & videos)",
    ],
  },
  {
    name: "Premium",
    occasion: "Full Day",
    coverage: "12+ hours of coverage",
    features: [
      "Getting ready / Alamata / Church / Venue arrival & Party",
      "Couple moments & guest content",
      "4–5 edited reels",
      "Edited photos",
      "All raw content (photos & videos)",
    ],
  },
];

type RedesignPackagesProps = {
  enquiryHref?: string;
  dark?: boolean;
};

export default function RedesignPackages({ enquiryHref = "#enquire", dark = false }: RedesignPackagesProps) {
  return (
    <section id="packages" className={`${styles.section} ${dark ? styles.dark : ""}`} aria-labelledby="redesign-packages-title">
      <div className={styles.inner}>
      
        <div className={styles.intro}>
          <h2 id="redesign-packages-title" className={styles.heading}>
           Packages
          </h2>
        </div>

        <div className={styles.packages}>
          {packages.map((item, index) => (
            <article className={styles.package} key={item.name} aria-labelledby={`redesign-${item.name.toLowerCase()}`}>
              <p className={styles.occasion}>
                <span className={styles.number}>0{index + 1}</span>
                {item.occasion}
              </p>
              <h3 id={`redesign-${item.name.toLowerCase()}`} className={styles.name}>{item.name}</h3>
              <p className={styles.coverage}>{item.coverage}</p>
              <ul className={styles.features}>
                {item.features.map(feature => <li key={feature}>{feature}</li>)}
              </ul>
              <a className={styles.enquire} href={enquiryHref}>
                Enquire about this package <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
