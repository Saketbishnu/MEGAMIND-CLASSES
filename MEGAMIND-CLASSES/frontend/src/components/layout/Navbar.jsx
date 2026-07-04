import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import { useTheme } from '@app/providers/ThemeProvider.jsx';
import { IconButton } from '@components/ui/Button.jsx';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Results', to: '/results' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Admission', to: '/admission' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 border-b transition-all duration-300',
        isScrolled
          ? 'border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90'
          : 'border-transparent bg-white/60 backdrop-blur-md dark:bg-slate-950/60',
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" end className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-glow">
            MC
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-brand-600 dark:text-brand-300">
            MEGAMIND CLASSES
          </span>
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-medium transition hover:text-brand-600 dark:hover:text-brand-300',
                  isActive
                    ? 'text-brand-600 dark:text-brand-300'
                    : 'text-slate-600 dark:text-slate-300',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <IconButton aria-label="Toggle color theme" onClick={() => setTheme(nextTheme)}>
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </IconButton>
          <IconButton
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </IconButton>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={clsx(
          'border-t border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/95 md:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="section-shell flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-900',
                  isActive
                    ? 'bg-slate-100 text-brand-600 dark:bg-slate-900 dark:text-brand-300'
                    : 'text-slate-700 dark:text-slate-200',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/admission" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
            Admission Open
          </NavLink>
        </div>
      </div>
    </header>
  );
}
