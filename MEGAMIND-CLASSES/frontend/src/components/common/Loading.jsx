import { FiLoader } from 'react-icons/fi';

export function Loading({ label = 'Loading' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-40 items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-300"
    >
      <FiLoader className="h-5 w-5 animate-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

