import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { BenefitTypes, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Benefit from './Benefit';
import AbstracWave from '../../assets/AbstractWaves.png';
import Sparkles from '../../assets/Sparkles.png';
import ActionButton from '../../shared/ActionButton';
import BenefitPageGraphic from '../../assets/BenefitsPageGraphic.png';

const benefits: BenefitTypes[] = [
	{
		icon: <HomeModernIcon className='h-6 w-6' />,
		title: 'State of the Facilities',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est amet eum quo nisi, saepe libero! Ad, optio, quibusdam, minus itaque perspiciatis consequatur repellat deserunt deleniti non libero doloribus excepturi',
	},
	{
		icon: <UserGroupIcon className='h-6 w-6' />,
		title: "100's of Diverse Classes",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est amet eum quo nisi, saepe libero! Ad, optio, quibusdam, minus itaque perspiciatis consequatur repellat deserunt deleniti non libero doloribus excepturi',
	},
	{
		icon: <AcademicCapIcon className='h-6 w-6' />,
		title: 'Expert and Pro Trainers',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est amet eum quo nisi, saepe libero! Ad, optio, quibusdam, minus itaque perspiciatis consequatur repellat deserunt deleniti non libero doloribus excepturi',
	},
];

const container = {
	hidden: {},
	visible: {},
	transition: { staggerChildren: 1 },
};

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section
			className='mx-auto min-h-full w-5/6 py-20'
			id='benefits'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className='md:my-5 md:w-3/5'>
					<HText text='MORE THAN JUST A GYM' />
					<p className='my-5 text-sm'>
						We provide world class fitness equipment, trainers and classes to get you to
						your ultimate fitness goals with ease. We provide true care into each and
						every member.
					</p>
				</motion.div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
					className='md:flex items-center justify-between gap-8 mt-5'>
					{benefits.map((benefit: BenefitTypes) => (
						<Benefit
							key={benefit.title}
							title={benefit.title}
							icon={benefit.icon}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
				{/* Graphic and description */}
				<div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
					<img
						src={BenefitPageGraphic}
						alt='Abstract Wave'
					/>
					<div>
						<div className='relative'>
							<img
								src={AbstracWave}
								alt='Abstract Wave'
								className='-top-20 -let-20 z-[1] '
							/>
							<motion.div
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.2, duration: 1 }}
								variants={{
									hidden: { opacity: 0, x: 50 },
									visible: { opacity: 1, x: 0 },
								}}
								className='flex'>
								<HText text='MILLIONS OF HAPPY MEMBERS GETTING FIT' />
							</motion.div>
						</div>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 1 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 },
							}}>
							<p className='my-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								tempore magnam eaque est laboriosam accusamus mollitia dignissimos
								ad ut, repellat, provident saepe corporis sapiente impedit cumque!
								Officia magni accusantium vitae!
							</p>
							<p className='mb-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								cupiditate ea alias totam perspiciatis sed repellat consequuntur
								eius minima quaerat, et quo incidunt reiciendis nobis optio laborum?
								Ad, dolor nisi.
							</p>
						</motion.div>

						<div className='relative mt-16'>
							<div>
								<img
									src={Sparkles}
									alt='Sparkles'
									className='absolute mt-5 right-40'
								/>

								<ActionButton setSelectedPage={setSelectedPage}>
									JOIN NOW
								</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Benefits;
