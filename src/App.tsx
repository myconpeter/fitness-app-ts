import Navbar from './scenes/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '../src/shared/types';
import Home from './scenes/home';
import Benefits from './scenes/benefits';
import OurClasses from './scenes/ourClasses';
import ContactUs from './scenes/contact';
import Footer from './scenes/footer';

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.screenY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}

			if (window.scrollY !== 0) {
				setIsTopOfPage(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>

			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
			<Footer />
		</>
	);
}

export default App;
