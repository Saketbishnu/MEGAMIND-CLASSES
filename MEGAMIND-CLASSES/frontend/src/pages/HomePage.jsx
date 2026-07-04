import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>MEGAMIND CLASSES | Student Platform</title>
        <meta
          name="description"
          content="Student learning platform infrastructure for MEGAMIND CLASSES."
        />
      </Helmet>
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Student App
          </p>
          <h1 className="mt-3 text-3xl font-bold">MEGAMIND CLASSES</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Production infrastructure is ready for the premium learning experience.
          </p>
        </motion.div>
      </section>
    </>
  );
}

