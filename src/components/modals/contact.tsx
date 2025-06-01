import { 
    IconButton, 
    Tooltip 
} from "@mui/material";
import { 
    Back, 
    Contect as ContectIcon, 
    Copy,
    DoneAll
} from '../../assets/icons';
import { TelegramQR } from "../../assets/images";
import { useState } from "react";

interface iContactProps {
    CloseContact: () => void;
    isDarkMode: boolean;
    activeColor?: string;
    activeBorder?: string;
};
  
const Contect = ({ CloseContact, isDarkMode, activeColor, activeBorder}: iContactProps) => {
    const [isCopied, setCopied] = useState(false);
    const [isFadingOut, setFadingOut] = useState(false);
    const phoneNumber = '095 872 770';

    const clickCopy = () => {
        navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    const handleAnimationEnd = () => {
        if (isFadingOut) {
            setCopied(false);    
            setFadingOut(false); 
        }
    };
    return (
        <div 
            className="flex flex-col relative ">
            <div 
                className={`w-full border-b-2 ${activeBorder}  pt-1 pb-2 flex items-start justify-between  rounded-t-xl animate__zoomIn`}
                style={{ animationDuration: '0.5s' }}>       
                <ContectIcon className={`w-8 h-8 ${activeColor}`}/>
                <Tooltip 
                    arrow
                    placement="top"
                    title="Close"
                    slotProps={{
                        popper: {
                        modifiers: [
                                {
                                name: 'offset',
                                options: {
                                    offset: [0, -10],
                                },
                                },
                            ],
                        },
                    }}>
                    <IconButton
                        size="small"
                        sx={{ color: '#d50000' }}
                        onClick={CloseContact}>
                        <Back className="w-6 h-6 object-scale-down" />
                    </IconButton> 
               </Tooltip>
                
            </div>
            <div 
                className=" py-2 flex flex-col sm:flex-row  gap-x-6">
                <div 
                    className="space-y-1 sm:space-y-0.5 order-2">
                    <h2 
                        className={`text-lg-clamp sm:text-lg-clamp font-semibold pb-10 hidden sm:block ${isDarkMode? 'text-white' : ' text-gray-800'}`}>
                        Telegram & Phone Number
                    </h2>
                    <div 
                        className="space-x-1">
                        <span 
                            className={`text-md-clamp font-semibold ${activeColor}`}>
                            Username: 
                        </span>
                        <span
                            className="font-base-clamp  font-medium">
                            @Vatna
                        </span>
                    </div>
                    <div 
                        className="flex items-center gap-x-3 ">
                        <span 
                            className={`text-md-clamp ${activeColor} font-semibold text-nowrap`}>
                            Phone Number: 
                        </span>
                        <span
                            className={`flex items-center gap-x-3  border-b ${activeBorder}`}>
                            <p className="text-md-clamp text-nowrap">
                                {phoneNumber}
                            </p>
                            <Tooltip 
                                arrow
                                placement="top"
                                title={isCopied ? 'Copied!' : 'Copy'}
                                slotProps={{
                                    popper: {
                                    modifiers: [
                                            {
                                            name: 'offset',
                                            options: {
                                                offset: [0, -10],
                                            },
                                            },
                                        ],
                                    },
                                }}>
                                    <span className="cursor-pointer">{isCopied? <DoneAll onClick={clickCopy} className={`w-6 h-6 object-scale-down ${activeColor} cursor-pointer`}/> : <Copy onClick={clickCopy} className={`w-6 h-5 object-scale-down  cursor-pointer ${activeColor}`} />}</span>
                            </Tooltip>
                        </span>
                    </div>
                </div>
                <div 
                    className="space-y-2 sm:space-y-1 order-1 sm:order-2">
                    <h2 
                        className={`text-lg-clamp text-center font-semibold block sm:hidden pb-2 ${isDarkMode? 'text-white' : ' text-gray-800'}`}>
                        Telegram & Phone Number
                    </h2>
                    <span
                        className={`text-md-clamp sm:text-lg-clamp  font-semibold capitalize ${activeColor}`}>
                        telegram QR:
                    </span>
                   <div className="flex justify-center">
                        <div 
                            className="w-32 h-36 sm:w-40 sm:h-44 overflow-hidden rounded-3xl shadow-md flex ">
                            <img 
                                src={TelegramQR} 
                                alt="telegram QR" 
                                className="object-fill w-full h-full"
                            />
                    </div>
                   </div>
                </div>
            </div>
            {(isCopied || isFadingOut) && (
            <div 
                onAnimationEnd={handleAnimationEnd}
                className={`
                    absolute top-0 left-52 px-2 py-0.5 text-sm shadow-md rounded font-medium
                    ${isDarkMode ? 'text-white bg-green-700' : 'text-green-800 bg-green-100'}
                    animate__animated
                    ${isFadingOut ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
                `}
                style={{ animationDuration: '0.5s' }}>
                Copied!
            </div>
            )}
        </div>
    );
};

export default Contect;
