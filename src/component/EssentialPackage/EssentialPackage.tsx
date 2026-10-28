import PackageSection from "@/component/PackageSection/PackageSection";

export default function EssentialPackage() {
  return (
    <PackageSection
      number={1}
      name="Essential"
      occasion="Alamata & Church"
      dark
      features={[
        <>Up to 7 hours of coverage <em>(including bride moments before alamata)</em></>,
        "3–4 edited reels",
        "Edited photos",
        "All raw content (photos & videos)",
      ]}
    />
  );
}
