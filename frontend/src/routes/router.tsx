import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout.tsx';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BasicLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'product/:id', element: <ProductDetailsPage /> },
        { path: 'cart', element: <CartPage /> }
      ]
    }
  ],
  {
    basename: '/hekto-online-shop'
  }
);

export default router;
