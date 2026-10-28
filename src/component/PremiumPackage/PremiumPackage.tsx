import PackageSection from "@/component/PackageSection/PackageSection";

export default function PremiumPackage() {
  return (
    <PackageSection
      number={3}
      name="Premium"
      occasion="Full Day"
  
      dark
      features={[
        "12+ hours of coverage",
        "Getting ready / Alamata / Church / Venue arrival & Party",
        "Couple moments & guest content",
        "4–5 edited reels",
        "Edited photos",
        "All raw content (photos & videos)",
      ]}
    />
  );
}
