import clsx from 'clsx';

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
