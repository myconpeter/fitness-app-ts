import { SelectedPage, ClassType } from '../../shared/types';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Class from './Class';

const classes: ClassType[] = [
	{
		name: 'Weight Training Course',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio asperiores modi itaque, quam fugiat recusandae molestias eius architecto? Iusto blanditiis tempora autem nisi reprehenderit beatae ipsam magni ipsa cupiditate!',
		image: image1,
	},
	{
		name: 'Weight Training Course',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio asperiores modi itaque, quam fugiat recusandae molestias eius architecto? Iusto blanditiis tempora autem nisi reprehenderit beatae ipsam magni ipsa cupiditate!',
		image: image2,
	},
	{
		name: 'Weight Training Course',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio asperiores modi itaque, quam fugiat recusandae molestias eius architecto? Iusto blanditiis tempora autem nisi reprehenderit beatae ipsam magni ipsa cupiditate!',
		image: image3,
	},
	{
		name: 'Weight Training Course',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio asperiores modi itaque, quam fugiat recusandae molestias eius architecto? Iusto blanditiis tempora autem nisi reprehenderit beatae ipsam magni ipsa cupiditate!',
		image: image4,
	},
	{
		name: 'Weight Training Course',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio asperiores modi itaque, quam fugiat recusandae molestias eius architecto? Iusto blanditiis tempora autem nisi reprehenderit beatae ipsam magni ipsa cupiditate!',
		image: image5,
	},
	{
		name: 'Weight Training Course',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio asperiores modi itaque, quam fugiat recusandae molestias eius architecto? Iusto blanditiis tempora autem nisi reprehenderit beatae ipsam magni ipsa cupiditate!',
		image: image6,
	},
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
	return (
		<section
			id='ourclasses'
			className='w-full py-40 bg-primary-100 '>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
					className='mx-auto w-5/6'>
					<div className='md:w-3/5'>
						<HText text='Our Classes' />
						<p className='py-5 '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
							molestiae dolorem tempora laborum? Aut, accusamus illo impedit vel nisi
							molestiae eveniet numquam alias excepturi repudiandae maxime fugit
							asperiores veritatis repellendus.
						</p>
					</div>
				</motion.div>
				<div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
					<ul className='w-[2800px] whitespace-nowrap'>
						{classes.map((item: ClassType, index) => (
							<Class
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default OurClasses;
