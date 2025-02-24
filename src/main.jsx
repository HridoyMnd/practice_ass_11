import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <Layout />
    </RouterProvider>
  </StrictMode>,
)
