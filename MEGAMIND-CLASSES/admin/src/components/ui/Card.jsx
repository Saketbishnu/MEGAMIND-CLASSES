import clsx from 'clsx';

export function Card({ className, children, as: Component = 'div', ...props }) {
  return (
    <Component className={clsx('card-surface p-6 sm:p-8', className)} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({ className, title, description, actions }) {
  return (
    <div className={clsx('mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between', className)}>
      <div>
        {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
        {description ? <p className="mt-1 text-sm">{description}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
