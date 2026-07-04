import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard | MEGAMIND CLASSES Admin</title>
      </Helmet>
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Dashboard
          </p>
          <h1 className="mt-3 text-3xl font-bold">Admin dashboard placeholder</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Admin infrastructure is ready for protected platform operations.
          </p>
        </motion.div>
      </section>
    </>
  );
}

