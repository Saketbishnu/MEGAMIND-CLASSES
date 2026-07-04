import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@app/providers/ThemeProvider.jsx';
import { router } from '@app/routes/router.jsx';
import { ToastProvider } from '@components/ui/ToastProvider.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ToastProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

