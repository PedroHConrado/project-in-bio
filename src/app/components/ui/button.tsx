import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses = {
  primary: "bg-accent-purple",
  secondary: "bg-background-tertiary",
  ghost: "border border-border-primary",
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70 cursor-pointer",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
