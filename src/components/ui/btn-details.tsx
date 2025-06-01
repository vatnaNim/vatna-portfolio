import { ArrowRight } from "../../assets/icons";

interface IBtnDetailsProps {
	name?: string;
	onClick?: () => void;
	isDarkMode?: boolean;
	activeColor?: string;
    activeShadow?: string;
    activeBorder?: string;
    activeBg?: string;
    activeHover?: string;
    activeGradient?: string;
}

const BtnDetails = ({ name = "hover me", onClick, isDarkMode = false, activeBg , activeBorder}: IBtnDetailsProps) => {
	return (
		<div 
			className="relative" 
			onClick={onClick}>
			<button
				className="group relative overflow-hidden px-3 py-4 sm:py-3 sm:px-4  md:px-5 rounded-full bg-transparent border-none cursor-pointer transition-all duration-300">
				<span
					className={`${activeBg} absolute left-0 top-0 h-[48px] w-[48px] rounded-full transition-all duration-300 group-hover:w-full -z-10`}
				/>
				<div 
					className="relative flex items-center justify-center gap-1 sm:gap-2">
					<span
						className={`${isDarkMode ? 'text-white group-hover:decoration-white decoration-white' : 'text-black decoration-black group-hover:decoration-black'} font-ubuntu text-sm sm:text-base md:text-lg font-semibold capitalize underline ${activeBorder} hover:decoration-white underline-offset-4`}>
						{name}
					</span>
					<ArrowRight
						className={`${isDarkMode? `text-white group-hover:text-white` : 'group-text-sky-500 hover:text-black'} text-base sm:text-lg md:text-xl fill-none transition-transform duration-300 transform group-hover:translate-x-1`}
					/>
				</div>
			</button>
		</div>
	);
};

export default BtnDetails;
