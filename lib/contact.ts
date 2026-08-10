export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(values: ContactFormValues) {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function getContactSubmissionInstructions() {
  return {
    message:
      "This form is ready for integration with Formspree, EmailJS, Resend, or a Next.js server action.",
    nextStep:
      "Replace the form event handler in components/contact/ContactForm.tsx with your preferred provider or backend endpoint.",
  };
}
