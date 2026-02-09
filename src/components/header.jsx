import ree from '../assets/ree.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="w-full bg-gradient-to-r from-[#D4A373]/70 via-[#6b3e26]/90 to-[#2C1332]/95 shadow-lg">
            <div className="flex flex-wrap items-center justify-between p-4 lg:px-8 gap-4">
                
              
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    <NavLink to='/'>
                    <img 
                        src={ree} 
                        alt="logo" 
                        className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0 border-b-2 border-transparent bg-gradient-to-r from-[#6b3e26] via-[#6b3e26] to-amber-900 bg-[length:100%_4px] bg-no-repeat bg-bottom' 
                    /> 
                    
                   </NavLink>
                    <div className="relative hidden sm:block flex-1 max-w-md lg:max-w-lg">
                        <svg 
                            className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-amber-700" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                            type='search' 
                            placeholder='search recipes' 
                            className='w-full pl-9 md:pl-12 pr-4 py-1.5 md:py-2 rounded-full bg-amber-50 text-[#6B3E26] placeholder-[#D4A373] focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm md:text-base'
                        />
                    </div>
                </div>

               
                <nav className='hidden lg:flex'>
                    <ul className='flex gap-6 xl:gap-8 text-lg xl:text-xl text-white'>
                        <li>
                            <NavLink 
                        to='/Home'
                        className='cursor-pointer hover:text-[#d99470] transition-colors duration-300 border-b-2 border-transparent hover:border-amber-900 pb-1'>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                        to='/About'
                        className='cursor-pointer hover:text-[#d99470] transition-colors duration-300 border-b-2 border-transparent hover:border-amber-900 pb-1'>
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                        to='/Contact'
                        className='cursor-pointer hover:text-[#d99470] transition-colors duration-300 border-b-2 border-transparent hover:border-amber-900 pb-1'>
                            Contact
                        </NavLink>
                        </li>
                    </ul>
                </nav>

                
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

           
            <div className="sm:hidden px-4 pb-4">
                <div className="relative w-full">
                    <svg 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-700" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                        type='search' 
                        placeholder='search recipes' 
                        className='w-full pl-10 pr-4 py-2 rounded-full bg-amber-50 text-[#6B3E26] placeholder-[#D4A373] focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm'
                    />
                </div>
            </div>

          
            <nav className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className='flex flex-col bg-[#2C1332]/95 text-white'>
                    <li 
                        onClick={() => setIsMenuOpen(false)}
                        className='px-6 py-4 hover:bg-white/10 hover:text-[#d99470] transition-colors duration-300 border-b border-white/10 cursor-pointer'
                    >
                        <NavLink
                        to='/Home'>
                        Home
                        </NavLink>
                    </li>
                    <li 
                        onClick={() => setIsMenuOpen(false)}
                        className='px-6 py-4 hover:bg-white/10 hover:text-[#d99470] transition-colors duration-300 border-b border-white/10 cursor-pointer'
                    >
                        <NavLink
                        to='/About'>
                        About
                        </NavLink>
                    </li>
                    <li 
                        onClick={() => setIsMenuOpen(false)}
                        className='px-6 py-4 hover:bg-white/10 hover:text-[#d99470] transition-colors duration-300 cursor-pointer'
                    >
                        <NavLink
                        to='/Contact'>
                        Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;