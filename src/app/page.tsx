import Hero from "@/component/Hero/Hero";
import Introduction from "@/component/Introduction/Introduction";
import WeddingMoment from "@/component/WeddingMoment/WeddingMoment";
import Philosophy from "@/component/Philosophy/Philosophy";
import RedesignPackages from "@/component/redesign/RedesignPackages/RedesignPackages";
import BookingNotes from "@/component/BookingNotes/BookingNotes";
import Instagram from "@/component/Instagram/Instagram";
import FAQ from "@/component/FAQ/FAQ";
import Contact from "@/component/Contact/Contact";
import redesignStyles from "./redesign/page.module.css";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#introduction">Skip to introduction</a>
      <main>
        <Hero />
        <Introduction />
        <WeddingMoment />
        <Philosophy />
        <div className={redesignStyles.shell}>
          <RedesignPackages enquiryHref="#instagram" dark />
        </div>
        <BookingNotes />
        <Instagram />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
