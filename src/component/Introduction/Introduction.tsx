import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <section id="introduction" className={`design-panel ${styles.section}`} aria-labelledby="introduction-title">
      <h2 id="introduction-title" className={styles.heading}>INTRODUCTION</h2>
      <div className={styles.copy}>
        <p>I’m Maria, a content creator based in Cyprus, with a love for storytelling, beautiful details and the moments that happen naturally when people forget the camera is there.</p>
        <p>My journey into content creation started through my studies but over time, I found myself drawn more and more to visual storytelling. I’ve always loved the way a short video can capture not just what a moment looked like, but how it felt.</p>
        <p>Weddings especially caught my attention because they are full of those little moments that can so easily pass in seconds. A look between two people, a nervous smile, a parent trying to hold back their tears, friends laughing together, the energy of the dance floor, or a quiet moment that nobody else notices. That is what I want to capture.</p>
        <p>I’m not interested in creating something that feels overly staged or perfect. I want to document the real atmosphere of your day and turn those fleeting moments into something you can come back to again and again.</p>
        <p>For me, every couple has a different story. My goal is to make sure yours feels like yours.</p>
      </div>
    </section>
  );
}
