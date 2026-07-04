import { forwardRef } from 'react';
import clsx from 'clsx';

const baseButtonClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-slate-950';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export const PrimaryButton = forwardRef(function PrimaryButton(
  { className, size = 'md', children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={clsx(baseButtonClasses, sizes[size], 'bg-brand-600 text-white shadow-glow hover:bg-brand-700', className)} {...props}>
      {children}
    </button>
  );
});

export const SecondaryButton = forwardRef(function SecondaryButton(
  { className, size = 'md', children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={clsx(baseButtonClasses, sizes[size], 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200', className)} {...props}>
      {children}
    </button>
  );
});

export const OutlineButton = forwardRef(function OutlineButton(
  { className, size = 'md', children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={clsx(baseButtonClasses, sizes[size], 'border border-slate-300 bg-white/70 text-slate-700 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300', className)} {...props}>
      {children}
    </button>
  );
});

export const IconButton = forwardRef(function IconButton(
  { className, children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={clsx('inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300 dark:focus-visible:ring-offset-slate-950', className)} {...props}>
      {children}
    </button>
  );
});
