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
  "topic",
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
    !fields.location ||
    !EMAIL_PATTERN.test(fields.email) ||
    !fields.topic ||
    fields.message.length < 10
  ) {
    return {
      ok: false,
      message:
        "Please add your first name, location, a valid email, what we can help with and a message of at least 10 characters.",
      values: fields,
    };
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const undelivered: ContactState = {
    ok: false,
    message:
      "We couldn’t send your message just now. Please call 604-696-3828 or email sales@telecomplus.ca.",
    values: fields,
  };

  if (!webhookUrl) {
    if (process.env.NODE_ENV !== "production") {
      console.info("CONTACT_WEBHOOK_URL is not set, nothing was sent:", fields);
      return SENT;
    }
    console.error(
      "Contact form submitted but CONTACT_WEBHOOK_URL is not set; the enquiry was not delivered.",
    );
    return undelivered;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  } catch (error) {
    console.error("Contact form delivery failed:", { error });
    return undelivered;
  }

  return SENT;
}
