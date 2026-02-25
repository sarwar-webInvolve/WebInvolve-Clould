import ReviewCard from './ReviewCards.jsx';
import p1 from '../Images/p1.avif';
import p2 from '../Images/p2.avif';
import p3 from '../Images/p3.avif';
import p4 from '../Images/p4.avif';
import p5 from '../Images/p5.avif';
import p6 from '../Images/p6.avif';
export default function Reviews() {
	return (
		<>
			{/* <div className='line w-full h-2 shadow-[0_0_20px_rgba(200,200,200,0.3)] '></div> */}
			<main className='main-section flex flex-col gap-14 items-center mt-16'>
				<div className='flex flex-col gap-8 items-center'>
					<h2 className='text-4xl md:text-6xl text-white font-semibold tracking-tight'>
						Trusted by 14,000+ users
					</h2>
					<div className='flex flex-col items-center'>
						<span className='px-2 font-semibold text-[rgb(108,115,141)]'>
							Sharing Their Successes and Transformative Experiences
							with WebInvolve Cloud's Powerful SaaS Solutions
						</span>
						<span className='px-2 font-semibold  text-[rgb(108,115,141)]'>
							Powerful SaaS Solutions
						</span>
					</div>
				</div>
				<section className='review-cards flex flex-wrap gap-6 my-8 justify-center px-6'>
					<ReviewCard
						name='Sarah Taranian'
						role='Creative Director'
						review='“WebInvolve Cloud has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”'
						rating={5}
						image={p1}
					/>
					<ReviewCard
						name='Michael Chen'
						role='Product Manager'
						review='“I cannot say enough good things about WebInvolve Cloud. Their support team is incredibly responsive. They have helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.”'
						rating={5}
						image={p2}
					/>
					<ReviewCard
						name='Michael Chen'
						role='Product Manager'
						review='“I cannot say enough good things about WebInvolve Cloud. Their support team is incredibly responsive. They have helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.”'
						rating={5}
						image={p3}
					/>
					<ReviewCard
						name='Michael Chen'
						role='Product Manager'
						review='“I cannot say enough good things about WebInvolve Cloud. Their support team is incredibly responsive. They have helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.”'
						rating={5}
						image={p4}
					/>
					<ReviewCard
						name='Michael Chen'
						role='Product Manager'
						review='“I cannot say enough good things about WebInvolve Cloud. Their support team is incredibly responsive. They have helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.”'
						rating={5}
						image={p5}
					/>
					<ReviewCard
						name='Michael Chen'
						role='Product Manager'
						review='“I cannot say enough good things about WebInvolve Cloud. Their support team is incredibly responsive. They have helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.”'
						rating={5}
						image={p6}
					/>
				</section>
			</main>
		</>
	);
}
