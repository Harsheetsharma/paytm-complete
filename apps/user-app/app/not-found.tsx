export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-slate-600 mt-2">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
