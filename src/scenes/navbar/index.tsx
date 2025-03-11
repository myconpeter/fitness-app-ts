import { useState } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';

type Props = {};

const Navbar = (props: Props) => {
	const flexBetween = 'flex items-center justify-between';
	return (
		<nav className={`${flexBetween} fixed top-0 z-30 w-full p-6`}>
			<div className={`${flexBetween} mx-auto w-5/6`}>
				<div className={`${flexBetween} w-full gap-16`}>
					{/* left side */}
					<img
						src={Logo}
						alt='logo'
					/>

					{/* right side */}
					<div className={`${flexBetween} w-full`}>
						<div className={`${flexBetween} gap-8 text-sm`}>
							<p>Home</p>
							<p>Benefits</p>
							<p>Our Classes</p>
							<p>Contact Us</p>
						</div>
						<div className={`${flexBetween} gap-8 `}>
							<p>Sign In</p>
							<button>Become a Member</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
