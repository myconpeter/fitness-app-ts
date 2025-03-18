type Props = {
	text: string;
};

const HText = ({ text }: Props) => {
	return <h1 className=' font-montserrat text-xl md:text-2xl font-bold'>{text}</h1>;
};

export default HText;
