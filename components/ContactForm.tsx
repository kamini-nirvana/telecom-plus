"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { ContactFormContent, FormField } from "@/lib/data";

type ContactFormProps = {
  form: ContactFormContent;
  submitLabel: string;
};

type LabelProps = {
  htmlFor: string;
  text: string;
  required?: boolean;
};

const INITIAL_STATE: ContactState = { ok: false, message: "" };

const INPUT_CLASSES =
  "mt-3 w-full border-b-2 border-ink/10 bg-transparent py-3 text-body transition-colors duration-300 placeholder:text-ink/50 hover:border-ink/30 focus:border-brand focus:outline-none";

function Label({ htmlFor, text, required = false }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-small">
      {text}
      {required ? <span aria-hidden="true"> *</span> : null}
    </label>
  );
}

function Field({
  field,
  defaultValue,
}: {
  field: FormField;
  defaultValue?: string;
}) {
  return (
    <div>
      <Label htmlFor={field.name} text={field.label} required={field.required} />
      <input
        id={field.name}
        name={field.name}
        type={field.type ?? "text"}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        required={field.required}
        defaultValue={defaultValue}
        className={INPUT_CLASSES}
      />
    </div>
  );
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <ArrowButton type="submit" variant="dark" disabled={pending}>
      {pending ? "Sending…" : label}
    </ArrowButton>
  );
}

export function ContactForm({ form, submitLabel }: ContactFormProps) {
  const [state, action] = useActionState(submitContact, INITIAL_STATE);
  const values = state.values ?? {};

  return (
    <form action={action} className="grid gap-x-20 gap-y-10 sm:grid-cols-2">
      {form.fields.map((field) => (
        <Field
          key={field.name}
          field={field}
          defaultValue={values[field.name]}
        />
      ))}

      <div className="sm:col-span-2">
        <Label htmlFor="topic" text={form.topic.label} required />
        <div className="relative">
          <select
            id="topic"
            name="topic"
            required
            defaultValue={values.topic ?? ""}
            className={`${INPUT_CLASSES} appearance-none pr-8 invalid:text-ink/50`}
          >
            <option value="" disabled>
              {form.topic.placeholder}
            </option>
            {form.topic.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-1 bottom-4 size-3" />
        </div>
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="message" text={form.message.label} required />
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          minLength={10}
          aria-describedby="message-hint"
          placeholder={form.message.placeholder}
          defaultValue={values.message}
          className={`${INPUT_CLASSES} field-sizing-content min-h-24 resize-y`}
        />
        <p id="message-hint" className="mt-5 text-note text-ink/60">
          {form.message.hint}
        </p>
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col items-end gap-4 sm:col-span-2">
        <SubmitButton label={submitLabel} />
        <p
          role="status"
          aria-live="polite"
          className={`text-small ${state.ok ? "text-brand-ink" : "text-red-700"}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
