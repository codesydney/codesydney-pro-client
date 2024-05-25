import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root.tsx';
import ErrorPage from './pages/error-page.tsx';
import LoginPage from './pages/login-page.tsx';
import App from './App.tsx';
import RegisterPage from './pages/register-page.tsx';
import CustomerQueryPage from './pages/customer-query.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
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
			// TODO: This is a child index page with replace navigation
			// Currently assuming the customer query page to be the main page after user is validated???
			{
				index: true,
				element: <Navigate to='/home/customer-query' replace />,
			},
			{
				path: '/home/customer-query',
				element: <CustomerQueryPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
