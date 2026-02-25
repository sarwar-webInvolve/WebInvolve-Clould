import logo from '../Images/logo.png';
import { NavLink, Outlet } from 'react-router-dom';
export default function Header() {
	return (
		<div className='w-full flex sticky top-0 pt-2 bg-transparent z-20'>
			<div className='header px-8 py-6 w-full items-center flex justify-between '>
				<div className='main-logo '>
					{/* <img src={logo} alt='logo' /> */}
					<h2 className='text-2xl font-bold text-white'>
						WebInvolve Cloud
					</h2>
				</div>
				<nav className='flex gap-18 text-2xl p-4 text-[rgb(49,54,76)]'>
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
				<button className='header-btn border rounded-2xl cursor-pointer p-3 backdrop-blur-md text-amber-50 font-bold text-sm'>
					Get Template for Free
				</button>
			</div>
		</div>
	);
}
