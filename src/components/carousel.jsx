import { useState } from "react";
import lunch from "../assets/lunch.jpg";
import yogs from "../assets/yogs.jpg";
import oat from "../assets/oat.jpg";
import snackbar from "../assets/snackbar.jpg";
import drinks from "../assets/drinks.jpg";
import dinner from "../assets/dinner.jpg";
import breakfast from "../assets/breakfast.jpg";

const ItemSlide = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    
    const Slideitems = [
        { 
            id: 1, 
            Image: lunch,
            title: 'Lunch',
            description: 'Ree provides you with a list of curated lunch recipes, with the sole purpose of easing your kitchen stress, giving you a tasty and healthy meal.'
        },
        { 
            id: 2, 
            Image: yogs, 
            title: 'Yogurts',
            description: 'Discover delicious yogurt-based recipes and healthy snack ideas perfect for any time of day.'
        },
        { 
            id: 3,
            Image: oat, 
            title: 'Oats',
            description: 'Nutritious oat recipes to help you kickstart your productive day with energy and health.'
        },
        { 
            id: 4,
            Image: snackbar, 
            title: 'Snacks',
            description: 'Quick and easy snack recipes that satisfy cravings while keeping you healthy.'
        },
        { 
            id: 5,
            Image: drinks,
            title: 'Juice', 
            description: 'Refreshing juice and beverage recipes to quench your thirst and boost your energy.'
        },
        { 
            id: 6, 
            Image: dinner, 
            title: 'Dinner', 
            description: 'Delicious dinner ideas to help you end your day with a satisfying and healthy meal.'
        },
        {
            id: 7,
            Image: breakfast,
            title: 'Breakfast', 
            description: 'Ree provides you with a list of curated breakfast recipes, with the sole purpose of easing your kitchen stress.'
        }
    ];


    const getItemsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
        return 3;
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    useState(() => {
        const handleResize = () => setItemsPerView(getItemsPerView());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const startIndex = Math.max(0, Math.min(activeIndex - Math.floor(itemsPerView / 2), Slideitems.length - itemsPerView));

    return (
        <div className="w-full px-4 py-8 md:px-8 lg:px-12">
            
            <div className="max-w-7xl mx-auto mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900">
                    Explore Recipes
                </h2>
            </div>

            
            <div className="relative max-w-7xl mx-auto">
                
                <div className="bg-gradient-to-r from-[#f4e8f7] to-[#fef3e8] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 relative">
                    
                    
                    <button 
                        onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                        disabled={activeIndex === 0}
                        className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-amber-50 text-[#2C1332] p-3 lg:p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 shadow-xl items-center justify-center"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                
                    <button 
                        onClick={() => setActiveIndex(Math.min(Slideitems.length - 1, activeIndex + 1))}
                        disabled={activeIndex === Slideitems.length - 1}
                        className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-amber-50 text-[#2C1332] p-3 lg:p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 shadow-xl items-center justify-center"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    
                    <div className="overflow-hidden px-2 md:px-12 lg:px-16">
                        <div className="flex justify-center items-center gap-2 md:gap-4">
                            {Slideitems.slice(startIndex, startIndex + itemsPerView).map((Items, index) => {
                                const mainIndex = startIndex + index;
                                const isActive = mainIndex === activeIndex;
                                
                                return (
                                    <div 
                                        key={Items.id}
                                        onClick={() => setActiveIndex(mainIndex)}
                                        className={`
                                            cursor-pointer transition-all duration-500 rounded-xl md:rounded-2xl overflow-hidden
                                            ${isActive 
                                                ? 'w-full md:w-80 lg:w-96 h-[400px] md:h-[450px] shadow-2xl scale-100 md:scale-105 z-10' 
                                                : 'hidden md:block md:w-64 lg:w-72 h-[320px] md:h-96 shadow-lg opacity-60 hover:opacity-80 scale-95'
                                            }
                                        `}
                                    >
                                        <div className={`h-full flex flex-col ${isActive ? 'bg-gradient-to-b from-amber-100 to-white' : 'bg-white'}`}>
                                            
                                        
                                            <div className="h-1/2 md:h-2/3 overflow-hidden">
                                                <img 
                                                    src={Items.Image} 
                                                    alt={Items.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            
                                            
                                            <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
                                                <h3 className={`font-bold mb-2 ${
                                                    isActive ? 'text-2xl md:text-3xl text-amber-900' : 'text-lg md:text-xl text-gray-700'
                                                }`}>
                                                    {Items.title}
                                                </h3>
                                                
                                                {isActive && (
                                                    <>
                                                        <p className="text-amber-800 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                                                            {Items.description}
                                                        </p>
                                                        <button to='/' className="bg-amber-700 text-white px-4 md:px-6 py-2 rounded-full hover:bg-amber-800 transition-colors w-fit text-sm md:text-base">
                                                            Explore
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    
                    <div className="flex md:hidden justify-center gap-4 mt-6 ">
                        <button 
                            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                            disabled={activeIndex === 0}
                            className="bg-white text-[#2C1332] px-6 py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md flex-1 max-w-[140px] font-semibold"
                        >
                            ← Prev
                        </button>
                        
                        <button 
                            onClick={() => setActiveIndex(Math.min(Slideitems.length - 1, activeIndex + 1))}
                            disabled={activeIndex === Slideitems.length - 1}
                            className="bg-white text-[#2C1332] px-6 py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md flex-1 max-w-[140px] font-semibold"
                        >
                            Next →
                        </button>
                    </div>

                    
                    <div className="flex justify-center gap-2 mt-6 md:hidden">
                        {Slideitems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === activeIndex 
                                        ? 'bg-amber-700 w-6 md:w-8 h-2 md:h-3' 
                                        : 'bg-amber-300 w-2 md:w-3 h-2 md:h-3 hover:bg-amber-500'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    
                    <div className="text-center md:hidden mt-4 text-amber-800 text-sm md:text-base font-semibold">
                        {activeIndex + 1} / {Slideitems.length}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemSlide;