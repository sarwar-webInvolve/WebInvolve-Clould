// import bgImg from '../Images/bg-image.png';
export default function FeatureCard({
	title,
	description,
	stat,
	statLabel,
	variant = 'default',
	children,
}) {
	return (
		<div
			className={`
		  relative
		  rounded-4xl
		  p-6 md:p-10
		  bg-[#060B1F]
		  text-white
		  overflow-hidden
		  border
		  ${
				variant === 'highlight'
					? 'border-blue-400 border-dashed'
					: 'border-blue-500/30'
			}
			shadow-[inset_0_0_80px_rgba(59,130,246,0.25)] w-full
		`}>
			<div
				className='absolute inset-0 opacity-20 pointer-events-none '
				style={{
					background: `
			  linear-gradient(to bottom, rgba(59,130,246,0.2), transparent 40%),
			  repeating-linear-gradient(
				to right,
				rgba(255,255,255,0.05) 0px,
				rgba(255,255,255,0.05) 1px,
				transparent 1px,
				transparent 120px
			  )
			`,
				}}
			/>

			<div className='relative z-10 space-y-8 pb-12'>
				<div>
					<h3 className='text-xl md:text-3xl font-semibold mb-3'>{title}</h3>

					<p className='text-gray-400 leading-relaxed'>
						{description}
					</p>
				</div>
				<div className="bg-img bg-[url('C:\Users\43210\Desktop\FrontEnd-Trial(CloudPeak)\vite-project\src\Images\bg-image.png')] relative  opacity-95 p-4 md:p-6  rounded-2xl">
					<div className=' flex gap-3 flex-col opacity-75'>
						{stat && (
							<div className='mb-5'>
								<div className='text-4xl md:text-5xl font-semibold'>{stat}</div>

								<div className='text-gray-400 mt-2'>{statLabel}</div>
							</div>
						)}

						{variant === 'highlight' ? (
							<div className='border border-blue-400/40 rounded-2xl p-4 md:p-6 bg-[#0B1228]/60 backdrop-blur-lg'>
								{children}
							</div>
						) : (
							<div className='pt-4'>{children}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
