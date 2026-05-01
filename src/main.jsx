import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import router from './routes/AppRoutes';
import { ShopProvider } from './context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </React.StrictMode>
);
