export const CardHeader = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div className={`p-6 pb-4 ${className}`} {...props}>
    {children}
  </div>
);
