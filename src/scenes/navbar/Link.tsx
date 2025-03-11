import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	page: string;
	selectedPage: string;
	setSelectedPage: (value: string) => void;
};

const lowerCasePage = page.toLowerCase().repalace(/ /g, '');

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'text-primary-500' : ''
			} transition duration-500 hover:text-primary-300`}
			onClick={()=>setSelectedPage(lowerCasePage)}
			href={`#${lowerCasePage}`}></AnchorLink>
	);
};

export default Link;
