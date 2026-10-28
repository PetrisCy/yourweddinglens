import styles from "./FAQ.module.css";

const questions = [
  {
    question: "Can we meet before booking?",
    answer:
      "Of course, we’d love to! Before anything is booked, we want to hear about you. Tell us how you met, what you’re planning, and what makes your day yours. It also gives you the chance to ask us anything and get a feel for how we work.",
  },
  {
    question: "How do we know if you’re the right fit for us?",
    answer:
      "Think about how you want to feel when you watch your film years from now. We look for the atmosphere, the relationships, the unexpected moments, the little details, everything that brings you back to how it actually felt. If that sounds more like you, we’ll probably get along very well!",
  },
  {
    question: "Will you direct or pose us?",
    answer:
      "Our favourite moments are the ones that happen without instruction. We want you talking, laughing, moving, and being together, not performing for a camera.",
  },
  {
    question: "Can we pay in instalments?",
    answer:
      "Yes you can! We’re happy to make the payment schedule work around you. A 50% booking payment is required to reserve your date, with the remaining amount able to be divided into instalments before the day of the wedding. We can discuss the timing together when you book, so everything is clear well before the wedding arrives.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className={`design-panel ${styles.section}`}
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className={styles.heading}>
        FAQ
      </h2>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => (
          <div key={question}>
            <div className={styles.desktop}>
              <h3 className={styles.question}>{question}</h3>
              <p className={styles.answer}>{answer}</p>
            </div>
            <details className={styles.mobile}>
              <summary className={styles.toggle}>
                <h3 className={styles.question}>{question}</h3>
                <span className={styles.indicator} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
