import { cn } from "@/lib/utils";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ReactNode,
} from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
};

type ButtonAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

type ButtonNativeProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAnchorProps | ButtonNativeProps;

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const sharedStyles = cn(
      "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
      variant === "primary" &&
        "bg-accent text-background shadow-sm hover:bg-accent-700",
      variant === "secondary" &&
        "border border-border bg-background text-foreground hover:border-accent hover:text-accent",
      variant === "ghost" && "text-foreground/80 hover:text-foreground",
      size === "sm" && "h-10 px-4 text-sm",
      size === "md" && "h-12 px-6 text-sm",
      className,
    );

    if ("href" in props && props.href !== undefined) {
      return (
        <a
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={sharedStyles}
          {...props}
        />
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={sharedStyles}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
