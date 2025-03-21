import { SelectedPage } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';
import HomePageText from '../../assets/HomePageText.png';
import HomePageGraphic from '../../assets/HomePageGraphic.png';
import SponsorRedBull from '../../assets/SponsorRedBull.png';
import SponsorForbes from '../../assets/SponsorForbes.png';
import SponsorFortune from '../../assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import EvolveText from '../../assets/EvolveText.png';
import { motion } from 'framer-motion';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

	return (
		<section
			id='home'
			className='gap-16 bg-gray-20 pb-20 py-10 md:h-full md:pb-0'>
			{/* image and main header */}
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
				className='md:flex mx-auto w-5/6 item-center justify-center md:h-5/6'>
				<div className='z-10 mt-32 md:basis-3/5'>
					<motion.div
						className='md:mt-20'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity: 0, y: -50 },
							visible: { opacity: 1, y: 0 },
						}}>
						<div className='relative'>
							<div>
								<img
									className='absolute hidden md:block -top-12 -left-5  z-[-1]'
									src={EvolveText}
									alt='EvolveText'
								/>
								<img
									src={HomePageText}
									alt='HomePageText'
								/>
							</div>
						</div>
						<p className='mt-8 text-sm md:text-start'>
							Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
							Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
							Now.
						</p>
					</motion.div>
					<motion.div
						className='my-10 flex items-center gap-8 md:justify-start'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}>
						<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
						<AnchorLink
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							onClick={() => setSelectedPage(SelectedPage.ContactUs)}
							href={`#${SelectedPage.ContactUs}`}>
							<p>Learn More</p>
						</AnchorLink>
					</motion.div>
				</div>

				<div className='flex  basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
					<img
						src={HomePageGraphic}
						alt='HomePageGraphic'
					/>
				</div>
			</motion.div>

			{isAboveMediumScreen && (
				<div className='h-[150px] w-full bg-primary-100 py-10 mt-8'>
					<div className='mx-auto w-5/6 '>
						<div className='flex w-3/5 items-center justify-between '>
							<img
								src={SponsorRedBull}
								alt='SponsorRedBull'
							/>
							<img
								src={SponsorForbes}
								alt='SponsorForbes'
							/>
							<img
								src={SponsorFortune}
								alt='SponsorFortune'
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
