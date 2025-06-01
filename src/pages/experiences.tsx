import {
  GTech,
  Pedro,
  KiwiMart,
  Portfofio,
} from "../assets/images";
import { 
    useState 
} from "react";
import { 
    Close 
} from "../assets/icons";
import { 
    IconButton 
} from "@mui/material";
import { 
    Helmet 
} from "react-helmet-async";

/* 
Start:Delare interface
*/
interface iExp {
    isDarkMode: boolean;
    activeColor?: string;
    activeShadow?: string;
    activeBorder?: string;
    activeBg?: string;
    activeHover?: string;
}
/* 
End:Delare interface
*/
const Experiences = ({isDarkMode, activeColor, activeBorder, activeShadow, activeHover}: iExp) => {
    /* 
        Start:Delare hook 
    */
    const [openModalId, setOpenModalId] = useState<number | null>(null);
    /* 
        End:Delare hook 
    */

    /* 
        Start:Delare data value
    */
    const experiencesDb = [
        {
            id: 1,
            image: GTech,
            compenyName: "G-Tech Cambodia",
            position: "Front-End Web Developer",
            sd_ed: "July 2024 – March 2025",
            details: [
                "Completed 3 months internship and was promoted by the Senior Front-End Web Developer in recognition of strong performance and growth.",
                "Developed responsive user interfaces using HTML, CSS(Tailwind), JavaScript, TypeScript and Nuxt.js to ensure smooth performance across desktop, tablet and mobile device.",
                "Gained experience maintaining the company website, including updating the UI and integrating API data.",
                "Optimized website performance by implementing lazy loading, reducing asset sizes, and improving load times using tools like Vite and Webpack.",
                "Integrated front-end components with RESTful APIs, ensuring seamless communication between client and sever using JSON data formats.",
                "Tested and debugged API response, handle HTTP method (GET, POST, PUT, DELETE), and ensured smooth data flow to the front end.",
                "Used tools like Postman, Hoppscotch and browser developer tools to test back-end API endpoints and analyze request/response cycles for debugging and integration purposes. ",
                "Used Git for version control and collaborated with team members via GitHub to manage branches all pull requests efficiently.",
                "Documented codebase and components to help future developers understand project structure and usage.",
                "Leveraged Nuxt UI components to build dynamic user interfaces, ensuring consistent design and smooth functionality across different device."
            ],
        },
        {
            id: 2,
            image: Pedro,
            compenyName: "PEDRO, AEON Mall Phnom Penh",
            position: "Customer Service Exclusive and Visual Merchandiser Assistant",
            sd_ed: "Feb 2022 – Jul 2023",
            details: [
                {
                positionName: "Customer Service Exclusive",
                details_p: [
                    "Delivered exceptional service in a fast-paced, customer-focused retail environment.",
                    "Built strong rapport with clients through product knowledge and personalized assistance.",
                    "Handled transactions, inquiries, and complaints with efficiency and professionalism.",
                    "Consistently met sales and customer satisfaction targets.",
                    <>
                        <span className={`font-bold ${activeColor}`}>Cashier:</span> Provided fast, accurate, and friendly checkout service while handling various payment methods in a high-volume retail environment, and reported daily revenue and ensured accurate cash drawer reconciliation with attention to detail and accuracy.
                    </>,
                ],
                },
                {
                positionName: "Visual Merchandiser Assistant",
                details_p: [
                    "Promoted after 6 months in Customer Service by Supervisor and Visual Merchandising Manager for exceptional performance and creativity.",
                    "Assisted in planning and executing store displays in line with brand guidelines and seasonal or promotional campaigns.",
                    "Maintained store visuals to attract customers and boost product visibility.",
                    "Managed store props and generated monthly reports.",
                    "Collaborated with the merchandising team to implement visual strategies based on sales data, customer feedback, and market trends.",
                ],
                },
            ],
        },
        {
            id: 3,
            image: KiwiMart,
            compenyName: "Kiwi Mart",
            position: "Cashier",
            sd_ed: "Jun 2020 – Jan 2021",
            details: [
                "Used POS systems to handle payments (Cash, Card or Vouchers) and checked receipts correctly.",
                "Processed customer transaction quickly and accurately",
                "Maintained a clean and organized checkout area, ensuring safety and neatness.",
                "Helped train new staff members on the register and provided guidance on store procedures."
            ],
        },
    ];
    /* 
    End:Delare data value
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
				<meta property="og:url" content="https://yourdomain.com/experiences" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="VATNA - Front-end Developer" />
				<meta name="twitter:description" content="Personal portfolio of VATNA" />
				<meta name="twitter:image" content={Portfofio} />
			</Helmet>

        <div 
            className="px-4 sm:px-12 py-4 sm:py-6 w-full h-fit">
            <div 
                className={`w-full h-auto border ${activeBorder} rounded-xl shadow-sm ${activeShadow} px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4  flex flex-col items-center gap-y-3 sm:gap-y-4`}>
                <nav 
                    className="w-[95%] md:w-[70%] text-center space-y-1 animate__fadeInDown"
                    style={{ animationDuration: '1s' }}>
                    <h2 
                        className={`fs-3 font-semibold uppercase ${activeColor}`}>
                        experiences
                    </h2>
                    <p 
                        className={`${isDarkMode? 'text-gray-400' : 'text-gray-600'} text-wrap text-md-clamp text-justify sm:text-center leading-normal font-medium`}>
                        Known for being friendly, trustworthy, and ethical, with a proven ability to work well in teams and adhere strictly to workplace policies and regulations.
                    </p>
                </nav>
                <div 
                    className="w-full flex flex-wrap justify-center gap-x-3 lg:gap-x-4 md:gap-x-8 gap-y-2 sm:gap-y-3">
                    {
                        experiencesDb.map((exp) => (
                        <div
                            key={exp.id}
                            className={`group w-full sm:w-60 h-[130px] sm:h-[330px]  max-[506px]:h-auto border ${activeBorder} rounded-lg shadow-sm  overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer animate__zoomInDown flex flex-row sm:flex-col ${isDarkMode? `bg-gray-950 ${activeShadow}` : `bg-gray-100 ${activeShadow}`}`}
                            style={{ animationDuration: '0.5s' }}
                            onClick={() => setOpenModalId(exp.id)}>
                            <div 
                                className="w-[40%] sm:w-full h-full sm:h-[60%] bg-gray-100 overflow-hidden">
                                <img
                                    src={exp.image}
                                    alt={exp.compenyName}
                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div 
                                className="w-[60%] sm:w-full h-full sm:h-[40%] px-2 sm:px-4 py-3 sm:py-3 flex flex-col justify-between items-start">
                                <div>
                                    <h3 
                                        className={`text-md-clamp font-bold line-clamp-none sm:line-clamp-1 ${activeColor}`}>
                                        {exp.compenyName}
                                    </h3>
                                    <p 
                                        className={`text-xs-clamp sm:text-sm line-clamp-none sm:line-clamp-2 ${isDarkMode? 'text-gray-100' : 'text-gray-500'}`}>
                                        {exp.position}
                                    </p>
                                    <p 
                                        className={`text-xs-clamp  mt-1 ${isDarkMode? 'text-gray-100' : 'text-gray-500'}`}>
                                        {exp.sd_ed}
                                    </p>
                                    </div>
                                        <button 
                                            className={`text-sm-clamp font-semibold capitalize ${activeColor} tracking-wide group-hover:underline ${activeHover} transition-colors duration-200 underline-offset-2`}>
                                            information →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {
                        openModalId && (
                            <div 
                                className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                                <div 
                                    className={`${isDarkMode? 'bg-[#212121]' : 'bg-white'} sm:mx-0 mx-2 rounded-xl shadow-xl max-w-lg w-full  relative max-h-[90vh] overflow-y-auto  animate__zoomIn`}
                                    style={{ animationDuration: '0.5s' }}>
                                    {(() => {
                                        const exp = experiencesDb.find((exp) => exp.id === openModalId);
                                        if (!exp) return null;

                                        return (
                                        <>
                                            <div 
                                                className={`sticky top-0 z-10 px-4 sm:px-5 pt-4 border-b ${isDarkMode? `bg-[#212121] ${activeBorder}` : `bg-white ${activeBorder}`}`}>
                                                <span 
                                                    className="absolute top-3 right-2 ">
                                                    <IconButton
                                                        size="medium"
                                                        onClick={() => setOpenModalId(null)}>
                                                        <Close className="text-red-500 text-xl" />
                                                    </IconButton>
                                                </span>
                                                <h3 
                                                    className={`fs-4 font-semibold mb-2 ${activeColor}`}>
                                                    {exp.compenyName}
                                                </h3>
                                                <p 
                                                    className={`italic mb-1 ${activeColor} fs-6`}>
                                                    {exp.position}
                                                </p>
                                                <p 
                                                    className={`${isDarkMode? 'text-gray-200' : 'text-gray-600'} mb-4 text-sm-clamp`}>
                                                    {exp.sd_ed}
                                                </p>
                                            </div>
                                            {
                                                Array.isArray(exp.details) && typeof exp.details[0] === "string" ? (
                                                <ul 
                                                    className={`list-disc list-inside text-sm-clamp px-4 sm:px-6 space-y-1 marker:${activeColor} ${isDarkMode? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {(exp.details as string[]).map((detail, index) => (
                                                        <li key={index}>{detail}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div 
                                                    className="space-y-1 sm:space-y-4 px-4 sm:px-6">
                                                    {(exp.details as { positionName: string; details_p: string[] }[]).map((pos, index) => (
                                                        <div 
                                                            key={index}>
                                                            <h4 
                                                                className={`font-semibold text-sm-clamp ${activeColor} mb-1`}>
                                                                {pos.positionName}
                                                            </h4>
                                                            <ul 
                                                                className={`list-disc list-inside text-sm-clamp  space-y-1 ml-4 marker:${activeColor || 'text-gray-700'} ${isDarkMode? 'text-gray-300' : 'text-gray-600'}`}>
                                                                {pos.details_p.map((item, i) => (
                                                                    <li key={i}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </>);
                                    })()}
                                </div>
                            </div>
                        )
                    }
            </div>
        </>
    );
};

export default Experiences;
