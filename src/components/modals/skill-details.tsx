import {  
    Button,
    Modal, 
    Slider 
} from "@mui/material";
import { 
    useEffect, 
    useState 
} from "react";
import { 
    ArrowRight, 
    CssIcon,
    GitHubNon, 
    HtmlIcon, 
    JavaScriptIcon, 
    LaravelIcon, 
    NpmIcon, 
    NuxtIcon, 
    PhpIcon, 
    ReactIcon, 
    TypeScriptIcon, 
    VueIcon,
    SqlIcon
} from "../../assets/icons";

interface IModalDetailProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    isDarkMode?: boolean;
    activeColor?: string;
    activeShadow?: string;
    activeBorder?: string;
    activeBg?: string;
    activeHover?: string;
    activeGradient?: string;
}

const SkillDetails = ({
  open,
  onClose,
  title = "More Details",
  isDarkMode,
  activeColor,
  activeShadow,
  activeBorder,
}: IModalDetailProps) => {
    const [showModal, setShowModal] = useState(false);
    const [animationClass, setAnimationClass] = useState("animate__bounceInDown");

    useEffect(() => {
        if (open) 
        {
            setShowModal(true);
            setAnimationClass("animate__bounceInDown");
        } 
        else 
        {
            setAnimationClass("animate__fadeOutUp");
            const timeout = setTimeout(() => {
                setShowModal(false);
            }, 1000); 
            return () => clearTimeout(timeout);
        }
    }, [open]);

    const personalSkills = [
        {
            id: 1, 
            skillName: "html",
            logo: HtmlIcon,
            class: "text-orange-500",
            perfomance: 90,
        },
        {
            id: 2, 
            skillName: "css",
            logo: CssIcon,
            class: "text-sky-500",
            perfomance: 90,
        },
        {
            id: 3, 
            skillName: "javeScript",
            logo: JavaScriptIcon,
            class: "text-yellow-500",
            perfomance: 75,
        },
        {
            id: 4, 
            skillName: "typeScript",
            logo: TypeScriptIcon,
            class: "text-blue-500",
            perfomance: 80,
        },
        {
            id: 5, 
            skillName: "Nuxt",
            logo: NuxtIcon,
            class: "text-green-500",
            perfomance: 80,
        },
        {
            id: 6, 
            skillName: "vue",
            logo: VueIcon,
            class: "text-green-600",
            perfomance: 80,
        },
        {
            id: 7, 
            skillName: "React",
            logo: ReactIcon,
            class: "text-sky-400",
            perfomance: 80,
        },
        {
            id: 8, 
            skillName: "npm",
            logo: NpmIcon,
            class: "text-red-500",
            perfomance: 70,
        },
        {
            id: 9, 
            skillName: "github",
            logo: GitHubNon,
            class: `hover:text-orange-500 text-orange-500`,
            perfomance: 80,
        },
        {
            id: 10, 
            skillName: "php",
            logo: PhpIcon,
            class: `hover:text-blue-800 text-blue-900`,
            perfomance: 50,
        },
        {
            id: 11, 
            skillName: "laravel",
            logo: LaravelIcon,
            class: `hover:text-red-500 text-red-500`,
            perfomance: 50,
        },
        {
            id: 12, 
            skillName: "sql",
            logo: PhpIcon,
            class: `hover:text-blue-800 text-blue-900`,
            perfomance: 50,
        },
        {
            id: 13, 
            skillName: "MySQL",
            logo: SqlIcon,
            class: `hover:text-blue-500 text-blue-700`,
            perfomance: 50,
        },
    ];

    if (!showModal) return null;

    return (
        <Modal
            open={open || showModal}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description">
            <div 
                className={`fixed inset-0 flex items-center justify-center ${animationClass} ${isDarkMode? 'bg-gray-950' : 'bg-gray-100'}`}
                style={{ animationDuration: '1s' }}>
                <div
                    className={`w-full h-full p-4 sm:p-6 overflow-auto transition-transform duration-300 transform ${
                        showModal ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <div 
                        className=" w-0 sm:w-[70%]  md:w-[60%] lg:w-[50%] flex items-center gap-x-3 sm:gap-x-6 mb-4">
                        <Button 
                            aria-label="delete" 
                            variant="outlined"
                            size="small"
                            color="error"
                            onClick={onClose}
                            className="p-0.5 sm:p-2 md:p-1 min-w-0">
                            <ArrowRight  className="rotate-180 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </Button>
                        <span
                            className={`${activeColor} text-lg-clamp font-semibold uppercase text-nowrap`}>
                            {title}
                        </span>
                        <span className={`border ${activeBorder} hidden sm:block flex-1 `}/>
                    </div>
                    <div 
                        className={`${isDarkMode? 'bg-gray-950' : 'bg-gray-200'} border  px-4 py-6 sm:py-4 rounded-xl shadow-sm ${activeShadow} ${activeBorder} mx-4 my-5`}>
                        {
                            personalSkills.map((skill)=> (
                            <div 
                                key={skill.id}
                                className="space-y-1">
                                <div 
                                    className="flex justify-between items-center">
                                    <span
                                        className="flex items-end gap-x-1 sm:gap-x-2">
                                        <skill.logo className="w-6 h-6 sm:w-7 sm:h-7"/>
                                        <h4
                                            className={`font-medium text-sm-clamp uppercase ${skill.class}`}>
                                            {skill.skillName}
                                        </h4>
                                    </span>
                                    <h4
                                        className={`text-base-clamp font-medium uppercase ${activeColor}`}>
                                        %{skill.perfomance}
                                    </h4>
                                </div>
                                <div 
                                    className="px-3">
                                    <Slider 
                                        defaultValue={skill.perfomance} 
                                        step={10} 
                                        marks 
                                        min={10} 
                                        max={100} 
                                        disabled 
                                        size="medium"
                                        sx={{
                                            "& .MuiSlider-thumb": {
                                                width: 16,
                                                height: 16,
                                                backgroundColor: "#ffffff",
                                                border: "2px solid #666",
                                                boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
                                                "&:hover": {
                                                    boxShadow: "0 0 6px rgba(0, 0, 0, 0.5)",
                                                },
                                            },
                                            "& .MuiSlider-rail": {
                                            backgroundColor: "lightgray", 
                                            },
                                            "& .MuiSlider-track": {
                                            backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)", 
                                            },
                                        }}
                                    />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SkillDetails;
