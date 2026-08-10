import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  type?: string;
}

type InputProps = FormFieldProps & InputHTMLAttributes<HTMLInputElement> & { textarea?: false };
type TextareaProps = FormFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { textarea: true };
type Props = InputProps | TextareaProps;

export function FormField(props: Props) {
  const { label, id, error, textarea } = props;

  const sharedLabelClasses = "space-y-2 text-sm font-medium text-foreground";
  const sharedControlClasses =
    "w-full rounded-3xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  if (textarea) {
    const { label: _label, id: _id, error: _error, type: _type, textarea: _textarea, ...textareaProps } = props;
    void _label;
    void _id;
    void _error;
    void _type;
    void _textarea;

    return (
      <label htmlFor={id} className={sharedLabelClasses}>
        <span>{label}</span>
        <textarea id={id} rows={5} className={sharedControlClasses} {...textareaProps} />
        {error ? <p className="text-xs text-destructive">{error}</p> : null}
      </label>
    );
  }

  const { label: _label, id: _id, error: _error, textarea: _textarea, ...inputProps } = props;
  void _label;
  void _id;
  void _error;
  void _textarea;
  const { type = "text" } = inputProps as InputProps;

  return (
    <label htmlFor={id} className={sharedLabelClasses}>
      <span>{label}</span>
      <input id={id} type={type} className={sharedControlClasses} {...(inputProps as InputHTMLAttributes<HTMLInputElement>)} />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </label>
  );
}
