import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import DataProvider from './features/auth/context/DataProvider'
import AuthProvider from './features/auth/context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <DataProvider>
        <ToastContainer/>
        <RouterProvider router={router} />
        </DataProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)