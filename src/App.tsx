import { NavLink } from 'react-router-dom';
import './App.css';
import { LogoHeader } from './components/LogoHeader';

export default function App() {
	return (
		<section className=' h-screen flex flex-col gap-10 justify-center items-center py-20'>
			<LogoHeader title='Techies4Good' spinLogo={true} />
			<div className=' flex gap-4'>
				<NavLink
					to={'/login'}
					className='rounded bg-white px-4 py-2 text-black shadow-md uppercase border-2 border-black'
				>
					Login
				</NavLink>

				<NavLink
					to={'/register'}
					className='rounded bg-black px-4 py-2 text-white shadow-md uppercase border-2 border-black'
				>
					Register
				</NavLink>
			</div>
		</section>
	);
}
