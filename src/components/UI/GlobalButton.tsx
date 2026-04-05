interface GlobalButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  iconClassName?: string;
  icon?: string;
  iconEnd?: boolean;
  navigateTo?: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "light" | "ghost" | "custom" | "gradient";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  width?: string;
}

export default function GlobalButton({
  text = "",
  onClick,
  type = "button",
  className = "",
  iconClassName = "",
  icon,
  navigateTo,
  target,
  iconEnd = false,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "md",
  fullWidth = false,
  width,
}: GlobalButtonProps) {
  const isDisabled = disabled || loading;

  const variantStyles = {
    primary: "bg-[#FFC50B] text-black hover:opacity-90",
    secondary: "bg-black text-white hover:opacity-90",
    outline: "border border-black text-black bg-transparent hover:bg-black hover:text-white",
    light: "bg-[#DDDDDD] border border-black text-black hover:bg-gray-300",
    ghost: "text-black hover:bg-gray-100",
    custom: "border-3 border-[#1CA600] bg-white text-black shadow-lg",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700 rounded-full",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  const baseStyles = `
    flex items-center justify-center gap-2
    transition-all duration-200
    font-semibold
    rounded
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : "w-fit"}
    ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  const iconEl = icon && !loading ? (
    <img src={icon} alt="icon" className={`w-5 h-5 ${iconClassName}`} />
  ) : null;

  const content = (
    <>
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {!iconEnd && iconEl}
          {text && <span>{text}</span>}
          {iconEnd && iconEl}
        </>
      )}
    </>
  );

  const style = width ? { width } : {};

  if (navigateTo) {
    return (
      <a
        href={navigateTo}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${className}`}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={style}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
}
