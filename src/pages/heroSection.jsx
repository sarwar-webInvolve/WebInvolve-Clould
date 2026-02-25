import heroImage from '../Images/Hero-Image.png';
import istImg from '../Images/ist-img.svg';
import secondImg from '../Images/second-img.svg';
import thirdImg from '../Images/3rd-img.svg';
import forthImg from '../Images/4th-img.svg';
import fifthImg from '../Images/5th-img.svg';
export default function HeroSection() {
	return (
		<>
			{/* Outer Container (75% screen height) */}
			<div className='relative w-full md:w-[80%] mt-10 md:mt-18 flex justify-center rounded-3xl overflow-hidden shadow-[0_0_300px_30px_rgba(59,130,246,0.5),inset_0_0_180px_rgba(59,130,246,0.45)]'>
				{/* Image */}
				<img
					src={heroImage}
					alt='HeroImage'
					className='w-full object-cover rounded-3xl'
				/>

				{/* Bottom Overlay */}
				<div className='absolute bottom-0 left-0 w-full bg-[rgb(5,7,26)] py-6 md:py-12 flex flex-col items-center gap-4 md:gap-10'>
					<span className='text-white text-sm md:text-base text-center px-4'>
						Trusted by Thousands of Companies Worldwide
					</span>

					<div className='flex flex-wrap justify-center gap-6 md:gap-18 px-4'>
						<img className='w-20 md:w-36' src={istImg} alt='ist-logo' />
						<img className='w-20 md:w-36' src={secondImg} alt='2nd-logo' />
						<img className='w-20 md:w-36' src={thirdImg} alt='3rd-logo' />
						<img className='w-20 md:w-36' src={forthImg} alt='4th-logo' />
						<img className='w-20 md:w-36' src={fifthImg} alt='5th-logo' />
					</div>
				</div>
			</div>
		</>
	);
}
