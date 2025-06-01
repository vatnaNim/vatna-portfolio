import * as React from 'react';
import {
    Tooltip,
	IconButton,
	SwipeableDrawer,
	Box,
    Modal,
    Menu,
} from '@mui/material';
import { 
    Light, 
    Dark, 
    Bars,
    Home,
    About,
    Projects,
    Contect,
    ExperiencesIcon,
    ChatIcon,
    ColorIcon,
    WaterIcon,
} from '../../assets/icons'; 
import {
    Logo,
    LogoWhite
} from './../../assets/images';

import { 
    Contact
} from '../modals';
import { 
    NavLink,
    useLocation
} from 'react-router-dom';

/* 
Start:Delare interface
*/
interface iColorBtn {
    id: number;
    btnName: string;
    color: string;
    bgColor?: string,
    borderColor?: string,
    shadowColor?: string,
    hoverColor?: string,
    gradientColor?: string;
    hexColor?: string;
    isDefault?: boolean;
}

interface iNavigationBarProps {
	isDarkMode: boolean;
	toggleColorMode: () => void;
    colorDb: iColorBtn[],
    activeColor: string;
    setActiveColor: (color: string) => void;
    activeShadow?: string;
    setActiveShadow?: (shadow: string) => void;
    activeBorder?: string;
    setActiveBorder?: (border: string) => void;
    activeBg?: string;
    setActiveBg?: (bg: string) => void;
    activeHover?: string;
    setActiveHover?: (hover: string) => void;
    activeGradient?: string;
    setActiveGradient?: (gradient: string) => void;
    setHexColor?: (hax: string) => void;
}
/* 
End:Delare interface
*/
const NavigationBar = ({ 
        isDarkMode, 
        toggleColorMode,
        activeColor,
        setActiveColor, 
        colorDb,
        activeShadow,
        setActiveShadow,
        activeBorder,
        setActiveBorder,
        setActiveBg,
        activeHover,
        setActiveHover,
        setActiveGradient,
        setHexColor
    }: iNavigationBarProps) => {
    /* 
    Start:Declare hook
    */
  	const [isOpenContact, setIsOpenContact] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [anchorColor, setAnchorColor] = React.useState<null | HTMLElement>(null);
    /* 
    End:Declare hook
    */
    /* 
    Start:Declare function
    */
    const openContact = () => setOpen(true);
    const closeContact = () => setOpen(false);

  	const toggleContact = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
		event &&
		event.type === 'keydown' &&
		((event as React.KeyboardEvent).key === 'Tab' ||
			(event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;
        };
        setIsOpenContact(open);
    };
    const handleOpenColor = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorColor(event.currentTarget);
    }
    const handleCloseColor = (): void => {
        setAnchorColor(null);
    };
    /* 
    End:Declare function
    */
    /* 
    Start:Declare varrible
    */
    const openColorModal = Boolean(anchorColor);
    const location = useLocation();
    /* 
    End:Declare varrible
    */
   /* 
   Start:Declare data value
   */
    const navItems = [
        { 
            name: 'Home', 
            path: '',
            icon: <Home className={`w-5 h-5 object-scale-down ${activeColor}`} />
        },
        { 
            name: 'about', 
            path: 'about',
            icon: <About className={`w-5 h-5 object-scale-down ${activeColor}`}/> 
        },
        { 
            name: 'experiences', 
            path: 'experiences',
            icon: <ExperiencesIcon className={`w-5 h-5 object-scale-down ${activeColor}`}/>
        },
        { 
            name: 'Projects', 
            path: 'projects',
            icon:  <Projects className={`w-5 h-5 object-scale-down ${activeColor}`}/>
        }, 
        { 
            name: 'contect', 
            path: 'contect',
            icon:  <ChatIcon className={`w-5 h-5 object-scale-down ${activeColor}`}/>
        }, 
    ];
    /* 
    End:Declare data value
    */

    /* 
    Start:modal element
    */
    const drawerList = () => (
        <Box
            sx={{
                width: 250,
                height: '100%',
                backgroundColor: isDarkMode? 'rgb(38 38 38 / var(--tw-bg-opacity, 1))' : 'rgb(212 212 212 / var(--tw-bg-opacity, 1))', 
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)', 
                zIndex: 50,
            }}
            role="presentation"
            onClick={toggleContact(false)}
            onKeyDown={toggleContact(false)}>
            <div 
                className="px-3 py-4 space-y-2">
                {navItems.map((item, index) => {
                    const isActive = location.pathname === `/${item.path}`;
                    return (
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className="flex flex-col">
                            <span
                                className={`
                                    flex items-center gap-x-4 px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${activeHover}
                                    ${isActive 
                                        ? `bg-[#82aaff]/20 border  ${activeColor} shadow-sm ${activeBorder}` 
                                        : isDarkMode 
                                            ? 'hover:bg-[#2c2c2c] text-[#E0E0E0] ' 
                                            : 'hover:bg-gray-200 text-black '
                                    }
                                `}>
                                <span 
                                    className={` ${isActive ? 'text-sky-700' : isDarkMode ? activeColor : activeColor}`}>
                                    {item.icon}
                                </span>
                                <span 
                                    className="uppercase tracking-normal font-medium">
                                    {item.name}
                                </span>
                            </span>
                            <span className={`border mt-1 ${activeBorder}`}/>
                        </NavLink>
                    );
                })}

                <div 
                    className="space-y-2">
                    <h2
                        className={`text-sm-clamp font-medium capitalize ${isDarkMode? 'text-gray-400' : 'text-gray-600'}`}>
                        color mode
                    </h2>
                    <div 
                        className="grid grid-cols-3 gap-1 ">
                        {
                            colorDb.map((color, index) => (
                            <button
                                key={index}
                                onClick={(): void => {
                                    setActiveColor(color.color);
                                    setActiveShadow?.(color.shadowColor || '');
                                    setActiveBorder?.(color.borderColor || '');
                                    setActiveBg?.(color.bgColor || '');
                                    setActiveHover?.(color.hoverColor || '');
                                    setActiveGradient?.(color.gradientColor || '')
                                    setHexColor?.(color.hexColor || '');
                                }}
                                className={`px-2 border-2 rounded-lg shadow-sm transition-colors duration-200 space-x-1 flex justify-center items-center
                                    ${activeColor === color.color 
                                        ? (isDarkMode ? 'border-gray-700 bg-gray-400/20 text-gray-400' : 'border-gray-500 bg-sky-100 text-gray-500')
                                        : (isDarkMode ? 'border-gray-600 text-gray-600 hover:bg-gray-700' : 'border-gray-500 text-gray-600 hover:bg-gray-200')
                                    }`}>
                                <span>
                                    <WaterIcon 
                                        className={color.color}
                                    />
                                </span>
                                <span
                                    className={`text-xs-clamp capitalize`}>
                                    {color.btnName}
                                </span>
                            </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Box>
    );
    /* 
    End:Declare modal element
    */
    return (
        <nav 
            className={`w-full h-[10vh] flex justify-between items-center px-3 sm:px-6 ${isDarkMode ? 'bg-inherit' : 'bg-inherit'}`}>
            <div>
                <img 
                    src={isDarkMode ? LogoWhite : Logo} 
                    alt="Logo" 
                    className='sm:w-26 sm:h-26 w-30 h-16 object-scale-down' 
                />
            </div>
            <ul 
                className={`md:flex gap-x-8 lg:gap-x-14 px-2 md:px-4 py-2.5 md:py-1.5 rounded-xl shadow-sm hidden ${activeShadow}
                ${isDarkMode ? `bg-[#1E1E1E] text-[#E0E0E0] ` : `bg-gray-300 `}`}>
                {navItems.map((item, index) => {
                    const isActive = location.pathname === `/${item.path}`;
                    return (
                    <li 
                        key={index} 
                        className="relative font-semibold cursor-pointer group capitalize">
                        <NavLink
                            to={item.path}
                            className={`tracking-normal uppercase  text-xs-clamp  ${isActive ? activeColor : ''}`}>
                            {item.name}
                            <span 
                                className={`absolute left-1/2 bottom-0 h-[2px] bg-current transform -translate-x-1/2 transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                            </span>
                        </NavLink>
                    </li>
                    );
                })}
            </ul>
            <div  
                className={`md:flex hidden gap-x-1`}>
                <Tooltip
                    title="Contact"
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -14],
                                    },
                                },
                            ],
                        },
                    }}>
                    <IconButton
                        aria-label="toggle dark mode"
                        size="medium"
                        onClick={openContact}
                        className=" rounded-full">
                        <Contect className={`lg:w-7 md:h-7 w-6 h-6 ${isDarkMode? 'text-gray-400' : 'text-gray-600'}`}/>
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="Change Color"
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -14],
                                    },
                                },
                            ],
                        },
                    }}>
                    <IconButton
                        id="color-menu"
                        aria-controls={openColorModal ? 'color-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openColorModal ? 'true' : undefined}
                        onClick={handleOpenColor}
                        className=" rounded-full">
                        <ColorIcon className={`lg:w-7 md:h-7 w-6 h-6 ${activeColor} ${isDarkMode? 'text-gray-400' : 'text-gray-600'}`}/>
                    </IconButton>
                </Tooltip>
                <Tooltip 
                    title={isDarkMode ? 'Light Mode' : 'Dark Mode'} 
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [0, -14],
                              },
                            },
                          ],
                        },
                    }}>
                    <IconButton
                        aria-label="toggle dark mode"
                        size="medium"
                        onClick={toggleColorMode}
                        className="rounded-full p-1 md:p-3">
                        {isDarkMode ? (
                            <Light className="text-gray-300 lg:w-7 lg:h-7 w-6 h-6" />
                        ) : (
                            <Dark className="text-gray-600 lg:w-7 lg:h-7 w-6 h-6" />
                        )}
                    </IconButton>
                </Tooltip>  
            </div>
            <div 
                className='md:hidden space-x-1'>
                <Tooltip
                    title="Contact"
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -14],
                                    },
                                },
                            ],
                        },
                    }}>
                    <IconButton
                        aria-label="toggle dark mode"
                        size="medium"
                        onClick={openContact}
                        className=" rounded-full">
                        <Contect className={`lg:w-7 md:h-7 w-6 h-6 ${isDarkMode? 'text-gray-300' : 'text-gray-600'}`}/>
                    </IconButton>
                </Tooltip>
                <Tooltip 
                    title={isDarkMode ? 'Light Mode' : 'Dark Mode'} 
                    enterDelay={1500}
                    slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [0, -14],
                              },
                            },
                          ],
                        },
                    }}>
                    <IconButton
                        aria-label="toggle dark mode"
                        size="medium"
                        onClick={toggleColorMode}
                        className="rounded-full p-1 md:p-3">
                        {isDarkMode ? (
                            <Light className="text-gray-300 lg:w-7 lg:h-7 w-6 h-6" />
                        ) : (
                            <Dark className="text-gray-600 lg:w-7 lg:h-7 w-6 h-6" />
                        )}
                    </IconButton>
                </Tooltip>  
                <IconButton 
                    onClick={toggleContact(true)}>
                    <Bars 
                        className={`${activeColor} text-2xl`}
                    />
                </IconButton>
                <SwipeableDrawer
                    anchor="right"
                    open={isOpenContact}
                    onClose={toggleContact(false)}
                    onOpen={toggleContact(true)}
                    PaperProps={{
                        sx: {
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            overflow: 'hidden',
                            margin: 0.5,
                            backgroundColor: isDarkMode? '#212121' : 'white'
                        },
                    }}>
                    {drawerList()}
                </SwipeableDrawer>
            </div>
            <Modal
                keepMounted
                open={open}
                onClose={closeContact}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Box
                    className="animate__zoomIn"
                    sx={{
                        bgcolor: isDarkMode ? '#1E1E1E' : 'white',
                        color: isDarkMode ? '#E0E0E0' : 'black',
                        borderRadius: 3,
                        boxShadow: { xs: 3, sm: 6, md: 12 },
                        px: { xs: 2, sm: 3, md: 3 },
                        py: { xs: 1, md: 2 },
                        minWidth: { xs: '90%', sm: 400, md: 500 },
                        maxWidth: { xs: '95%', sm: '80%', md: '60%' },
                        mx: 'auto',
                    }}
                    style={{ animationDuration: '1s' }}>
                    <Contact 
                        activeBorder={activeBorder}
                        activeColor={activeColor}
                        CloseContact={closeContact}
                        isDarkMode={isDarkMode} 
                    />
                </Box>
            </Modal>
            <Menu
                id="color-menu"
                anchorEl={anchorColor}
                open={openColorModal}
                onClose={handleCloseColor}
                MenuListProps={{
                    'aria-labelledby': 'color-menu',
                }}
                PaperProps={{
                sx: {
                    width: '350px',
                    backgroundColor: isDarkMode? '#1E1E1E' : 'rgb(209 213 219 / var(--tw-text-opacity, 1))'
                },
            }}>
                <article
                    className={`px-3 py-2 space-y-2`}>
                    <h3
                        className={`text-xs-clamp font-medium capitalize ${isDarkMode? 'text-gray-400' : 'text-gray-500'}`}>
                        color mode
                    </h3>
                    <div 
                        className="grid grid-cols-3 gap-1">
                        {
                            colorDb.map((color, index) => (
                            <button
                                key={index}
                                onClick={(): void => {
                                    setActiveColor(color.color);
                                    setActiveShadow?.(color.shadowColor || '');
                                    setActiveBorder?.(color.borderColor || '');
                                    setActiveBg?.(color.bgColor || '');
                                    setActiveHover?.(color.hoverColor || '');
                                    setActiveGradient?.(color.gradientColor || '')
                                    setHexColor?.(color.hexColor || '');
                                }}
                                className={`px-2 border-2 rounded-lg shadow-sm transition-colors duration-200 space-x-1 flex justify-center items-center
                                    ${activeColor === color.color 
                                        ? (isDarkMode ? 'border-gray-700 bg-gray-400/20 text-gray-400' : 'border-gray-500 bg-sky-100 text-gray-500')
                                        : (isDarkMode ? 'border-gray-600 text-gray-600 hover:bg-gray-700' : 'border-gray-400 text-gray-500 hover:bg-gray-200')
                                    }`}>
                                <span>
                                    <WaterIcon 
                                        className={color.color}
                                    />
                                </span>
                                <span
                                    className={`text-xs-clamp capitalize`}>
                                    {color.btnName}
                                </span>
                            </button>
                            ))
                        }
                    </div>
                </article>
            </Menu>
        </nav>
    );
};

export default NavigationBar;
