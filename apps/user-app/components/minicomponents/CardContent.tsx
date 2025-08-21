export const CardContent = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);
