"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { services } from "@/lib/services";
import { BUDGETS } from "@/viral/viral";

/* One labelled field. The blue line under the control draws in on focus,
   and selects get a chevron (see enquire.css). */
function Field({
  id,
  label,
  full = false,
  select = false,
  children,
}: {
  id: string;
  label: string;
  full?: boolean;
  select?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={full ? "vd-field vd-field--full" : "vd-field"}>
      <label htmlFor={id} className="vd-field__label">
        {label}
      </label>
      <div className="vd-field__wrap">
        {children}
        <span className="vd-field__line" aria-hidden="true" />
        {select && (
          <svg
            className="vd-field__chevron"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        )}
      </div>
    </div>
  );
}

/* The project enquiry. Not connected to a backend yet: once the browser's
   field checks pass, it says so plainly instead of pretending to send. */
export function ViralEnquiry() {
  const [status, setStatus] = useState<"idle" | "unsent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("unsent");
  }

  return (
    <form className="vd-form" onSubmit={handleSubmit}>
      <h3 className="vd-form__title">Tell us about your brand</h3>

      <Field id="vd-name" label="Your name">
        <input
          id="vd-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="vd-field__control"
        />
      </Field>

      <Field id="vd-company" label="Business name">
        <input
          id="vd-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="vd-field__control"
        />
      </Field>

      <Field id="vd-mobile" label="Mobile number">
        <input
          id="vd-mobile"
          name="mobile"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          className="vd-field__control"
        />
      </Field>

      <Field id="vd-email" label="Email">
        <input
          id="vd-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@yourbrand.com"
          className="vd-field__control"
        />
      </Field>

      <Field id="vd-service" label="What you need" select>
        <select
          id="vd-service"
          name="service"
          required
          defaultValue=""
          className="vd-field__control"
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map(({ slug, title }) => (
            <option key={slug}>{title}</option>
          ))}
          <option>A mix — help me decide</option>
        </select>
      </Field>

      <Field id="vd-budget" label="Monthly budget" select>
        <select
          id="vd-budget"
          name="budget"
          required
          defaultValue=""
          className="vd-field__control"
        >
          <option value="" disabled>
            Choose a range
          </option>
          {BUDGETS.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </Field>

      <button type="submit" className="vd-submit">
        Send enquiry
      </button>
      <p className="vd-form__status" role="status">
        {status === "unsent" &&
          "This form isn't connected yet, so nothing was sent. Connect it to your inbox or CRM before launch."}
      </p>
    </form>
  );
}
