import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import AboutLayout from '../layouts/AboutLayout';
import ShopLayout from '../layouts/ShopLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
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
]);

export default router;
