import type { Metadata } from "next";
import RedesignHeader from "@/component/redesign/RedesignHeader/RedesignHeader";
import RedesignHero from "@/component/redesign/RedesignHero/RedesignHero";
import RedesignAbout from "@/component/redesign/RedesignAbout/RedesignAbout";
import RedesignMoments from "@/component/redesign/RedesignMoments/RedesignMoments";
import RedesignPhilosophy from "@/component/redesign/RedesignPhilosophy/RedesignPhilosophy";
import RedesignPackages from "@/component/redesign/RedesignPackages/RedesignPackages";
import RedesignBookingNotes from "@/component/redesign/RedesignBookingNotes/RedesignBookingNotes";
import RedesignFAQ from "@/component/redesign/RedesignFAQ/RedesignFAQ";
import RedesignContact from "@/component/redesign/RedesignContact/RedesignContact";
import RedesignFooter from "@/component/redesign/RedesignFooter/RedesignFooter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Your Wedding Lens | Wedding Content Creation in Cyprus",
  description:
    "Your day, as it felt. Candid wedding content, short-form reels, and the moments in between, captured by Maria in Cyprus. Explore the packages and enquire about your date.",
  robots: { index: false, follow: false },
};

export default function RedesignPage() {
  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#about">Skip to content</a>
      <RedesignHeader />
      <main>
        <RedesignHero />
        <RedesignAbout />
        <RedesignMoments />
        <RedesignPhilosophy />
        <RedesignPackages />
        <RedesignBookingNotes />
        <RedesignFAQ />
        <RedesignContact />
      </main>
      <RedesignFooter />
    </div>
  );
}
