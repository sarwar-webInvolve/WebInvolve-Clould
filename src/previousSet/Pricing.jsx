import React, { useState } from 'react';

export default function PricingSection() {
	const [yearly, setYearly] = useState(false);

	return (
		<>
			<section className='w-full bg-[rgb(5,7,26)] shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] text-white py-24 px-12'>
				<div className='max-w-7xl mx-auto'>
					{/* Heading */}
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-6xl font-semibold tracking-tight'>
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
					<div className='grid md:grid-cols-3 gap-10 items-end'>
						{/* BASIC */}
						<div className='rounded-3xl p-10 border border-blue-900/40 bg-[rgb(5,7,26)] shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]'>
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

							<button className='mt-10 w-full bg-gradient-to-r from-blue-600 to-blue-500 py-3 rounded-xl font-medium hover:scale-105 transition'>
								Get Started
							</button>
						</div>

						{/* PREMIUM (POPED CENTER) */}
						<div className='rounded-3xl p-12 border border-blue-700 bg-[rgb(5,7,26)] shadow-[0_0_60px_rgba(59,130,246,0.3)] scale-105 relative'>
							<div className='absolute top-6 right-6 bg-green-500 text-xs px-3 py-1 rounded-full text-black font-semibold'>
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

							<button className='mt-10 w-full bg-gradient-to-r from-blue-600 to-blue-500 py-3 rounded-xl font-medium hover:scale-105 transition'>
								Get Started
							</button>
						</div>

						{/* STANDARD */}
						<div className='rounded-3xl p-10 border border-blue-900/40 bg-[rgb(5,7,26)] shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]'>
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
			<div className='mt-32'>
				{/* Heading */}
				<div className='text-center mb-20'>
					<h2 className='text-4xl md:text-6xl text-white font-semibold tracking-tight'>
						Choose which plan suits <br /> best for you
					</h2>
					<p className='text-gray-400 mt-6 max-w-2xl mx-auto text-lg'>
						Designed to Simplify Your Experience and Maximize the
						Benefits of CloudPeak's Innovative Features
					</p>
				</div>

				{/* Table */}
				<div className='grid grid-cols-4 max-w-5xl mx-auto '>
					{/* LEFT FEATURE COLUMN */}
					<div className='text-left pr-8 relative top-16 '>
						<h3 className='text-2xl text-white font-medium mb-10'>
							Main features
						</h3>

						<div className='space-y-10  text-gray-300'>
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
							<div className='text-4xl font-bold  text-white mt-4'>
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

						<button className='mt-8 bg-gray-700 hover:bg-blue-500 px-6 py-3 rounded-xl'>
							Get Started
						</button>
					</div>

					{/* PREMIUM (Highlighted) */}
					<div className='text-center space-y-8 relative bg-[rgb(5,7,26)] rounded-3xl py-6 -top-3.5 shadow-[0_0_10px_rgba(59,130,246,0.25)]'>
						<div>
							<h4 className='text-lg text-gray-400 font-semibold'>
								Premium
							</h4>
							<p className='text-gray-400 text-sm'>
								For small company
							</p>
							<div className='text-4xl text-white font-bold mt-4'>
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

						<button className='mt-8 bg-gradient-to-r bg-gray-700 hover:bg-blue-500 px-6 py-3 rounded-xl'>
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
							<div className='text-4xl text-white font-bold mt-4'>
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

						<button className='mt-8 bg-gray-700 hover:bg-blue-500 px-6 py-3 rounded-xl'>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
