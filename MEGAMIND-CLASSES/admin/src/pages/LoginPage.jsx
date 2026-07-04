import { Helmet } from 'react-helmet-async';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Admin Login | MEGAMIND CLASSES</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 dark:bg-slate-950">
        <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Admin
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-950 dark:text-slate-50">
            Login placeholder
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Authentication UI will be connected after the infrastructure layer.
          </p>
        </section>
      </main>
    </>
  );
}

