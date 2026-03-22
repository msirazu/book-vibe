import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './auth/context/AuthProvider'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ToastContainer/>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)