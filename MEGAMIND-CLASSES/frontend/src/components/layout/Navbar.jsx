import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@app/providers/ThemeProvider.jsx';
import { IconButton } from '@components/ui/Button.jsx';

const links = [{ label: 'About', href: '#about' }, { label: 'Programs', href: '#programs' }, { label: 'Contact', href: '#contact' }];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="section-shell flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="font-display text-lg font-semibold tracking-wide text-brand-600 dark:text-brand-300">
          MEGAMIND CLASSES
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <IconButton aria-label="Toggle color theme" onClick={() => setTheme(nextTheme)}>
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </IconButton>
          <IconButton aria-label="Open navigation menu" className="md:hidden">
            <FiMenu aria-hidden="true" />
          </IconButton>
        </div>
      </nav>
    </header>
  );
}

