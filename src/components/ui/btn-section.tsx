interface iBtnSectionProps {
    text?: string;
    children?: React.ReactNode;
    isDarkMode?: boolean;
    textSize?: string;
    size?: "sm" | "md" | "lg";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    activeBg?:string;
}

const BtnSection = ({onClick, text, children, size = "sm",activeBg, isDarkMode}: iBtnSectionProps) => {
    const btnSize = {
        sm: "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base",
        md: "px-4 pye-2 text-base sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg",
        lg: "px-5 py-2.5 text-lg sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl",
    };
    return (
        <button
            onClick={onClick}
            className={`
                ${btnSize[size]}
                rounded-[10px]
                border-0
                ${activeBg}
                text-white
                tracking-wider
                transition-all duration-300 ease-in-out
                ${isDarkMode? 'shadow-gray-700' :'shadow-[0px_5px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[0px_7px_0px_0px_rgba(0,0,0,0.3)]'}
                active:opacity-80
                active:shadow-none
                active:translate-y-[5px]
                uppercase
                font-medium
                `}>
            {text ?? children ?? "click me"}
        </button>
    );
};

export default BtnSection;

