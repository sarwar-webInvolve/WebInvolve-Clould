import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: 'What is WebInvolve Cloud?',
			answer:
				'WebInvolve Cloud is a modern SaaS platform designed to streamline workflows and maximize productivity.',
		},
		{
			question: 'What services does WebInvolve Cloud offer?',
			answer:
				'Cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity.',
		},
		{
			question: 'What are the core features of WebInvolve Cloud?',
			answer:
				'A down payment is the initial payment made by the homebuyer toward the purchase price of the property. The amount required for a down payment can vary depending on factors such as the type of mortgage and the lender',
		},
		{
			question: 'What are the core features of WebInvolve Cloud?',
			answer:
				" The amount required for a down payment can vary depending on factors such as the type of mortgage and the lender's requirement",
		},
		{
			question: 'What are the core features of WebInvolve Cloud?',
			answer:
				"A down payment is the initial payment made by the homebuyer toward the purchase price of the property. The amount required for a down payment can vary depending on factors such as the type of mortgage and the lender's requirements.",
		},
	];

	return (
		<section className='w-full bg-[rgb(5,7,26)]  text-white py-24 px-12'>
			<div className='max-w-7xl mx-auto grid lg:grid-cols-3 gap-16'>
				{/* LEFT SIDE (1/3) */}
				<div>
					<h2 className='text-5xl md:text-6xl font-semibold leading-tight'>
						Common <br /> Questions
					</h2>

					<p className='text-gray-400 mt-8 text-lg leading-relaxed'>
						Haven’t found what you’re looking for?
					</p>

					<button className='text-blue-400 mt-4 text-lg font-medium'>
						Contact us
					</button>
				</div>

				{/* RIGHT SIDE (2/3) */}
				<div className='col-span-2'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className='border-b border-blue-900/40 py-8'>
							<button
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
								className='w-full flex justify-between items-center text-left'>
								<span className='text-2xl '>{faq.question}</span>

								{openIndex === index ? (
									<Minus size={28} />
								) : (
									<Plus size={28} />
								)}
							</button>

							{openIndex === index && (
								<p className='text-gray-400 mt-6 leading-relaxed text-lg'>
									{faq.answer}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
