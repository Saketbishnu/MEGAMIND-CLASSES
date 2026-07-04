import clsx from 'clsx';

const variants = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
  brand: 'bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300',
  success: 'bg-success-50 text-success-600 dark:bg-success-900/20 dark:text-success-300',
  warning: 'bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-300',
  danger: 'bg-danger-50 text-danger-600 dark:bg-danger-900/20 dark:text-danger-300',
};

export function Badge({ className, variant = 'default', children, ...props }) {
  return (
    <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]', variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
