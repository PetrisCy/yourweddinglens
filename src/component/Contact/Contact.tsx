"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

const CONTACT_ENDPOINT = "https://api.web3forms.com/submit";
const CONTACT_ACCESS_KEY = "1c09a150-f0ba-42cd-acfc-aafffa255bbf";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "timeout">("idle");
  const isSending = status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    setStatus("sending");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          name: String(fields.get("name") ?? "").trim(),
          email: String(fields.get("email") ?? "").trim(),
          phone: String(fields.get("phone") ?? "").trim(),
          message: String(fields.get("message") ?? "").trim(),
          botcheck: fields.has("botcheck"),
          subject: "New wedding enquiry | Your Wedding Lens",
          from_name: "Your Wedding Lens",
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error("Contact submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus(controller.signal.aborted ? "timeout" : "error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="contact-heading" className={styles.heading}>Contact us</h2>
          <p className={styles.copy}>We’d love to hear what you’re planning.</p>
          <nav className={styles.socialLinks} aria-label="Social links">
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/yourweddinglens/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a
              className={styles.socialLink}
              href="https://wa.me/35796395901"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a9 9 0 0 1-13.4 7.85L3 21l1.65-4.6A9 9 0 1 1 21 11.5Z" />
                <path d="m8.1 7.2 1.5-.2 1.2 2.6-1.1 1.1a8.1 8.1 0 0 0 3.6 3.6l1.1-1.1 2.6 1.2-.2 1.5c-.1.9-1 1.5-1.9 1.3a11.4 11.4 0 0 1-8-8c-.2-.9.4-1.8 1.2-2Z" />
              </svg>
              <span>WhatsApp <small className={styles.messagesOnly}>(SMS only)</small></span>
            </a>
          </nav>
        </div>

        <form
          className={styles.form}
          action={CONTACT_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          aria-describedby="contact-status"
          aria-busy={isSending}
        >
          <input type="hidden" name="access_key" value={CONTACT_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New wedding enquiry | Your Wedding Lens" />
          <input type="hidden" name="from_name" value="Your Wedding Lens" />
          <input className={styles.honeypot} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className={styles.field}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={150} disabled={isSending} required />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} disabled={isSending} required />
          </div>
          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="contact-phone">Phone number</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} disabled={isSending} required />
          </div>
          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={5} maxLength={5000} disabled={isSending} required />
          </div>
          <div className={`${styles.actions} ${styles.fullWidth}`}>
            <button className={styles.button} type="submit" disabled={isSending}>
              {isSending ? "Sending…" : "Send message"}
            </button>
            <p id="contact-status" className={styles.note} role="status" aria-live="polite" aria-atomic="true">
              {status === "sending" && "Sending your enquiry…"}
              {status === "success" && "Thank you for getting in touch. Your enquiry has been submitted."}
              {status === "timeout" && (
                <>The sending service is taking too long to respond. We couldn’t confirm your submission. Your message is still here.</>
              )}
              {status === "error" && (
                <>We couldn’t confirm your submission. Your message is still here.</>
              )}
            </p>
            {(status === "error" || status === "timeout") && (
              <div className={styles.fallback}>
                <a href="mailto:maria.frangeskou@live.com">Email us instead</a>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
