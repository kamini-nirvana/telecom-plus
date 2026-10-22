import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import type { ContactDetails, ContactFormContent } from "@/lib/data";

type ContactProps = {
  intro: { prompt: string; heading: string; body: string; submitLabel: string };
  contact: ContactDetails;
  form: ContactFormContent;
};

export function Contact({ intro, contact, form }: ContactProps) {
  return (
    <section id="contact" className="grid lg:grid-cols-[minmax(0,500px)_1fr]">
      <div className="relative isolate flex min-h-[320px] flex-col justify-end overflow-clip p-5 text-white md:p-10 lg:min-h-[720px]">
        <Image
          src="/images/contact-bg.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 500px"
          className="-z-10 object-cover motion-safe:animate-drift"
        />
        <p className="text-lead">{intro.prompt}</p>
        <span
          aria-hidden="true"
          className="mt-4 block h-0.5 w-[60px] bg-white/30"
        />
        <p className="mt-5 text-title">
          <a
            href={contact.phoneHref}
            className="link-wipe block w-fit max-w-full"
          >
            {contact.phone}.
          </a>
          <a
            href={contact.emailHref}
            className="link-wipe block w-fit max-w-full break-all"
          >
            {contact.email}
          </a>
        </p>
      </div>

      <div className="relative isolate overflow-clip px-5 py-16 md:px-[60px] lg:pt-[100px] lg:pb-10">
        <div
          aria-hidden="true"
          className="parallax absolute -right-40 -bottom-60 -z-10 size-[720px] rounded-full bg-radial from-sky via-mist/60 to-transparent to-70%"
        />
        <div className="reveal">
          <h2 className="text-title">{intro.heading}</h2>
          <p className="mt-1 text-body text-ink/60">{intro.body}</p>
        </div>
        <div className="mt-16 max-w-[840px]">
          <ContactForm form={form} submitLabel={intro.submitLabel} />
        </div>
      </div>
    </section>
  );
}
