import styles from "./RedesignFAQ.module.css";

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

export default function RedesignFAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="redesign-faq-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>GOOD TO KNOW</p>
          <h2 id="redesign-faq-title" className={styles.heading}>A few questions,<br /><em>answered.</em></h2>
          <p className={styles.invitation}>Something else on your mind? <a href="#enquire">Let’s talk.</a></p>
        </div>
        <div className={styles.questions}>
          {questions.map(({ question, answer }, index) => (
            <details className={styles.item} open={index === 0} key={question}>
              <summary className={styles.question}>{question}</summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
