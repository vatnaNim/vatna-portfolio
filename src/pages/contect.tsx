import { 
    TextField,
    Tooltip 
} from "@mui/material";
import { 
    BtnSubmit 
} from "../components/ui";
import { 
    FaceBook, 
    GitHub, 
    LinkIn, 
    Portfofio
} from "../assets/images";
import { 
    NavLink 
} from "react-router-dom";
import { 
    useRef,
    useState 
} from "react";
import { 
    AniDone,
    Unsuccessful,
} from "../assets/icons";
import { 
    Helmet 
} from "react-helmet-async";
import emailjs from "@emailjs/browser";
import GmailIcon from "../assets/icons/gmail-icon";
import ResetIcon from "../assets/icons/reset-icon";
/* 
Start:Declare interface
*/
interface iContectProps {
    isDarkMode: boolean;
    activeColor?: string;
    activeShadow?: string;
    activeBorder?: string;
    activeBg?: string;
    activeHover?: string;
    activeGradient?: string;
}
/* 
End:Declare interface
*/

const Contect = ({isDarkMode,activeBg, activeColor, activeHover, activeBorder, activeShadow, activeGradient}: iContectProps) => {
    /* 
    Start:Delare hook
    */
    const [isSubmitted, setIsSubmitted] = useState(false);
	const [isRotating, setIsRotating] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [loading, setLoading] = useState(false); 
    /* 
    End:Declare hook
    */
    /* 
    Start:Declare varrible
    */
    const formRef = useRef<HTMLFormElement>(null);
    /* 
    End:Declare varrible
    */
    /* 
    Start:Declare function
    */
    const sendEmail = (e: React.FormEvent): void => {
            e.preventDefault();

            if (formRef.current) {
                setLoading(true); 
                emailjs.sendForm(
                    "service_03h6aln",
                    "template_g7ogjbn",
                    formRef.current,
                    "5ZSDGpWGncpXxY3dY"
                )
                .then(() => {
                    setIsRotating(true); 
                    setTimeout(() => {
                        setIsSubmitted(true); 
                        setIsRotating(false); 
                        formRef.current?.reset();
                        setLoading(false); 
                    }, 400);
                })
                .catch((error) => {
                    setIsRotating(true);
                    setTimeout(() => {
                        setIsRotating(false);
                        setIsFailed(true);
                        setLoading(false); 
                    }, 300);
                    console.error(error);
                });
            }
        };
    /* 
    End:Declare function
    */
    /* 
    Start:Declare data value
    */
    const socalMedia = [
			{
				id:1,
				socal_name: "Facebook",
				socal_icon: FaceBook,
				socal_link: "https://web.facebook.com/vatna.nim/",
        		socal_class: " hover:bg-[#0E4A92]",
			},
			{
				id:2,
				socal_name: "LinkedIn",
				socal_icon: LinkIn,
				socal_link: "https://www.linkedin.com/in/vatna-nim-6a2a74359/",
        		socal_class: "hover:bg-[#0E4A92] #0077B5",
			},
			{
				id:3,
				socal_name: "GitHub",
				socal_icon: GitHub,
				socal_link: "https://github.com/vatnaNim",
            	socal_class:  `${isDarkMode ? "bg-white" : "bg-white"}`,
			},
		]
    /* 
    End:Declare data value
    */
    return (
        <>
             <Helmet>
				<title>VATNA - Front-end Developer</title>
				<meta name="description" content="Personal portfolio of VATNA" />
				<meta property="og:title" content="VATNA - Front-end Developer" />
				<meta property="og:description" content="Personal portfolio of VATNA" />
				<meta property="og:image" content={Portfofio} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yourdomain.com/contect" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="VATNA - Front-end Developer" />
				<meta name="twitter:description" content="Personal portfolio of VATNA" />
				<meta name="twitter:image" content={Portfofio} />
			</Helmet>

            <div 
                className="min-h-screen w-full px-6 md:px-12 relative pb-14 md:pb-0">
                <div 
                    className="w-full md:w-[50%] flex items-center gap-x-4 md:gap-x-6 mb-2 animate__fadeIn"
                    style={{ animationDuration: '1s' }}>
                    <span
                        className={`${activeColor} text-lg-clamp font-bold uppercase`}>
                        contect
                    </span>
                    <span className={`${activeBorder} border flex-1`}/>
                </div>
                <div 
                    className="flex md:flex-row flex-col gap-x-6 gap-y-3">
                    <div 
                        className="flex flex-col flex-1 gap-y-4 justify-center pb-2 p-0 sm:p-2 lg:p-4 animate__lightSpeedInLeft"
                        style={{ animationDuration: '1s' }}>
                        <p
                            className={`text-sm-clamp sm:text-md-clamp ${isDarkMode? 'text-gray-300' : 'text-gray-500'}`}>
                            I'm a passionate frontend developer focused on crafting clean, interactive, and performance-driven web interfaces using Nuxt, TypeScript, and Tailwind CSS. From personal websites to complex UI systems, I bring ideas to life with precision and creativity. Let’s collaborate — drop a message or connect with me through social platforms!
                        </p>
                        <div 
                            className="flex gap-x-2">
                            {
                                socalMedia.map((socal, index) => (
                                <Tooltip
                                    key={`${socal.socal_name}-${index}`}
                                    title={socal.socal_name}
                                    placement="top"
                                    slotProps={{
                                    popper: {
                                        modifiers: [
                                        {
                                            name: "offset",
                                            options: {
                                            offset: [0, -10],
                                            },
                                        },
                                        ],
                                    },
                                    }}
                                    arrow>
                                    <div 
                                        className={`${socal.socal_class} ring-1 ${activeBorder} w-6 h-6 sm:w-7 sm:h-7 rounded-full  transition duration-300 transform overflow-hidden hover:scale-110 shadow-lg flex items-center justify-center cursor-pointer `}>
                                        <NavLink 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            to={socal.socal_link}
                                            aria-label="Facebook" className="flex items-center justify-center w-full h-full">
                                            <img 
                                                src={socal.socal_icon} 
                                                alt="socal icon" 
                                                className="w-full h-full object-fill" 
                                            />
                                        </NavLink>
                                    </div>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                    <div 
                        className={`
                            flex-1 w-full p-3 sm:p-4 rounded-md shadow-md  items-center justify-center animate__lightSpeedInRight ${activeShadow}
                            ${isDarkMode ? "bg-gray-800" : `bg-gray-200`}
                            transform transition-transform duration-700
                            ${isRotating ? "rotate-y-180" : ""}
                        `}
                        style={{ animationDuration: '1s' }}>
                        <div 
                            className="flex items-center gap-3 mb-6">
                            <GmailIcon className="text-2xl sm:text-3xl text-red-600" />
                            <h2 
                                className={`text-lg-clamp  font-medium ${activeColor}`}>
                                Send Email
                            </h2>
                        </div>
                        {!isSubmitted && !isFailed ? (
                            <form 
                                action='post'
                                ref={formRef} 
                                onSubmit={sendEmail}
                                className="space-y-3 ">
                                <TextField
                                    fullWidth
                                    required
                                    type="text"
                                    name="name"
                                    label="Name"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Please enter your full name"
                                    InputLabelProps={{
                                        sx: {
                                            marginInline: 0,
                                        color: isDarkMode? 'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))',
                                        '&.Mui-focused': {
                                            color: isDarkMode? 'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))',
                                        },
                                        },
                                    }}
                                    sx={{
                                        backgroundColor: isDarkMode?  ' rgb(17 24 39 / var(--tw-text-opacity, 1))':'#f0f0f0',
                                        borderRadius: 1,
                                        marginInline: 0,
                                        '& .MuiInputBase-input': {
                                        paddingInline: '2',
                                        lineHeight: '40px', 
                                        color: isDarkMode ?  'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))' 
                                    },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    type="email"
                                    name="email"
                                    label="Email"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Please enter your Email"
                                    InputLabelProps={{
                                        sx: {
                                        color: isDarkMode? 'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))',
                                        '&.Mui-focused': {
                                            color: isDarkMode? 'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))',
                                        },
                                        },
                                    }}
                                    sx={{
                                        backgroundColor: isDarkMode?  ' rgb(17 24 39 / var(--tw-text-opacity, 1))':'#f0f0f0',
                                        borderRadius: 1,
                                        marginInline: 0,
                                        '& .MuiInputBase-input': {
                                        paddingInline: '2',
                                        lineHeight: '40px', 
                                        color: isDarkMode ?  'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))' 
                                    },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    rows={3}
                                    required
                                    type="text"
                                    name="message"
                                    label="Message"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Please enter your message"
                                    multiline
                                    InputLabelProps={{
                                        sx: {
                                            color: isDarkMode? 'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))',
                                            '&.Mui-focused': {
                                                color: isDarkMode? 'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))',
                                            },
                                        },
                                    }}
                                    sx={{
                                        backgroundColor: isDarkMode?  ' rgb(17 24 39 / var(--tw-text-opacity, 1))':'#f0f0f0',
                                        borderRadius: 1,
                                        marginInline: 0,
                                        '& .MuiInputBase-input': {
                                        paddingInline: '2',
                                        color: isDarkMode ?  'rgb(229 231 235 / var(--tw-text-opacity, 1))' : 'rgb(17 24 39 / var(--tw-text-opacity, 1))' 
                                    },
                                    }}
                                />
                                <BtnSubmit 
                                    isDarkMode={isDarkMode}
                                    text="Submit"
                                    activeGradient={activeGradient}
                                    activeBg={activeBg}
                                    activeHover={activeHover}
                                    loading={loading}
                                />
                            </form>
                        ): isSubmitted ? (
                            <div 
                                className={`flex flex-col justify-center items-center py-6 animate__pulse`}
                                style={{ animationDuration: '1s' }}>
                                <AniDone className="w-20 h-20 md:w-28 md:h-28 text-green-600" />
                                <div 
                                    className="text-center space-y-1 sm:space-y-2">
                                    <h3 
                                        className="text-lg-clamp text-green-600">
                                            Message is Successfully!
                                        </h3>
                                    <p 
                                        className="text-sm-clamp text-gray-500 dark:text-gray-400 max-w-sm">
                                        Thank you for reaching out. I’ve received your message and will get back to you shortly.
                                    </p>
                                    <div 
                                        className="flex justify-center">
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setIsFailed(false);
                                                formRef.current?.reset();
                                            }}
                                            type="reset"
                                            className="mt-3 px-2 sm:px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-base-clamp flex items-center justify-center gap-x-2">
                                            <ResetIcon className="text-xl"/>
                                            <span>
                                                Resend
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div 
                                className={`flex flex-col justify-center items-center py-6 animate__headShake`}
                                style={{ animationDuration: '1s' }}>
                                <Unsuccessful className="w-20 h-20 md:w-28 md:h-28 text-red-600" />
                                <div 
                                    className="text-center space-y-1 sm:space-y-2">
                                    <h3 
                                        className="text-lg-clamp text-red-600">
                                        Message Failed!
                                    </h3>
                                    <p 
                                        className="text-xs-clamp text-gray-500 dark:text-gray-400 max-w-sm">
                                        Something went wrong while sending your message. Please try again later or use a different contact method.
                                    </p>
                                    <div 
                                        className="flex justify-center">
                                        <button
                                            type="reset"
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setIsFailed(false);
                                                formRef.current?.reset();
                                            }}
                                            className="mt-3 px-2 sm:px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-base-clamp flex items-center justify-center gap-x-2">
                                            <ResetIcon className="text-xl"/>
                                            <span>
                                                Send Again
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div 
                    className="absolute bottom-0 right-0 px-4 py-2 text-xs text-gray-400">
                    <h1 
                        className="font-medium tracking-wide">
                        © {new Date().getFullYear()} Created by <span className={`${activeColor} font-semibold`}>Vatna</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Contect;