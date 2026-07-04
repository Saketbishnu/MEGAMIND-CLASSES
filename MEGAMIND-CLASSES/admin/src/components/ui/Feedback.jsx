import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Loader2, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export function Spinner({ className, label = 'Loading...' }) {
  return (
    <div className={clsx('flex items-center justify-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300', className)} role="status" aria-live="polite">
      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export function LoadingSkeleton({ className, count = 3 }) {
  return (
    <div className={clsx('space-y-4', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-3xl border border-slate-200/80 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mb-3 h-4 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mb-2 h-4 w-full rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-5/6 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/70 px-8 py-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
        <Sparkles size={20} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description ? <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function ErrorState({ title = 'Something went wrong', description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-danger-200 bg-danger-50 px-8 py-12 text-center shadow-sm dark:border-danger-900/50 dark:bg-danger-950/20">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-danger-600 shadow-sm dark:bg-slate-900 dark:text-danger-300">
        <AlertCircle size={20} />
      </div>
      <h3 className="text-lg font-semibold text-danger-700 dark:text-danger-300">{title}</h3>
      {description ? <p className="mt-2 max-w-md text-sm text-danger-600 dark:text-danger-400">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function ToastProvider() {
  return (
    <AnimatePresence>
      <motion.div className="pointer-events-none fixed inset-x-0 top-4 z-[60] flex justify-center px-4">
        <div className="w-full max-w-md" />
      </motion.div>
    </AnimatePresence>
  );
}
