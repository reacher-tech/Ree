import { useState, useEffect } from "react";
import { Dumbbell, Cookie, Coffee, Utensils, CupSoda } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { to: "/Recipes", icon: Dumbbell, label: "Protein Bars" },
  { to: "/Recipes", icon: Coffee,   label: "Breakfast" },
  { to: "/Recipes", icon: Cookie,   label: "Snacks" },
  { to: "/Recipes", icon: Utensils, label: "Lunch" },
  { to: "/Recipes", icon: CupSoda,  label: "Drinks" },
];

const Menu = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .menu-link {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 6px 10px;
          color: #6b3e26;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 10px;
          transition: color 0.25s ease, background 0.25s ease;
          text-decoration: none;
        }

        .menu-link svg {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.25s ease;
        }

        .menu-link:hover svg,
        .menu-link.active svg {
          transform: translateY(-3px) scale(1.18);
          color: #2C1335;
        }

        .menu-link:hover,
        .menu-link.active {
          color: #2C1335;
          
        }

        /* animated underline dot */
        .menu-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 18px;
          height: 2.5px;
          border-radius: 2px;
          background: #6b3e26;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .menu-link:hover::after,
        .menu-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* stagger-in */
        .menu-item {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .menu-item.shown {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="relative w-[95%] flex md:flex-row h-20 m-4 border-y border-[#2C1335]/30">
        <nav className="w-full h-full flex items-center px-2">
          <ul className="w-full flex justify-evenly items-center">
            {menuItems.map(({ to, icon: Icon, label }, index) => (
              <li
                key={label}
                className="menu-item"
                style={{
                  ...(visible && {
                    opacity: 1,
                    transform: 'translateY(0)',
                    transitionDelay: `${index * 80}ms`,
                  }),
                }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `menu-link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon size={22} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;