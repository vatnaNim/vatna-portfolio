import {
    Modal,
    Box,
    Tooltip,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { 
	FaceBook,
	GitHub, 
	Gmail,
	LinkIn,
	Portfofio,
	Profile
} from "../assets/images";
import { 
	Download, 
	PdfIcon, 
	WordIcon 
} from "../assets/icons";
import 
	React, 
	{ useState } 
from "react";
import { 
	DownloadCv 
} from "../components/modals";
import { 
	CvFilm 
} from "../films";
import html2pdf from "html2pdf.js";
import { 
	NavLink 
} from "react-router-dom";
import { 
	motion 
} from "framer-motion";
import { 
	BtnSection, 
	Loading
} from "../components/ui";
import { 
	Helmet 
} from "react-helmet-async";
/* 
Start:Interface 
*/
interface iHomeProps {
    isDarkMode: boolean;
	activeColor?: string;
    activeShadow?: string;
    activeBorder?: string;
    activeBg?: string;
    activeHover?: string;
}
/* 
End:Interface 
*/
const Home = ({ isDarkMode, activeColor, activeBg, activeBorder, activeShadow }: iHomeProps) => {
	/* 
	Start:Usestate hook
	*/
    const [isOpenDownload, setIsOpenDownload] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	/* 
	End:Usestate hook
	*/

	/*
	Start:Declare variable 
	 */
    const open = Boolean(anchorEl);
	/*
	End:Declare variable 
	*/

	/*
	Start:Haldle function
	*/
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const toggleDownloadModal = (): void => {
      setIsOpenDownload((prevState) => !prevState);
    };

    const handleDownloadPDF = () => {
		const element = document.getElementById("cv-content");

		if (!element) return;

		const clone = element.cloneNode(true) as HTMLElement;
		clone.style.width = "210mm";
		clone.style.minHeight = "297mm";
		clone.style.boxSizing = "border-box";
		clone.style.backgroundColor = isDarkMode ? "#1e1e1e" : "#ffffff";
		clone.style.color = isDarkMode ? "#ffffff" : "#000000";
		clone.style.paddingLeft = "20mm";
		clone.style.paddingRight = "20mm";

		const container = document.createElement("div");
		container.style.position = "fixed";
		container.style.top = "-9999px";
		container.appendChild(clone);
		document.body.appendChild(container);
		const options = {
			margin: [20, 0, 20, 0],
			filename: "Vatna_Curriculum-Vitae.pdf",
			image: { type: "jpeg", quality: 0.98 },
			html2canvas: { scale: 2, useCORS: true },
			jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
		};
		html2pdf()
		.set(options)
		.from(clone)
		.save()
		.then(() => {
			document.body.removeChild(container);
		});
	};


    const convertWord = async () => {
      	const element = document.getElementById("cv-content");
    
      	if (!element) 
		{
			alert("CV content not found for download.");
			return;
		}

		element.classList.remove("hidden");
		
		const clone = element.cloneNode(true) as HTMLElement;
		
		const images = clone.querySelectorAll("img");
		
		for (const img of images) {
			const src = img.getAttribute("src");
			if (!src || src.startsWith("data:")) continue;
		
			try {
			const response = await fetch(src);
			const blob = await response.blob();
		
			const reader = new FileReader();
			const base64 = await new Promise<string>((resolve, reject) => {
				reader.onloadend = () => resolve(reader.result as string);
				reader.onerror = reject;
				reader.readAsDataURL(blob);
			});
		
			img.setAttribute("src", base64);
			} catch (error) {
				console.warn("Failed to load image:", src, error);
			}
		}
	
		const contentHtml = clone.innerHTML;
	
		const styles = `
		<style>
			body {
				font-family: Arial, sans-serif;
				padding: 20px;
				color: #333;
			}
			h1, h2, h3 {
				color: #1a73e8;
			}
			p {
				font-size: 14px;
				line-height: 1.6;
			}
			img {
				max-width: 100%;
				height: auto;
			}
			nav {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 2rem;
			}
		</style>`;
	
		const preHtml = `
			<html xmlns:o='urn:schemas-microsoft-com:office:office'
				xmlns:w='urn:schemas-microsoft-com:office:word'
				xmlns='http://www.w3.org/TR/REC-html40'>
			<head>
				<meta charset='utf-8'>
				<title>CV Document</title>
				${styles}
			</head>
			<body>
		`;
	
		const postHtml = "</body></html>";
		
		const html = preHtml + contentHtml + postHtml;
		
		const blob = new Blob(["\ufeff", html], {
			type: "application/msword",
		});
		
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "Vatna_Curriculum-Vitae.doc";
		document.body.appendChild(link);
		link.click();
		
		setTimeout(() => {
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}, 0);
	
		element.classList.add("hidden");
	};
	/*
	End:Haldle function
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
			socal_name: "Gmail",
			socal_icon: Gmail,
			socal_link: "https://vatnaportfolio.vercel.app/contect",
			socal_class: " hover:bg-white",
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
				<meta property="og:url" content="https://vatnaportfolio.vercel.app/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="VATNA - Front-end Developer" />
				<meta name="twitter:description" content="Personal portfolio of VATNA" />
				<meta name="twitter:image" content={Portfofio} />
			</Helmet>

			<nav 
				className="px-6 sm:px-8 w-full h-fit">
				<div 
					className="w-full h-dvh sm:h-[70vh] gap-y-4 flex sm:flex-row flex-col ">
					<div 
						className="w-full flex justify-center items-center order-2 sm:order-1">
						<div
							className={`focus-in-expand flex flex-col gap-1 text-base-clamp  ${
								isDarkMode ? "text-white" : "text-black"
							}`}>
							<span className="text-base-clamp text-center sm:text-start">Hello, visitor. I'm</span>
							<span className="text-xl-clamp font-bold uppercase text-center sm:text-start">Nim Vatna</span>
							<div 
								className="text-base-clamp flex items-center justify-center sm:justify-start gap-x-4 flex-wrap sm:flex-nowrap text-nowrap">
								<span>I’m a</span>
								<span 
									className={`text-animation text-lg-clamp ${activeColor} uppercase px-2 ${isDarkMode? 'bg-white' : 'bg-black '}`}>
									Front-end Developer
								</span>
							</div>
							<p 
								className=" text-base-clamp leading-5 md:leading-6 sm:text-start text-center">
								Welcome to my personal portfolio website.👋
							</p>
							<div 
								className="space-x-2 flex items-center justify-center sm:justify-start pt-0 sm:pt-1 mb-4 sm:mt-0 mt-2">
								<Tooltip
									title="Download CV"
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
									<span>
										<BtnSection 
											activeBg={activeBg}
											aria-controls={open ? "basic-menu" : undefined}
											aria-haspopup="true"
											aria-expanded={open ? "true" : undefined}
											onClick={handleClick}>
											<div 
												className="flex items-center justify-center gap-x-2">
												<span>
													<Download className="  text-xl md:text-2xl"/>
												</span>
												<span
													className="text-md-clamp font-semibold uppercase">
													Download cv
												</span>
											</div>
										</BtnSection>
									</span>
								</Tooltip>
							</div>
							<div 
								className="flex justify-center sm:justify-start items-center gap-x-3 sm:mt-0 mt-2">
								{socalMedia.map((socal, index) => (
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
											className={`${socal.socal_class} w-6 h-6 sm:w-7 sm:h-7 rounded-full transition duration-300 transform overflow-hidden hover:scale-110 shadow-lg flex items-center justify-center cursor-pointer ring-1 ${activeBorder}`}>
											<NavLink 
												to={socal.socal_link}
												target="_blank"
												className="flex items-center justify-center w-full h-full">
												<img 
													src={socal.socal_icon} 
													alt={`${socal.socal_name} icon`}
													className="w-full h-full object-fill" 
												/>
											</NavLink>
										</div>
									</Tooltip>
								))}
							</div>
						</div>
					</div>
				<div 
					className="w-full flex justify-center items-center order-1 md:order-2">
					<motion.div
						initial={{ opacity: 0, y: 40, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						whileTap={{ scale: 0.97 }}
						className={`group relative up-down-animation w-full max-w-full sm:max-w-[300px] md:max-w-[400px] aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden transition-shadow duration-500 border-2 mt-8 sm:mt-0 ${
							isDarkMode
							? `${activeShadow} ${activeBorder} hover:shadow-[0_10px_30px_rgba(96,165,250,0.4)] will-change-transform will-change-box-shadow`
							: `${activeShadow} ${activeBorder} hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] will-change-transform will-change-box-shadow`
						}`}
						style={{ backgroundImage: `url(${Profile || <Loading/>})` }}>
						<div className="absolute inset-0  border-transparent  transition-all duration-500 z-10 pointer-events-none" />
						<motion.h2
							className="z-10 font-sans text-[clamp(0.875rem,2.5vw,1.25rem)] font-bold leading-snug tracking-wide text-white drop-shadow-xl absolute bottom-2 sm:bottom-4 left-4 p-2 bg-black/40 backdrop-blur-sm rounded-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}>
							<span 
								className="block group-hover:hidden transition-opacity duration-500">
								CRAFTING CLEAN UI
							<br />
								WITH EVERY LINE OF CODE
							</span>
							<span 
								className="hidden group-hover:block transition-opacity duration-500 uppercase">
								Nice to meet me,
							<br />
								hope I see you soon.
							</span>
						</motion.h2>
					</motion.div>
				</div>
					<Menu
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
							sx: {
								p: 0, 
								m: 0, 
								backgroundColor: isDarkMode ? "rgb(3 7 18 / var(--tw-text-opacity, 1))" : "rgb(243 244 246 / var(--tw-text-opacity, 1))",
							},
						}}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}>
						<MenuItem
							onClick={handleDownloadPDF}>
							<ListItemIcon>
								<PdfIcon className="w-6 h-7" />
							</ListItemIcon>
							<ListItemText>
								<span
									className="uppercase text-sm font-semibold text-red-600">
									pdf 
								</span>
							</ListItemText>
						</MenuItem>
						<MenuItem 
							onClick={convertWord}>
							<ListItemIcon>
								<WordIcon className="w-6 h-7" />
							</ListItemIcon>
							<ListItemText>
								<span
									className="uppercase text-sm font-semibold text-sky-600">
									word 
								</span>
							</ListItemText>
						</MenuItem>
					</Menu>
					<Modal
						keepMounted
						open={isOpenDownload}
						onClose={toggleDownloadModal}
						aria-labelledby="gmail-modal-title"
						aria-describedby="gmail-modal-description">
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								bgcolor: isDarkMode ? "#1E1E1E" : "white",
								color: isDarkMode ? "#E0E0E0" : "black",
								borderRadius: 3,
								boxShadow: 24,
								px: 2,
								py: 1,
								minWidth: 800,
								maxWidth: "90%",
							}}>
							<DownloadCv closeDownload={toggleDownloadModal} />
						</Box>
					</Modal>
				</div>
				<div 
					className="hidden">
					<nav
						id="cv-content">
						<CvFilm/>
					</nav>
				</div>
			</nav>
		</>	
    );
};
  
export default Home;
  