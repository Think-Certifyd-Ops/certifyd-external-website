"use client";

import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-certifyd-blue text-white hover:bg-certifyd-blue-dark",
  outline:
    "border border-white/60 text-white hover:bg-white hover:text-navy",
  ghost:
    "text-current hover:text-certifyd-blue",
};

const sizeStyles: Record<string, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center font-heading font-medium rounded-sm transition-all duration-300 ease-out",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const inner = (
    <span className="inline-flex items-center">
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
        {children}
      </span>
      <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
