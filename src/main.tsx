import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layout/root.tsx'
import ErrorPage from './pages/error-page.tsx'
import LoginPage from './pages/login-page.tsx'
import HealthPage from './pages/health-page.tsx'
import App from './App.tsx'
import RegisterPage from './pages/register-page.tsx'
import CustomerQueryPage from './pages/customer-query.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './api/queryClient.ts'
import ExperimentalPage from './pages/experimental.tsx'
import Admin from './layout/admin.tsx'
import AdminPage from './pages/admin.tsx'
import AuthProvider from './providers/AuthProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/health',
    element: <HealthPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home/customer-query" replace />,
      },
      {
        path: '/home/customer-query',
        element: <CustomerQueryPage />,
      },
      {
        path: '/home/experimental',
        element: <ExperimentalPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: '/admin/dashboard',
        element: <AdminPage />,
      },
      {
        path: '/admin/exp',
        element: <ExperimentalPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
