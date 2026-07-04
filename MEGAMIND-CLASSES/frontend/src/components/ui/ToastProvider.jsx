import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        className: 'rounded-2xl border border-slate-200/80 bg-white/90 text-slate-900 shadow-card backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100',
        success: {
          iconTheme: {
            primary: '#16a34a',
            secondary: '#f8fafc',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#f8fafc',
          },
        },
      }}
    />
  );
}
