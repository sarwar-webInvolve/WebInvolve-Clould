import React from 'react';
import logo from '../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faEnvelope,
	faPhone,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faFacebook,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer className='w-full bg-[rgb(5,7,26)] text-white px-6 md:px-12 pt-16 md:pt-20 pb-12 relative'>
			<div className='max-w-7xl mx-auto'>
				{/* Top Section */}
				<div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-10'>
					{/* Logo + Brand */}
					<div className='flex items-center gap-6'>
						<h2 className='text-2xl md:text-3xl'>WebInvolve Cloud</h2>
					</div>

					{/* Divider Line (vertical on desktop) */}
					<div className='hidden md:block w-px h-16 bg-white/30'></div>

					{/* Tagline */}
					<p className='text-gray-400 text-base md:text-l font-medium max-w-xl leading-relaxed'>
						Solutions that drive success and propel
						<br />
						your business forward
					</p>
				</div>

				{/* Thin Horizontal Line */}
				<div className='w-full h-px bg-white/20 my-10 md:my-16'></div>

				{/* Bottom Section */}
				<div className='text-gray-400 text-base md:text-lg leading-relaxed flex flex-col sm:flex-row justify-between gap-6'>
					<div>
						<p>Copyright © 2025 FramerBite.</p>
						<p className='mt-2'>All Rights Reserved</p>
					</div>
					<div className='social-icons'>
						<ul className='flex gap-4 flex-wrap'>
							<li>
								<a
									href='https://mail.google.com/mail/?view=cm&fs=1&to=hr@webinvolve.com'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/webinvolvee/'
									className='qwert'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>
							<li>
								<a
									href='https://wa.me/+917889402820'
									target='_blank'
									className='qwert'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faWhatsapp} />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/company/webinvolve/'
									target='_blank'
									className='qwert'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</li>
							<li>
								<a href='tel:+917889402820' className='qwert'>
									<FontAwesomeIcon icon={faPhone} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Glow Effect */}
			<div className='absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-blue-500/20 to-transparent pointer-events-none'></div>
		</footer>
	);
}
