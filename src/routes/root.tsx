import { NavLink, Navigate, Outlet } from 'react-router-dom';

export default function Root() {
	let auth = { token: true }; // TODO: implement a provider to assert user is valid
	// If user is null|undefined|invalid then redirect with early return
	if (!auth.token) {
		return <Navigate to='/login' />;
	}

	return (
		<div className='h-screen flex flex-col gap-4 m-4'>
			<div className=' flex justify-between gap-2'>
				<span>Main App WIP</span>
				<nav>
					<NavLink
						to={'/home/customer-query'}
						className='rounded bg-black text-sm font-bold text-white p-4'
					>
						To Customer Query
					</NavLink>
				</nav>
			</div>

			<main>
				<Outlet />
			</main>
		</div>
	);
}
