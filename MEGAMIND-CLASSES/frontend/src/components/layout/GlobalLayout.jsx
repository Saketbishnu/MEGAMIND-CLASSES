import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { Navbar } from './Navbar.jsx';

export function GlobalLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

