import React from 'react';

export default function ReviewCard({
	name,
	role,
	review,
	rating = 5,
	image,
}) {
	return (
		<div className='bg-[rgb(5,7,26)] shadow-[inset_0_0_60px_rgba(59,130,246,0.25)] border border-blue-900/40 rounded-3xl p-8 md:p-12 w-full sm:max-w-sm md:max-w-md text-white'>
			{/* Review Text */}
			<p className='text-gray-300 leading-relaxed text-base md:text-lg'>
				{review}
			</p>

			{/* User Info */}
			<div className='flex items-center gap-4 mt-8'>
				<div className='w-12 h-12 rounded-full overflow-hidden border border-blue-800/40'>
					<img
						src={image}
						alt={name}
						className='w-full h-full object-cover'
					/>
				</div>

				<div>
					<h4 className='font-semibold text-lg'>{name}</h4>
					<p className='text-gray-400 text-sm'>{role}</p>
				</div>
			</div>
		</div>
	);
}
