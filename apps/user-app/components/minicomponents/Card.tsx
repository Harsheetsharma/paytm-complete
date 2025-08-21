export const Card = ({
  children,
  onClick,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);
