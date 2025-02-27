import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </RouterProvider>
  </StrictMode>,
)
