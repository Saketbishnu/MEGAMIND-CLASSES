import clsx from 'clsx';

export function Card({ className, children, as: Component = 'div', ...props }) {
  return (
    <Component className={clsx('card-surface p-5 sm:p-6', className)} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({ className, title, description, actions }) {
  return (
    <div className={clsx('mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between', className)}>
      <div>
        {title ? <h3 className="text-base font-semibold sm:text-lg">{title}</h3> : null}
        {description ? <p className="mt-1 text-sm">{description}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
