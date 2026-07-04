import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@app/providers/ThemeProvider.jsx';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-base font-bold tracking-wide text-brand-600 dark:text-brand-100">
          MEGAMIND CLASSES
        </a>
        <button
          type="button"
          aria-label="Toggle color theme"
          onClick={() => setTheme(nextTheme)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
        >
          {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}

