import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import AboutLayout from '../layouts/AboutLayout';
import ShopLayout from '../layouts/ShopLayout';
import ContactLayout from '../layouts/ContactLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'product/:id',
                element: <ProductDetails />,
                loader: ({ params }) => {
                    return fetch('/shoes.json').then(res => res.json()).then(products => products.find(p => p.id === parseInt(params.id)));
                },
            },
        ],
    },
    {
        path: '/contact',
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />,
                loader: () => fetch('/faq.json').then(res => res.json()),
            },
        ],
    },
    {
        path: '/about',
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />,
            },
        ],
    },
    {
        path: '/shop',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <Shop />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
