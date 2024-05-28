import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    children: AppRoutes,
  },
]);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
