import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import workImg1 from '../Images/work1.svg';
import workImg2 from '../Images/work2.svg';
import workImg3 from '../Images/work3.svg';

export default function WorkingSection() {
	return (
		<section className='w-full bg-[rgb(5,7,26)] shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] text-white py-16 md:py-24 px-6 md:px-12'>
			<div className='max-w-7xl mx-auto'>
				{/* Heading */}
				<div className='text-center mb-12 md:mb-20'>
					<h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight'>
						How WebInvolve Cloud Works
					</h2>
					<p className='text-gray-400 mt-6 max-w-2xl mx-auto text-lg'>
						Designed to Simplify Your Experience and Maximize the
						Benefits of WebInvolve Cloud's Innovative Features
					</p>
				</div>

				{/* Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center'>
					{/* LEFT SIDE (Image Placeholder Card) */}
					<div className='relative rounded-3xl bg-linear-to-br bg-[rgb(5,7,26)] shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] px-8 md:px-20 py-10 border border-blue-900/40'>
						{/* Image Placeholder */}
						<div className='w-full h-64 md:h-87.5 rounded-2xl flex items-center justify-center text-gray-500 text-lg border border-blue-800/40'>
							<img src={workImg1} alt='' />
						</div>

						{/* Bottom Stats Card */}
						<div className='mt-8 bg-[rgb(5,7,26)] rounded-2xl p-6 border border-blue-900/40'>
							<div className='flex items-center gap-4'>
								<h3 className='text-4xl font-bold'>25%</h3>
								<span className='text-blue-400 font-medium flex items-center gap-1'>
									↗ 9.2%
								</span>
							</div>
							<p className='text-gray-400 mt-2'>
								Average revenue growth
							</p>
						</div>
					</div>

					{/* RIGHT SIDE (Text Content) */}
					<div>
						<h3 className='text-3xl md:text-4xl font-semibold leading-tight'>
							Effortless Onboarding <br />
							Process with WebInvolve Cloud
						</h3>

						<p className='text-gray-400 mt-6 text-lg leading-relaxed'>
							"Discover Our Streamlined and User-Friendly Onboarding
							Process, Designed to Get You Up and Running Quickly and
							Efficiently."
						</p>

						{/* Button */}
						<button className='mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 transition-transform duration-300 px-8 py-4 rounded-xl text-lg font-medium shadow-lg'>
							Learn More
							<ArrowUpRight size={20} />
						</button>
					</div>
				</div>
			</div>
			{/* SECOND CONTENT GRID (Image Right, Text Left) */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 px-0 md:px-12 items-center mt-16 md:mt-32'>
				{/* LEFT SIDE (Text Content) */}
				<div className='order-2 lg:order-1'>
					<h3 className='text-3xl md:text-4xl font-semibold leading-tight'>
						Seamless Integration with <br />
						Your Workflow.
					</h3>

					<p className='text-gray-400 mt-6 text-lg leading-relaxed'>
						Learn How WebInvolve Cloud Seamlessly Integrates with Your
						Existing Systems and Processes, Ensuring Minimal
						Disruption and Maximum Efficiency.
					</p>

					<button className='mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 transition-transform duration-300 px-8 py-4 rounded-xl text-lg font-medium shadow-lg'>
						Learn More
						<ArrowUpRight size={20} />
					</button>
				</div>

				{/* RIGHT SIDE (Image Card) */}
				<div className='relative rounded-3xl bg-linear-to-br bg-[rgb(5,7,26)] shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] p-8 md:p-20 border border-blue-900/40 order-1 lg:order-2'>
					<div className='w-full h-64 md:h-87.5 rounded-2xl flex items-center justify-center text-gray-500 text-lg border border-blue-800/40'>
						<img src={workImg2} alt='' />
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 px-0 md:px-12 items-center mt-16 md:mt-32'>
				{/* LEFT SIDE (Image Card) */}
				<div className='relative rounded-3xl bg-linear-to-br bg-[rgb(5,7,26)] shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] px-8 md:px-20 py-10 border border-blue-900/40'>
					<div className='w-full h-64 md:h-87.5 rounded-2xl flex items-center justify-center text-gray-500 text-lg border border-blue-800/40'>
						<img src={workImg3} alt='' />
					</div>

					{/* Bottom Stats Card */}
					<div className='mt-8 bg-[rgb(5,7,26)] rounded-2xl p-6 border border-blue-900/40'>
						<div className='flex items-center gap-4'>
							<h3 className='text-4xl font-bold'>120K+</h3>
							<span className='text-blue-400 font-medium flex items-center gap-1'>
								↗ 9.2%
							</span>
						</div>
						<p className='text-gray-400 mt-2'>
							Happy customers worldwide
						</p>
					</div>
				</div>

				{/* RIGHT SIDE (Text Content) */}
				<div>
					<h3 className='text-3xl md:text-4xl font-semibold leading-tight'>
						Expert Guidance Every <br />
						Step of the Way
					</h3>

					<p className='text-gray-400 mt-6 text-lg leading-relaxed'>
						Experience a Guided Onboarding Experience with WebInvolve
						Cloud, Where Our Expert Team Provides Personalized Support
						and Assistance.
					</p>

					<button className='mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 transition-transform duration-300 px-8 py-4 rounded-xl text-lg font-medium shadow-lg'>
						Learn More
						<ArrowUpRight size={20} />
					</button>
				</div>
			</div>
		</section>
	);
}
