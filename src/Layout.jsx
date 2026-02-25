import { NavLink, Outlet } from 'react-router-dom';
import Header from './pages/header';
import WorkingSection from './pages/WorkingSection';

import Features from './pages/Features';
import Reviews from './pages/Review';
import PricingSection from './pages/Pricing';
import FAQSection from './pages/modalQns';
import Footer from './pages/Footer';

export default function Layout() {
	return (
		<>
			<div className='w-full flex flex-col bg-[rgb(5,7,26)]'>
				<Header />
				<Features />
				<WorkingSection />
				<PricingSection />
				<Reviews />
				<FAQSection />
				<Footer />
			</div>
		</>
	);
}
