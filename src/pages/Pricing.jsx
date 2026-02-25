import React, { useState } from 'react';

export default function PricingSection() {
	const [yearly, setYearly] = useState(false);

	const features = [
		'Comprehensive Dashboard',
		'Basic Budgeting Tools',
		'Monthly Financial Reports',
		'3 Financial Accounts',
		'Email Support',
	];

	return (
		<>
			<section className='w-full bg-[rgb(5,7,26)] shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] text-white py-16 md:py-24 px-6 md:px-12'>
				<div className='max-w-7xl mx-auto'>
					{/* Heading */}
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight'>
							Pricing Plans
						</h2>
						<p className='text-gray-400 mt-6 max-w-2xl mx-auto text-lg'>
							Designed to Simplify Your Experience and Maximize the
							Benefits of CloudPeak's Innovative Features
						</p>

						{/* Toggle */}
						<div className='flex items-center justify-center gap-4 mt-8'>
							<span
								className={`${!yearly ? 'text-white' : 'text-gray-400'}`}>
								Monthly
							</span>

							<button
								onClick={() => setYearly(!yearly)}
								className='w-14 h-7 bg-blue-600 rounded-full relative transition'>
								<div
									className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
										yearly ? 'left-8' : 'left-1'
									}`}
								/>
							</button>

							<span
								className={`${yearly ? 'text-white' : 'text-gray-400'}`}>
								Yearly
							</span>
						</div>
					</div>

					{/* Cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-end'>
						{/* BASIC */}
						<div className='rounded-3xl p-8 md:p-10 border border-blue-900/40 bg-[rgb(5,7,26)] shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]'>
							<h3 className='text-2xl font-semibold'>Basic</h3>
							<p className='text-gray-400 mt-1'>For small company</p>

							<div className='mt-6 text-4xl font-bold'>
								${yearly ? '39' : '49'} USD
							</div>
							<p className='text-gray-400 text-sm mt-1'>
								per person, per month
							</p>

							<ul className='mt-8 space-y-4 text-gray-300'>
								<li>✔ Comprehensive Dashboard</li>
								<li>✔ Basic Budgeting Tools</li>
								<li>✔ Monthly Financial Reports</li>
								<li>✔ 3 Financial Accounts</li>
								<li>✔ Email Support</li>
							</ul>

							<button className='mt-10 w-full bg-linear-to-r from-blue-600 to-blue-500 py-3 rounded-xl font-medium hover:scale-105 transition'>
								Get Started
							</button>
						</div>

						{/* PREMIUM (POPED CENTER) */}
						<div className='rounded-3xl p-8 md:p-12 border bg-[rgb(5,7,26)] shadow-[0_0_60px_rgba(59,130,246,0.3)] md:scale-105 relative'>
							<div className='absolute top-6 right-6 bg-green-500 text-xs px-3 py-1 rounded-full text-black font-semibold '>
								Popular
							</div>

							<h3 className='text-2xl font-semibold'>Premium</h3>
							<p className='text-gray-400 mt-1'>For small company</p>

							<div className='mt-6 text-4xl font-bold'>
								${yearly ? '79' : '99'} USD
							</div>
							<p className='text-gray-400 text-sm mt-1'>
								per person, per month
							</p>

							<ul className='mt-8 space-y-4 text-gray-300'>
								<li>✔ Comprehensive Dashboard</li>
								<li>✔ Basic Budgeting Tools</li>
								<li>✔ Monthly Financial Reports</li>
								<li>✔ 3 Financial Accounts</li>
								<li>✔ Email Support</li>
							</ul>

							<button className='mt-10 w-full bg-linear-to-r from-blue-600 to-blue-500 py-3 rounded-xl font-medium hover:scale-105 transition'>
								Get Started
							</button>
						</div>

						{/* STANDARD */}
						<div className='rounded-3xl p-8 md:p-10 border border-blue-900/40 bg-[rgb(5,7,26)] shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]'>
							<h3 className='text-2xl font-semibold'>Standard</h3>
							<p className='text-gray-400 mt-1'>For small company</p>

							<div className='mt-6 text-4xl font-bold'>
								${yearly ? '49' : '59'} USD
							</div>
							<p className='text-gray-400 text-sm mt-1'>
								per person, per month
							</p>

							<ul className='mt-8 space-y-4 text-gray-300'>
								<li>✔ Comprehensive Dashboard</li>
								<li>✔ Basic Budgeting Tools</li>
								<li>✔ Monthly Financial Reports</li>
								<li>✔ 3 Financial Accounts</li>
								<li>✔ Email Support</li>
							</ul>

							<button className='mt-10 w-full bg-linear-to-r from-blue-600 to-blue-500 py-3 rounded-xl font-medium hover:scale-105 transition'>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* PRICING COMPARISON TABLE */}
			<div className='mt-16 md:mt-32 px-4 md:px-0'>
				{/* Heading */}
				<div className='text-center mb-12 md:mb-20'>
					<h2 className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold tracking-tight'>
						Choose which plan suits <br /> best for you
					</h2>
					<p className='text-gray-400 mt-6 max-w-2xl mx-auto text-lg'>
						Designed to Simplify Your Experience and Maximize the
						Benefits of CloudPeak's Innovative Features
					</p>
				</div>

				{/* MOBILE: stacked plan cards — shown only below md */}
				<div className='flex flex-col gap-6 md:hidden'>
					{[
						{ name: 'Basic', price: '$49' },
						{ name: 'Premium', price: '$99', highlight: true },
						{ name: 'Standard', price: '$59' },
					].map((plan) => (
						<div
							key={plan.name}
							className={`rounded-3xl p-6 border text-white ${
								plan.highlight
									? 'border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.25)] bg-[rgb(5,7,26)]'
									: 'border-blue-900/40 bg-[rgb(5,7,26)]'
							}`}>
							<div className='flex justify-between items-center mb-6'>
								<div>
									<h4 className='text-xl font-semibold'>
										{plan.name}
									</h4>
									<p className='text-gray-400 text-sm'>
										For small company
									</p>
								</div>
								<div className='text-right'>
									<div className='text-3xl font-bold'>
										{plan.price}
									</div>
									<p className='text-gray-400 text-sm'>per month</p>
								</div>
							</div>

							<div className='space-y-4'>
								{features.map((feature) => (
									<div
										key={feature}
										className='flex justify-between items-center border-b border-blue-900/20 pb-3'>
										<span className='text-gray-300 text-sm'>
											{feature}
										</span>
										<span className='text-green-400 font-bold'>
											✓
										</span>
									</div>
								))}
							</div>

							<button className='mt-6 w-full bg-gray-700 hover:bg-blue-500 py-3 rounded-xl text-sm transition'>
								Get Started
							</button>
						</div>
					))}
				</div>

				{/* DESKTOP: original 4-column grid — hidden on mobile */}
				<div className='hidden md:grid grid-cols-4 max-w-5xl mx-auto'>
					{/* LEFT FEATURE COLUMN */}
					<div className='text-left pr-4 md:pr-8 relative top-16'>
						<h3 className='text-xl md:text-2xl text-white font-medium mb-10'>
							Main features
						</h3>

						<div className='space-y-10 text-gray-300 text-sm md:text-base'>
							<div>Comprehensive Dashboard</div>
							<div>Basic Budgeting Tools</div>
							<div>Monthly Financial Reports</div>
							<div>3 Financial Accounts</div>
							<div>Email Support</div>
						</div>
					</div>

					{/* BASIC */}
					<div className='text-center space-y-8'>
						<div>
							<h4 className='text-lg text-gray-400 font-semibold'>
								Basic
							</h4>
							<p className='text-gray-400 text-sm'>
								For small company
							</p>
							<div className='text-3xl md:text-4xl font-bold text-white mt-4'>
								$49
							</div>
							<p className='text-gray-400 text-sm'>per month</p>
						</div>

						<div className='space-y-8 text-green-400'>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
						</div>

						<button className='mt-8 bg-gray-700 hover:bg-blue-500 px-4 md:px-6 py-3 rounded-xl text-sm md:text-base'>
							Get Started
						</button>
					</div>

					{/* PREMIUM (Highlighted) */}
					<div className='text-center space-y-8 relative bg-[rgb(5,7,26)] rounded-3xl py-6 -top-3.5 '>
						<div>
							<h4 className='text-lg text-gray-400 font-semibold'>
								Premium
							</h4>
							<p className='text-gray-400 text-sm'>
								For small company
							</p>
							<div className='text-3xl md:text-4xl text-white font-bold mt-4'>
								$99
							</div>
							<p className='text-gray-400 text-sm'>per month</p>
						</div>

						<div className='space-y-8 text-green-400'>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
						</div>

						<button className='mt-8 bg-gradient-to-r bg-gray-700 hover:bg-blue-500 px-4 md:px-6 py-3 rounded-xl text-sm md:text-base'>
							Get Started
						</button>
					</div>

					{/* STANDARD */}
					<div className='text-center space-y-8'>
						<div>
							<h4 className='text-lg text-gray-400 font-semibold'>
								Standard
							</h4>
							<p className='text-gray-400 text-sm'>
								For small company
							</p>
							<div className='text-3xl md:text-4xl text-white font-bold mt-4'>
								$59
							</div>
							<p className='text-gray-400 text-sm'>per month</p>
						</div>

						<div className='space-y-8 text-green-400'>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
							<div>✓</div>
						</div>

						<button className='mt-8 bg-gray-700 hover:bg-blue-500 px-4 md:px-6 py-3 rounded-xl text-sm md:text-base'>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
