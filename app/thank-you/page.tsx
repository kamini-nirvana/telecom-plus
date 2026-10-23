import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  CONTACT,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Thank You | Telecom Plus",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header
        navLinks={NAV_LINKS}
        cta={HEADER_CTA}
        contact={CONTACT}
        current="/thank-you"
      />

      <main id="main">
        <section className="relative isolate flex min-h-[calc(100svh-50px)] flex-col overflow-clip bg-ink text-white">
          <div
            aria-hidden="true"
            className="parallax absolute top-1/3 -right-[520px] -z-10 size-[1200px] rounded-full bg-radial from-cobalt/90 via-cobalt/30 via-40% to-transparent to-70% lg:-right-[360px]"
          />

          <div className="container-page flex flex-1 flex-col justify-center pt-40 pb-20 lg:pb-[98px]">
            <Eyebrow className="text-white/70">Message sent</Eyebrow>
            <h1 className="mt-8 max-w-[640px] text-display">Thank you!</h1>
            <p className="mt-4 max-w-[600px] text-body text-white/80">
              Your message has been sent. Our team will contact you shortly.
            </p>
            <div className="mt-12">
              <ArrowButton href="/">Back to Home</ArrowButton>
            </div>
          </div>
        </section>
      </main>

      <Footer
        content={FOOTER}
        contact={CONTACT}
        columns={FOOTER_COLUMNS}
        socialLinks={SOCIAL_LINKS}
      />
    </>
  );
}
