import React from "react";
import type { LucideProps } from "lucide-react";

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType<LucideProps>;
  iconPosition?: "left" | "right";
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "delete"
    | "neutral"
    | "danger-secondary"
    | "edit-secondary"
    | "dashed"
    | "no-border"
    | "gray";
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  iconPosition = "left",
  label,
  variant = "secondary",
  className,
  ...props
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2 cursor-pointer text-sm font-medium transition-colors duration-200 cursor-pointer";

  const variantClasses = {
    primary:
      "h-10 bg-primary text-white-system px-4 rounded-xl enabled:hover:bg-primary-dark-1",
    secondary:
      "h-10 border border-gray-system text-gray-system-light-3 px-3 rounded-lg enabled:hover:text-primary enabled:hover:border-primary",
    delete:
      "h-10 bg-error text-white-system px-4 rounded-xl enabled:hover:bg-[#A92D21]",
    neutral:
      "h-10 bg-secondary-light-2 text-white-system px-4 rounded-xl enabled:hover:bg-secondary-light-3",
    "danger-secondary":
      "h-10 border border-gray-system text-gray-system-light-3 px-3 rounded-lg enabled:hover:text-error enabled:hover:border-error",
    "edit-secondary":
      "h-10 border border-gray-system text-gray-system-light-3 px-3 rounded-lg enabled:hover:text-info enabled:hover:border-info",
    dashed:
      "h-10 border border-dashed border-secondary-light-1 text-gray-system-light-3 px-4 rounded-lg enabled:hover:bg-secondary-light-4/50 enabled:hover:text-white-system",
    "no-border":
      "h-10 text-gray-system-light-3 px-4 rounded-lg enabled:hover:bg-white-system/5 enabled:hover:text-white-system",
    gray: "h-10 border border-secondary-light-1 text-gray-system-light-3 px-4 rounded-lg",
  };

  const disabledClasses = "disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={18} />}
      <span>{label}</span>
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  );
};

export default ActionButton;
