"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormValues } from "@/lib/contact";
import { validateContactForm } from "@/lib/contact";
import { FormField } from "@/components/contact/FormField";
import { Button } from "@/components/ui/Button";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-border/70 bg-background p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Name"
          id="name"
          value={values.name}
          onChange={handleChange("name")}
          error={errors.name}
        />
        <FormField
          label="Email"
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
        />
      </div>

      <FormField
        label="Subject"
        id="subject"
        value={values.subject}
        onChange={handleChange("subject")}
        error={errors.subject}
      />

      <FormField
        label="Message"
        id="message"
        textarea
        value={values.message}
        onChange={handleChange("message")}
        error={errors.message}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
        <p className="text-sm text-muted-foreground">
          This form is a frontend demonstration only. Connect your own provider in the source code.
        </p>
      </div>

      {status === "success" ? (
        <p className="rounded-3xl border border-green-300/80 bg-green-50 p-4 text-sm text-green-800">
          Message is ready to send. Replace the form handler with your provider of choice.
        </p>
      ) : null}
      {status === "error" && Object.keys(errors).length > 0 ? (
        <p className="rounded-3xl border border-destructive/80 bg-destructive/10 p-4 text-sm text-destructive">
          Please fix the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}
