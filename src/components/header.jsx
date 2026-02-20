import ree from '../assets/ree.png';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger mount animation
    const t = setTimeout(() => setMounted(true), 50);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Ree' },
    { to: '/About', label: 'About' },
    { to: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        .header-root {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          /* slide down from above on mount */
          transform: ${mounted ? 'translateY(0)' : 'translateY(-100%)'};
          opacity: ${mounted ? '1' : '0'};
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.45s ease,
                      box-shadow 0.3s ease,
                      backdrop-filter 0.3s ease;
          /* elevate + blur on scroll */
          box-shadow: ${scrolled ? '0 4px 24px rgba(44,19,50,0.25)' : '0 1px 4px rgba(44,19,50,0.08)'};
        }

        .nav-link-desktop {
          position: relative;
          color: white;
          font-size: 1.1rem;
          padding-bottom: 4px;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .nav-link-desktop::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: #d97706;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link-desktop:hover { color: #d99470; }
        .nav-link-desktop:hover::after,
        .nav-link-desktop.active::after { transform: scaleX(1); }
        .nav-link-desktop.active { color: #d99470; }

        /* stagger desktop nav links */
        .nav-item { opacity: 0; transform: translateY(-10px); }
        .nav-item.shown {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        /* logo spin-in */
        .logo-img {
          opacity: 0;
          transform: rotate(-15deg) scale(0.8);
          transition: opacity 0.5s ease 0.15s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
        }
        .logo-img.shown {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        /* search bar slide in */
        .search-wrap {
          opacity: 0;
          transform: translateX(-16px);
          transition: opacity 0.45s ease 0.25s, transform 0.45s ease 0.25s;
        }
        .search-wrap.shown {
          opacity: 1;
          transform: translateX(0);
        }

        /* mobile menu items stagger */
        .mobile-item {
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .mobile-item.open {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <header className={`header-root bg-gradient-to-r from-[#D4A373]/70 via-[#6b3e26]/90 to-[#2C1332]/95 ${scrolled ? 'backdrop-blur-md' : ''}`}>
        <div className="flex flex-wrap items-center justify-between p-4 lg:px-8 gap-4">

        
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <NavLink to='/'>
              <img
                src={ree}
                alt="logo"
                className={`logo-img w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0 ${mounted ? 'shown' : ''}`}
              />
            </NavLink>

            <div className={`search-wrap relative flex-1 max-w-md lg:max-w-lg ${mounted ? 'shown' : ''}`}>
              <svg
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-amber-700"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
            <ul className='flex gap-6 xl:gap-8'>
              {navLinks.map(({ to, label }, i) => (
                <li
                  key={to}
                  className={`nav-item ${mounted ? 'shown' : ''}`}
                  style={{ transitionDelay: mounted ? `${300 + i * 80}ms` : '0ms' }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) => `nav-link-desktop ${isActive ? 'active' : ''}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              style={{ transition: 'transform 0.3s ease', transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        
        <nav className={`lg:hidden overflow-hidden transition-all duration-350 ease-in-out ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <ul className='flex flex-col bg-[#2C1332]/95 text-white'>
            {navLinks.map(({ to, label }, i) => (
              <li
                key={to}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-item ${isMenuOpen ? 'open' : ''} border-b border-white/10 last:border-b-0`}
                style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : '0ms' }}
              >
                <NavLink
                  to={to}
                  className='block px-6 py-4 hover:bg-white/10 hover:text-[#d99470] transition-colors duration-200'
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;