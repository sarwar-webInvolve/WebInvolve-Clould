import heroImage from '../Images/Hero-Image.png';
import istImg from '../Images/ist-img.svg';
import secondImg from '../Images/second-img.svg';
import thirdImg from '../Images/3rd-img.svg';
import forthImg from '../Images/4th-img.svg';
import fifthImg from '../Images/5th-img.svg';
import discriptLogo from '../Images/descript-logo.svg';
import FeatureCard from './featureCard.jsx';
import leftImg from '../Images/left-img.svg';
import middleImg from '../Images/middle-img.svg';
import rightImg from '../Images/right-img.svg';
import HeroSection from './heroSection.jsx';
export default function Features() {
	return (
		<div className='p-4 flex-col text-white mt-8 gap-3 flex justify-center items-center'>
			<button className='feature-btn h-6 px-6 w-fit rounded-2xl texts cursor-pointer flex items-center hover:scale-105 text-xs md:text-sm'>
				New Version available, Download Now!
			</button>
			<div className='main-text p-2.5 flex flex-col items-center font-semibold text-white leading-tight justify-around text-3xl md:text-5xl lg:text-7xl text-center'>
				<div>Elevate Your Business</div>
				<div>with WebInvolve Cloud</div>
			</div>
			<div className='secondary-text flex flex-col items-center text-[rgb(49,54,76)] text-base md:text-xl lg:text-2xl font-normal text-center px-4'>
				<div>
					Empowering Your Success With Cutting-Edge SaaS Technology
				</div>
				<div>Build For Scalability, Efficiency And Growth </div>
			</div>
			<button className='secondary-btn rounded-2xl mt-5 py-3 px-6 w-fit bg-blue-500 texts cursor-pointer flex items-center hover:scale-105'>
				Get Started For Free
			</button>
			<HeroSection />

			<div className='description mt-2 w-full'>
				<section className='relative bg-[#05071A] py-16 md:py-24 px-6 md:px-10 overflow-hidden'>
					<div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start'>
						<div className='w-full lg:w-1/3 space-y-6'>
							<h2 className='text-3xl md:text-5xl font-semibold text-white leading-tight'>
								We Help <br />
								Transforms Your <br />
								Business
							</h2>

							<p className='text-gray-400 text-lg leading-relaxed'>
								Our mission is to empower individuals and
								organizations to unleash their creative potential.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-8 md:gap-12 w-full lg:w-2/3'>
							<div
								className='flex-1 rounded-3xl p-8 md:p-12 
        bg-[#0B1228]/80 
        border border-white/5 
        shadow-[0_0_70px_rgba(59,130,246,0.15)]
        backdrop-blur-xl
        flex flex-col items-center text-center'>
								<div className='w-20 h-20 rounded-full bg-[#1A2342] mb-8 flex items-center justify-center'>
									<img src={discriptLogo} alt='' />
								</div>

								<h3 className='text-2xl md:text-3xl font-medium text-white mb-6'>
									Streamlined Workflow
								</h3>

								<p className='text-gray-400 leading-relaxed'>
									Effortlessly Collaborate Across Teams and Projects
									with WebInvolve Cloud's Seamless and Intuitive
									Collaboration Tools
								</p>
							</div>

							<div
								className='flex-1 rounded-3xl p-8 md:p-12 
        bg-[#0B1228]/80 
        border border-white/5 
        shadow-[0_0_70px_rgba(59,130,246,0.15)]
        backdrop-blur-xl
        flex flex-col items-center text-center'>
								<div className='w-20 h-20 rounded-full bg-[#1A2342] mb-8 flex items-center justify-center'>
									<img src={discriptLogo} alt='' />
								</div>

								<h3 className='text-2xl md:text-3xl font-medium text-white mb-6'>
									Robust Data Security
								</h3>

								<p className='text-gray-400 leading-relaxed'>
									Protect Your Sensitive Information with Cutting-Edge
									Encryption and Security Measures solutions
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className='connection-section flex flex-col p-6 md:p-12 gap-8 justify-center items-center w-full'>
				<h3 className='font-semibold text-white leading-7 text-3xl md:text-5xl text-center'>
					Get Connected Fast
				</h3>
				<span className='whitespace-normal flex flex-col items-center text-[rgb(98,105,138)] text-center px-4'>
					<p className=''>
						Explore Our Inspirational Journey, Values, and Commitment
						to Providing Exceptional
					</p>
					<p>SaaS Solutions That Empower Your Business</p>
				</span>

				<div className='cards flex flex-col lg:flex-row w-full justify-between gap-8 p-4 md:p-16'>
					<FeatureCard
						title='Seamless Integration'
						description="WebInvolve Cloud's Flexible Integration Options for Enhanced Efficiency."
						stat='200%'
						statLabel='Faster Integration'>
						<div className='relative flex items-center gap-10 md:gap-28 py-8'>
							<div className='absolute top-1/2 left-0 w-full h-0.75 bg-slate-500 -translate-y-1/2'></div>

							<div className='bg-blue-500 p-4 md:p-6 rounded-2xl z-10 flex items-center justify-center'>
								<img src={leftImg} className='w-10 h-10 md:w-16 md:h-16 object-contain' />
							</div>

							<div className='bg-white p-4 md:p-6 rounded-2xl z-10 flex items-center justify-center'>
								<img
									src={middleImg}
									className='w-10 h-10 md:w-16 md:h-16 object-contain'
								/>
							</div>

							<div className='bg-white p-4 md:p-6 rounded-2xl z-10 flex items-center justify-center'>
								<img
									src={rightImg}
									className='w-10 h-10 md:w-16 md:h-16 object-contain'
								/>
							</div>
						</div>
						<div className='pt-6 text-lg md:text-2xl'>
							Our mission is to empower individuals and organizations
							to unleash their.
						</div>
					</FeatureCard>

					<FeatureCard
						title='Scalable Infrastructure'
						description="WebInvolve Cloud's Scalable Infrastructure Can Handle Your Increasing Demands and Workloads."
						stat='120k+'
						statLabel='Happy customers worldwide'
						variant='highlight'>
						<div className='space-y-4'>
							<div className='bg-[#111A33] p-4 rounded-xl'>
								<div className='font-semibold'>
									Scalable User Experiences
								</div>
								<div className='text-gray-400 text-sm'>
									Unique Needs and Preferences
								</div>
							</div>

							<div className='bg-[#111A33] p-4 rounded-xl'>
								<div className='font-semibold'>
									24/7 Customer Support
								</div>
								<div className='text-gray-400 text-sm'>
									Dedicated Support Ready to Assist
								</div>
							</div>
						</div>
					</FeatureCard>
				</div>
			</div>
		</div>
	);
}
