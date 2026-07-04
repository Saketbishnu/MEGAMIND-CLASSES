import clsx from 'clsx';

export function Container({ className, children, ...props }) {
  return (
    <div className={clsx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
}

export function Section({ className, children, ...props }) {
  return (
    <section className={clsx('section-spacing', className)} {...props}>
      <div className="section-shell">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, description, eyebrow, align = 'left', actions }) {
  return (
    <div className={clsx('mb-6 max-w-3xl sm:mb-8', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300 sm:text-sm">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 sm:text-base">{description}</p> : null}
      {actions ? <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">{actions}</div> : null}
    </div>
  );
}

export function HeroContainer({ className, children, ...props }) {
  return (
    <div className={clsx('relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:p-8 lg:p-10', className)} {...props}>
      {children}
    </div>
  );
}
