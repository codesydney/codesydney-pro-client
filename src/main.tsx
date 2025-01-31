import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layout/root.tsx'
import ErrorPage from './pages/error-page.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import CustomerQueryPage from './pages/customer-query.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './api/queryClient.ts'
import MainLayout from './layout/MainLayout.tsx'
import Home from './pages/Home.tsx'
import ExperimentalPage from './pages/experimental.tsx'
import Admin from './layout/admin.tsx'
import AdminPage from './pages/admin.tsx'
import AuthProvider from './providers/AuthProvider.tsx'
import ToasterProvider from './providers/ToasterProvider.tsx'
import UsersPage from './pages/users-page.tsx'
import Developers from './pages/Developers.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'developers',
        element: <Developers />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'home',
        element: <Root />,
        children: [
          {
            index: true,
            element: <Navigate to="customer-query" replace />,
          },
          {
            path: 'customer-query',
            element: <CustomerQueryPage />,
          },
          {
            path: 'experimental',
            element: <ExperimentalPage />,
          },
        ],
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: 'dashboard',
            element: <AdminPage />,
          },
          {
            path: 'exp',
            element: <ExperimentalPage />,
          },
          {
            path: 'users',
            element: <UsersPage />,
          },
        ],
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
      <ToasterProvider />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
