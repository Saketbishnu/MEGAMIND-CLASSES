import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | MEGAMIND CLASSES</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="mx-auto max-w-xl py-16 text-center">
        <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">404</p>
        <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          The requested page is not available in this environment yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}

