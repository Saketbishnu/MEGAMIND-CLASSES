import clsx from 'clsx';

export function HeroContainer({ className, children, ...props }) {
  return (
    <div className={clsx('relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-8 shadow-soft dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:p-10 lg:p-16', className)} {...props}>
      {children}
    </div>
  );
}
