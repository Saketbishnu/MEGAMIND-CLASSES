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

export function SectionHeader({ title, description, eyebrow, align = 'left', actions, className }) {
  return (
    <div className={clsx('mb-8 max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base sm:text-lg">{description}</p> : null}
      {actions ? <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">{actions}</div> : null}
    </div>
  );
}

export function HeroContainer({ className, children, ...props }) {
  return (
    <div className={clsx('relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-8 shadow-soft dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:p-10 lg:p-16', className)} {...props}>
      {children}
    </div>
  );
}
