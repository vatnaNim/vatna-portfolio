import { 
    Route, 
    Routes, 
    useLocation 
} from 'react-router-dom';
import 
    React, 
    {   useEffect,
        useState 
    } 
from 'react';
import { 
    Home, 
    About, 
    Projects, 
    Experiences, 
    Contect 
} from "./pages";
import NavigationBar from "./components/layouts/navigation-bar";
import { 
    Particles 
} from "./components/layouts/animations";
import { 
    ErrorBoundary 
} from "./error-boundary";
import { 
    Loading 
} from "./components/ui";
import { 
    HelmetProvider 
} from 'react-helmet-async';

function App() {
    /*
    Start:Declare data value
    */
    const colorBtn = [
        {
            id: 1,
            btnName: 'Sky',
            color: 'text-sky-600',
            bgColor: 'bg-sky-500',
            borderColor: 'border-sky-500  decoration-sky-500 ring-sky-500',
            shadowColor: 'shadow-sky-500',
            hoverColor: 'hover:text-sky-700',
            gradientColor: 'linear-gradient(45deg, #87CEEB, #00BFFF)',
            hexColor: '#0284C7',  
            isDefault: true,
        },
        {
            id: 2,
            btnName: 'Green',
            color: 'text-green-500',
            bgColor: 'bg-green-500',
            borderColor: 'border-green-500  decoration-green-500 ring-green-500',
            shadowColor: 'shadow-green-500',
            hoverColor: 'hover:text-green-600',
            gradientColor: 'linear-gradient(45deg, #A8E063, #56AB2F)', 
            hexColor: '#22C55E', 
        },
        {
            id: 3,
            btnName: 'Orange',
            color: 'text-orange-500',
            bgColor: 'bg-orange-500',
            borderColor: 'border-orange-500  decoration-orange-500 ring-orange-500',
            shadowColor: 'shadow-orange-500',
            hoverColor: 'hover:text-orange-600',
            gradientColor: 'linear-gradient(45deg, #FFA500, #FF7F50)',
            hexColor: '#F97316', 
        },
        {
            id: 4,
            btnName: 'Yellow',
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-500',
            borderColor: 'border-yellow-500  decoration-yellow-500 ring-yellow-500',
            shadowColor: 'shadow-yellow-500',
            hoverColor: 'hover:text-yellow-600',
            gradientColor: 'linear-gradient(45deg, #FFF700, #FFD700)', 
            hexColor: '#EAB308',  
        },
        {
            id: 5,
            btnName: 'Violet',
            color: 'text-violet-500',
            bgColor: 'bg-violet-500',
            borderColor: 'border-violet-500 decoration-violet-500 ring-violet-500',
            shadowColor: 'shadow-violet-500',
            hoverColor: 'hover:text-violet-600',
            gradientColor: 'linear-gradient(45deg, #8A2BE2, #7B68EE)', 
            hexColor: '#8B5CF6', 
        },
        {
            id: 6,
            btnName: 'Fuchsia',
            color: 'text-fuchsia-500',
            bgColor: 'bg-fuchsia-500',
            borderColor: 'border-fuchsia-500  decoration-fachsia-500 ring-fuchsia-500',
            shadowColor: 'shadow-fuchsia-500',
            hoverColor: 'hover:text-fuchsia-600',
            gradientColor: 'linear-gradient(45deg, #FF77FF, #DA70D6)', 
            hexColor: '#D946EF',  
        },
        {
            id: 7,
            btnName: 'Rose',
            color: 'text-rose-500',
            bgColor: 'bg-rose-500',
            borderColor: 'border-rose-500  decoration-rose-500 ring-rose-500',
            shadowColor: 'shadow-rose-500',
            hoverColor: 'hover:text-rose-600',
            gradientColor: 'linear-gradient(45deg, #FF5E78, #FF3366)',
            hexColor: '#F43F5E',  
        },
        {
            id: 8,
            btnName: 'Blue',
            color: 'text-blue-500',
            bgColor: 'bg-blue-500',
            borderColor: 'border-blue-500  decoration-blue-500 ring-blue-500',
            shadowColor: 'shadow-blue-500',
            hoverColor: 'hover:text-blue-600',
            gradientColor: 'linear-gradient(45deg, #3B82F6, #1D4ED8)',
            hexColor: '#3B82F6', 
        },
        {
            id: 9,
            btnName: 'Red',
            color: 'text-red-500',
            bgColor: 'bg-red-500',
            borderColor: 'border-red-500  decoration-red-500 ring-red-500',
            shadowColor: 'shadow-red-500',
            hoverColor: 'hover:text-red-600',
            gradientColor: 'linear-gradient(45deg, #FF4E50, #F44336)',
            hexColor: '#EF4444',
        },
        {
            id: 10,
            btnName: 'Teal',
            color: 'text-teal-500',
            bgColor: 'bg-teal-500',
            borderColor: 'border-teal-500  decoration-teal-500 ring-teal-500',
            shadowColor: 'shadow-teal-500',
            hoverColor: 'hover:text-teal-600',
            gradientColor: 'linear-gradient(45deg, #20B2AA, #008080)',
            hexColor: '#14B8A6', 
        },
    ];
    /*
    End:Declare data value
    */
    /*
    Start:Declare Hook
    */
    const defaultColor = colorBtn.find(c => c.isDefault);
    const [activeColor, setActiveColor] = React.useState(defaultColor?.color || 'text-sky-500');
    const [activeShadow, setActiveShadow] = React.useState(defaultColor?.shadowColor || 'shadow-sky-500');
    const [activeBorder, setActiveBorder] = React.useState(defaultColor?.borderColor || 'shadow-sky-500');
    const [activeBg, setActiveBg] = React.useState(defaultColor?.bgColor || 'bg-sky-500');
    const [activeHover, setActiveHover] = React.useState(defaultColor?.hoverColor || 'hover:bg-sky-500');
    const [activeGradient, setActiveGradient] = React.useState(defaultColor?.gradientColor || 'linear-gradient(45deg, #87CEEB, #00BFFF)');
    const [activeHax, setActiveHax] = React.useState(defaultColor?.hexColor || '#0284C7');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="${activeHax}" d="M2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm7-7q1.25 0 2.125-.875T12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14m-6.9 5h13.8q-1.05-1.875-2.9-2.937T9 15t-4 1.063T2.1 19M15 11h5q.425 0 .713-.288T21 10V7q0-.425-.288-.712T20 6h-5q-.425 0-.712.288T14 7v3q0 .425.288.713T15 11m2.5-2.25l1.85-1.3q.2-.15.425-.038t.225.363q0 .025-.175.35l-1.75 1.225q-.275.2-.575.2t-.575-.2l-1.75-1.225Q15.15 8.1 15 7.775q0-.25.225-.363t.425.038z"/></svg>`;
        function svgToDataUrl(svg: string) {
            return `data:image/svg+xml,${encodeURIComponent(svg)}`;
        }

        let favicon = document.querySelector("link[rel='icon']");
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.setAttribute('rel', 'icon');
            document.head.appendChild(favicon);
        }
        
        favicon.setAttribute('href', svgToDataUrl(svgString));
    }, [activeHax]);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 600);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);
    useEffect(() => {
        const path = location.pathname;
        const titleMap: Record<string, string> = {
            "/": "Home | VATNA",
            "/about": "About | VATNA",
            "/experiences": "Experiences | VATNA",
            "/projects": "Projects | VATNA",
            "/contect": "Contact | VATNA",
        };

        document.title = titleMap[path] || "VATNA";
    }, [location.pathname]);
    /*
    End:Declare Hook
    */
    /*
    Start:Declare function
    */
    const toggleColorMode = (): void => {
        setIsDarkMode(!isDarkMode);
    };
    /*
    End:Declare function
    */

    if (loading) {
        return (
            <div className="flex items-center justify-center flex-col h-screen gap-y-4">
                <Loading />
            </div>
        );
    }

    return (
        <HelmetProvider>
            <ErrorBoundary>
                <div 
                    className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} relative min-h-screen w-full`}>
                    <div 
                        className="absolute inset-0 z-0 w-full h-full">
                        <Particles
                            particleColors={['#ffffff']}
                            particleCount={200}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                            className="w-full h-full"
                        />
                    </div>

                    <div 
                        className="relative z-10 w-full min-h-screen flex flex-col">
                        <div 
                            className={`w-full z-20 sticky top-0 ${isDarkMode ? 'backdrop-blur-md bg-black/30' : 'backdrop-blur-md bg-white/30'}`}>
                            <NavigationBar
                                isDarkMode={isDarkMode}
                                toggleColorMode={toggleColorMode}
                                colorDb={colorBtn} 
                                activeColor={activeColor}
                                setActiveColor={setActiveColor}
                                activeShadow={activeShadow}
                                setActiveShadow={setActiveShadow}
                                activeBorder={activeBorder}
                                setActiveBorder={setActiveBorder}
                                activeBg={activeBg}
                                setActiveBg={setActiveBg}
                                activeHover={activeHover}
                                setActiveHover={setActiveHover}
                                activeGradient={activeGradient}
                                setActiveGradient={setActiveGradient}
                                setHexColor={setActiveHax}
                            />
                        </div>
                        <Routes>
                            <Route 
                                path="/" 
                                element={
                                    <Home 
                                        isDarkMode={isDarkMode} 
                                        activeColor={activeColor}
                                        activeShadow={activeShadow}
                                        activeBorder={activeBorder}
                                        activeBg={activeBg}
                                        activeHover={activeHover}
                                    />
                                } 
                            />
                            <Route 
                                path="/about" 
                                element={
                                <About 
                                    isDarkMode={isDarkMode} 
                                    activeColor={activeColor}
                                    activeShadow={activeShadow}
                                    activeBorder={activeBorder}
                                    activeBg={activeBg}
                                    activeHover={activeHover}
                                />} 
                            />
                            <Route 
                                path="/experiences" 
                                element={
                                    <Experiences 
                                        isDarkMode={isDarkMode} 
                                        activeColor={activeColor}
                                        activeShadow={activeShadow}
                                        activeBorder={activeBorder}
                                        activeBg={activeBg}
                                        activeHover={activeHover}
                                    />
                                } />
                            <Route 
                                path="/projects" 
                                element={
                                    <Projects 
                                        isDarkMode={isDarkMode} 
                                        activeColor={activeColor}
                                        activeShadow={activeShadow}
                                        activeBorder={activeBorder}
                                        activeBg={activeBg}
                                        activeHover={activeHover}
                                    />
                                } 
                            />
                            <Route 
                                path="/contect" 
                                element={
                                    <Contect 
                                        isDarkMode={isDarkMode} 
                                        activeColor={activeColor}
                                        activeShadow={activeShadow}
                                        activeBorder={activeBorder}
                                        activeBg={activeBg}
                                        activeHover={activeHover}
                                        activeGradient={activeGradient}
                                    />
                                } 
                            />
                        </Routes>
                    </div>
                </div>
            </ErrorBoundary>
        </HelmetProvider>  
    );
}

export default App;
