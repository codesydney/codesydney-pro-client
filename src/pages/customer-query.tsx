import { LogoHeader } from '../components/LogoHeader';

export default function CustomerQueryPage() {
	return (
		<section className=' h-screen flex flex-col gap-4 justify-between items-center py-20'>
			<LogoHeader title='Techies4Good' />

			<div className=' w-full sm:max-w-[450px]'>
				<div className=' text-xl text-center font-medium mb-4'>
					<h2>Let us know how we can help?</h2>
				</div>
				<form>
					<div className=''>
						<label className='text-sm font-bold'>Name</label>
						<textarea
							className='flex h-52 w-full items-center justify-center rounded-md border-2 bg-white p-3 text-sm outline-none border-black'
							name='story'
							rows={15}
							cols={33}
						>
							Please describe your needs...
						</textarea>
					</div>
				</form>
			</div>

			<div className='m-auto w-full sm:max-w-[450px]'>
				<button
					type='button'
					className=' w-full m-auto rounded bg-black px-4 py-2 text-white shadow-md uppercase border-2 border-black'
					onClick={() => {}}
				>
					Submit
				</button>
			</div>
		</section>
	);
}
