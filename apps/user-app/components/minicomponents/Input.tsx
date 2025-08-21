export const Input = ({
  className = "",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <input
    className={`flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);
