import clsx from 'clsx';
import { forwardRef } from 'react';

const inputBase =
  'w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100';

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={clsx(inputBase, className)} {...props} />;
});

export const Textarea = forwardRef(function Textarea({ className, rows = 4, ...props }, ref) {
  return <textarea ref={ref} rows={rows} className={clsx(inputBase, 'min-h-[120px] resize-y', className)} {...props} />;
});

export const Select = forwardRef(function Select({ className, children, ...props }, ref) {
  return (
    <select ref={ref} className={clsx(inputBase, 'appearance-none bg-[linear-gradient(45deg,transparent_50%,currentColor_50%),linear-gradient(135deg,currentColor_50%,transparent_50%)] bg-[0_0,0_0] bg-[length:6px_6px,6px_6px] bg-no-repeat bg-[position:calc(100%-1.15rem)_50%,calc(100%-0.85rem)_50%] pr-10', className)} {...props}>
      {children}
    </select>
  );
});
