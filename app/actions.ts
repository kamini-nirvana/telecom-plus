"use server";

export type ContactState = {
  ok: boolean;
  message: string;
  values?: Partial<Record<string, string>>;
};

const FIELDS = [
  "firstName",
  "lastName",
  "businessName",
  "location",
  "email",
  "phone",
  "message",
] as const;

type ContactFields = Record<(typeof FIELDS)[number], string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SENT: ContactState = { ok: true, message: "Thanks — we’ll be in touch." };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (String(formData.get("website") ?? "") !== "") {
    return SENT;
  }

  const fields = Object.fromEntries(
    FIELDS.map((name) => [
      name,
      String(formData.get(name) ?? "")
        .trim()
        .slice(0, 4000),
    ]),
  ) as ContactFields;

  if (
    !fields.firstName ||
    !fields.lastName ||
    !EMAIL_PATTERN.test(fields.email) ||
    fields.message.length < 10
  ) {
    return {
      ok: false,
      message:
        "Please add your first and last name, a valid email and a message of at least 10 characters.",
      values: fields,
    };
  }

  const undelivered: ContactState = {
    ok: false,
    message:
      "We couldn’t send your message just now. Please call 604-696-3828 or email sales@telecomplus.ca.",
    values: fields,
  };

  const wpUrl = process.env.WP_URL?.replace(/\/$/, "");
  const formId = process.env.CF7_FORM_ID;

  if (!wpUrl || !formId) {
    if (process.env.NODE_ENV !== "production") {
      console.info("WP_URL or CF7_FORM_ID is not set, nothing was sent:", fields);
      return SENT;
    }
    console.error(
      "Contact form submitted but WP_URL or CF7_FORM_ID is not set; the enquiry was not delivered.",
    );
    return undelivered;
  }

  const body = new FormData();
  for (const name of FIELDS) {
    body.append(name, fields[name]);
  }
  body.append("website", "");
  body.append("_wpcf7_unit_tag", `wpcf7-f${formId}-o1`);

  try {
    const response = await fetch(
      `${wpUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
      { method: "POST", body, cache: "no-store" },
    );
    const data = await response.json();

    if (data.status !== "mail_sent") {
      console.error("Contact form rejected by WordPress:", data);
      return undelivered;
    }
  } catch (error) {
    console.error("Contact form delivery failed:", { error });
    return undelivered;
  }

  return SENT;
}