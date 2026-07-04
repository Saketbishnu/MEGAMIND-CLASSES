import { createBrowserRouter } from 'react-router-dom';
import { GlobalLayout } from '@components/layout/GlobalLayout.jsx';
import { HomePage } from '@pages/HomePage.jsx';
import { NotFoundPage } from '@pages/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

