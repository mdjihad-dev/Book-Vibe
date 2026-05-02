import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/Router';
import Context from './Component/context/Context';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>,
);
