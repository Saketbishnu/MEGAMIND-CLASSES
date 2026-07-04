import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '@components/layout/AdminLayout.jsx';
import { DashboardPage } from '@pages/DashboardPage.jsx';
import { LoginPage } from '@pages/LoginPage.jsx';
import { NotFoundPage } from '@pages/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

