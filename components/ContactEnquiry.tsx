import { ContactForm } from "@/components/ContactForm";
import { Intro } from "@/components/ui/Intro";
import type { ContactPanelContent } from "@/data/contact";
import type {
  ContactDetails,
  ContactFormContent,
  SectionIntro,
} from "@/lib/data";

type ContactEnquiryProps = {
  intro: SectionIntro & { submitLabel: string };
  panel: ContactPanelContent;
  contact: ContactDetails;
  form: ContactFormContent;
};

export function ContactEnquiry({
  intro,
  panel,
  contact,
  form,
}: ContactEnquiryProps) {
  return (
    <section
      id="enquiry"
      className="container-page grid gap-12 py-20 lg:grid-cols-[520px_1fr] lg:gap-10"
    >
      <dl className="reveal flex min-h-[420px] flex-col justify-end gap-7 rounded-[4px] bg-linear-to-br from-mist via-sky/70 to-surface p-6 sm:p-10">
        <div>
          <dt className="text-small text-ink/60">{panel.phoneLabel}</dt>
          <dd className="mt-2 text-lead">
            <a href={contact.phoneHref} className="link-wipe text-brand-ink">
              {contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-small text-ink/60">{panel.emailLabel}</dt>
          <dd className="mt-2 text-lead">
            <a href={contact.emailHref} className="link-wipe break-all">
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-small text-ink/60">{panel.addressLabel}</dt>
          <dd className="mt-2 text-lead">
            <address className="not-italic">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </dd>
        </div>
        <div>
          <dt className="text-small text-ink/60">{panel.hoursLabel}</dt>
          <dd className="mt-2 text-lead">{panel.hours}</dd>
          <dd className="mt-2 text-small text-ink/60">{panel.hoursNote}</dd>
        </div>
      </dl>

      <div>
        <Intro intro={intro} className="reveal" />
        <div className="mt-12">
          <ContactForm form={form} submitLabel={intro.submitLabel} />
        </div>
      </div>
    </section>
  );
}
