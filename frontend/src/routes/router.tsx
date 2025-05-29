import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout.tsx';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import ErrorPage from '../pages/ErrorPage';
import BlogPage from '../pages/BlogPage.tsx';
import ContactPage from '../pages/ContactPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'product/:id', element: <ProductDetailsPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> }
    ]
  }
]);

export default router;
