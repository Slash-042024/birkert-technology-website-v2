import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = SharedProps & {
  as?: "button";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type ButtonAsLink = SharedProps & {
  as: "link";
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-brand-500 bg-brand-500 text-white hover:border-brand-400 hover:bg-brand-400 focus-visible:ring-brand-400",
  secondary:
    "border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-white/60",
  ghost:
    "border-transparent bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white focus-visible:ring-white/40",
};

export function Button(props: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[props.variant ?? "primary"]} ${props.className ?? ""}`;

  if (props.as === "link") {
    return (
      <Link href={props.href} className={classes.trim()}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes.trim()}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
