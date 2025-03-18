import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { BenefitTypes, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Benefit from './Benefit';

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

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section
			className='mx-auto min-h-full w-5/6 py-20'
			id='benefits'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
				<div className='md:my-5 md:w-3/5'>
					<HText text='MORE THAN JUST A GYM' />
					<p className='my-5 text-sm'>
						We provide world class fitness equipment, trainers and classes to get you to
						your ultimate fitness goals with ease. We provide true care into each and
						every member.
					</p>
				</div>
				<div className='md:flex items-center justify-between gap-8 mt-5'>
					{benefits.map((benefit: BenefitTypes) => (
						<Benefit
							key={benefit.title}
							title={benefit.title}
							icon={benefit.icon}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</div>
				<div></div>
			</motion.div>
		</section>
	);
};

export default Benefits;
