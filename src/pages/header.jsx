import logo from '../Images/logo.png';
import { NavLink, Outlet } from 'react-router-dom';
export default function Header() {
	return (
		<div className='w-full flex sticky top-0 pt-2 bg-transparent z-20'>
			<div className='header px-4 md:px-8 py-4 md:py-6 w-full items-center flex flex-wrap justify-between gap-4'>
				<div className='main-logo'>
					<h2 className='text-xl md:text-2xl font-bold text-white'>
						WebInvolve Cloud
					</h2>
				</div>
				<nav className='flex gap-6 md:gap-18 text-lg md:text-2xl p-2 md:p-4 text-[rgb(49,54,76)] order-3 md:order-none w-full md:w-auto justify-center'>
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? 'px-2 font-bold scale-130 underline text-[rgb(108,115,141)]' : ''}`
						}
						to='/features'>
						Features
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? 'px-2 font-bold scale-130 underline text-[rgb(108,115,141)]' : ''}`
						}
						to='/pricing'>
						Pricing
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? 'px-2 font-bold scale-130 underline text-[rgb(108,115,141)]' : ''}`
						}
						to='/reviews'>
						Reviews
					</NavLink>
				</nav>
				<button className='header-btn border rounded-2xl cursor-pointer p-2 md:p-3 backdrop-blur-md text-amber-50 font-bold text-xs md:text-sm'>
					Get Template for Free
				</button>
			</div>
		</div>
	);
}
