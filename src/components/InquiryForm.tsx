"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircleIcon, CircleNotchIcon, WarningCircleIcon } from "@phosphor-icons/react";
import { categoryLabels } from "@/lib/data";

type Variant = "general" | "corporate";
type Status = "idle" | "submitting" | "success" | "error";

const eventTypes = [
  "Corporate Offsite",
  "Conference / MICE",
  "Incentive Travel",
  "Recurring Business Travel",
];

export function InquiryForm({
  variant = "general",
  defaultDestination,
}: {
  variant?: Variant;
  defaultDestination?: string;
}) {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variant, ...payload }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try WhatsApp or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-success/30 bg-success/5 p-8 text-center"
      >
        <CheckCircleIcon size={40} weight="fill" className="text-success" />
        <p className="font-display text-lg font-semibold text-foreground">
          Thank you! Your enquiry is in.
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          One of our travel consultants will reach out within 24 hours. For anything urgent,
          message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 cursor-pointer text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Full Name" required>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-field"
            placeholder="Riya Shah"
          />
        </Field>

        {variant === "corporate" ? (
          <Field id={`${formId}-company`} label="Company Name" required>
            <input
              id={`${formId}-company`}
              name="company"
              type="text"
              required
              autoComplete="organization"
              className="input-field"
              placeholder="Your company"
            />
          </Field>
        ) : (
          <Field id={`${formId}-phone`} label="Phone Number" required>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="input-field"
              placeholder="+91 98765 43210"
            />
          </Field>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-email`} label="Email Address" required>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field"
            placeholder="you@email.com"
          />
        </Field>

        {variant === "corporate" ? (
          <Field id={`${formId}-phone`} label="Phone Number" required>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="input-field"
              placeholder="+91 98765 43210"
            />
          </Field>
        ) : (
          <Field id={`${formId}-destination`} label="Destination Interest">
            <select
              id={`${formId}-destination`}
              name="destination"
              defaultValue={defaultDestination ?? ""}
              className="input-field"
            >
              <option value="">Not sure yet</option>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </Field>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {variant === "corporate" ? (
          <>
            <Field id={`${formId}-teamsize`} label="Approximate Team Size">
              <input
                id={`${formId}-teamsize`}
                name="teamSize"
                type="number"
                min={1}
                className="input-field"
                placeholder="25"
              />
            </Field>
            <Field id={`${formId}-eventtype`} label="Travel Type">
              <select id={`${formId}-eventtype`} name="eventType" className="input-field">
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>
          </>
        ) : (
          <Field id={`${formId}-dates`} label="Preferred Travel Dates">
            <input
              id={`${formId}-dates`}
              name="travelDates"
              type="text"
              className="input-field"
              placeholder="e.g. Dec 20 - Dec 25"
            />
          </Field>
        )}
      </div>

      <Field id={`${formId}-message`} label="Tell us about your trip">
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className="input-field resize-none"
          placeholder={
            variant === "corporate"
              ? "Event goals, preferred dates, budget band..."
              : "Number of travellers, budget, must-see places..."
          }
        />
      </Field>

      {status === "error" ? (
        <div role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <WarningCircleIcon size={18} weight="fill" />
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-dark px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:scale-[1.02] hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? (
          <>
            <CircleNotchIcon size={18} className="animate-spin" />
            Sending...
          </>
        ) : variant === "corporate" ? (
          "Request Corporate Proposal"
        ) : (
          "Send Enquiry"
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground/85">
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {children}
    </div>
  );
}
