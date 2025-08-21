export const Badge = ({
  children,
  variant = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  className?: string;
  [key: string]: any;
}) => {
  const variants = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
