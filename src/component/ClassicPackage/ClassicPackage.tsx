import PackageSection from "@/component/PackageSection/PackageSection";

export default function ClassicPackage() {
  return (
    <PackageSection
      number={2}
      name="Classic"
      occasion="Church & Venue"
      features={[
        "Up to 8 hours of coverage",
        "3–4 edited reels",
        "Edited photos",
        "All raw content (photos & videos)",
      ]}
    />
  );
}
