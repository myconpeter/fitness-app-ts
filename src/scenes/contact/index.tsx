import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png';
import HText from '../../shared/HText';
import React from 'react';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	const inputStyles = `mb-5 w-full rounded-lg bg-primary-500 px-5 py-3 placeholder-white`;
	return (
		<section
			id='contactus'
			className=' mx-auto w-5/6 pt-24 pb-32'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
				<motion.div
					className='md:w-3/5'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}>
					<HText text='JOIN NOW TO GET IN SHAPE' />
					<p className='my-5'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, numquam illum.
						Magnam corporis non earum, vitae suscipit harum totam ipsam, tenetur quaerat
						voluptate doloremque reprehenderit soluta? Dolorem sequi unde magni?
					</p>
				</motion.div>

				{/* form and image */}

				<div className='mt-10 justify-between gap-8 md:flex'>
					<motion.div
						className='mt-10 basis-3/5 md:mt-0'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}>
						<form
							target='_blank'
							onSubmit={onsubmit}
							action='https://formsubmit.co/98c024818eab221ad578b68938aaa828 '
							method='POST'>
							<input
								type='text'
								className={`${inputStyles}`}
								placeholder='NAME'
								{...register('name', { required: true, maxLength: 100 })}
							/>
							{errors.name && (
								<p className='mt-1 text-primary-500'>
									{' '}
									{errors.name.type === 'required' && 'This field is required '}
									{errors.name.type === 'maxLength' &&
										'Max Length is a hundred character '}
								</p>
							)}
							<input
								type='email'
								className={`${inputStyles}`}
								placeholder='EMAIL'
								{...register('email', {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className='mt-1 text-primary-500'>
									{' '}
									{errors.email.type === 'required' && 'This field is required '}
									{errors.email.type === 'pattern' && 'Invalid Email Address '}
								</p>
							)}

							<textarea
								rows={4}
								cols={50}
								className={`${inputStyles}`}
								placeholder='MESSAGE'
								{...register('message', { required: true, maxLength: 2000 })}
							/>
							{errors.message && (
								<p className='mt-1 text-primary-500'>
									{' '}
									{errors.message.type === 'required' &&
										'This field is required '}
									{errors.message.type === 'maxLength' &&
										'Max Length is a hundred character '}
								</p>
							)}

							<button
								type='submit'
								className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover: text-white'>
								{'SUBMIT'}
							</button>
						</form>
					</motion.div>
					<div>
						<img
							src={ContactUsPageGraphic}
							alt='ContactUsPageGraphic'
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactUs;
