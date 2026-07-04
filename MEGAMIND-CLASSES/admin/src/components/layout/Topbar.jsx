import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@app/providers/ThemeProvider.jsx';

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Operations Console
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Infrastructure placeholder</p>
        </div>
        <button
          type="button"
          aria-label="Toggle color theme"
          onClick={() => setTheme(nextTheme)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
        >
          {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

