import { useState } from "react";
import { Dumbbell, Cookie, Coffee, Utensils, CupSoda, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const MenuHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 1, icon: Dumbbell, label: "Fitness", path: "/Recipes" },
        { id: 2, icon: Coffee, label: "Breakfast", path: "/Recipes" },
        { id: 3, icon: Cookie, label: "Snacks", path: "/Recipes" },
        { id: 4, icon: Utensils, label: "Meals", path: "/Recipes" },
        { id: 5, icon: CupSoda, label: "Drinks", path: "/Recipes" }
    ];

    return (
        <aside 
            className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-[#2C1332] via-[#3d1a45] to-[#2C1332] shadow-2xl transition-all duration-300 z-50 ${
                isOpen ? 'w-64' : 'w-20'
            }`}
        >
            
            <div className="flex justify-end p-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 outline-0 bg-amber-700 hover:bg-amber-600 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Toggle sidebar"
                >
                    <ChevronRight 
                        className={`w-6 h-6  text-white transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>
            </div>

            
            <nav className={`flex flex-col gap-2 mt-8 ${isOpen ? 'px-3':'px-2'}`}>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group ${
                                    isActive ? 'shadow-lg' : ''
                                } ${isOpen ? 'justify-start' : 'justify-center'}`
                            }
                        >
                            
                            <Icon 
                                className={`w-10 h-10 text-amber-200 transition-all duration-300 group-hover:text-white group-hover:scale-110 `}
                            />
                            
                            
                            <span 
                                className={`font-semibold text-white whitespace-nowrap overflow-hidden transition-all duration-300 ${
                                    isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                                }`}
                            >
                                {item.label}
                            </span>
                        </NavLink>
                    );
                })}
            </nav>

        
            <div className="absolute bottom-8 left-0 right-0 px-4">
                <div className={`flex items-center gap-3 p-3 rounded-lg bg-white/10 ${
                    isOpen ? 'justify-start' : 'justify-center'
                }`}>
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                        R
                    </div>
                    {isOpen && (
                        <div className="text-white text-sm overflow-hidden">
                            <p className="font-semibold"> <NavLink to='/'>Ree Recipes </NavLink></p>
                            <p className="text-xs text-amber-200">v1.0</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default MenuHeader;