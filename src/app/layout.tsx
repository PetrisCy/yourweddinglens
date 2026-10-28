import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../component/Lenis/SmoothScroll";
import "lenis/dist/lenis.css";

export const metadata: Metadata = {
  title: "Your Wedding Lens | Wedding Content Creator in Cyprus",
  description:
    "Wedding content creation by Maria, based in Cyprus. Candid moments, short-form wedding reels, and memories that bring you back to how your day felt.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
