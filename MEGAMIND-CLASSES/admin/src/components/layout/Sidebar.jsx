import { NavLink } from 'react-router-dom';
import { FiBookOpen, FiGrid, FiUsers } from 'react-icons/fi';
import clsx from 'clsx';

const links = [
  { label: 'Dashboard', to: '/', icon: FiGrid },
  { label: 'Courses', to: '/courses', icon: FiBookOpen },
  { label: 'Students', to: '/students', icon: FiUsers },
];

export function Sidebar() {
  return (
    <aside className="hidden border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex h-16 items-center px-6 text-base font-bold text-brand-600 dark:text-brand-100">
        MEGAMIND Admin
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-4 py-4" aria-label="Admin navigation">
        {links.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition',
                isActive
                  ? 'bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-100'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
              )
            }
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

