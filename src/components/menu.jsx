import {
  Dumbbell,
  Cookie,
  Coffee,
  Utensils,
  CupSoda
} from "lucide-react";
import { NavLink } from "react-router-dom";


const Menu= ()=> {
  return(
      <div className='relative w-[95%] flex  md:flex-row h-20 m-4 border-[1px] border-r-0 border-l-0 border-[#2C1335]'>
       <nav className="w-full h-12 p-2 ">
        <ul className="w-full h-full flex justify-evenly ">
        <li>
          <NavLink
          to='/Breakfastmenu'>
             <Dumbbell className="w-15 h-10 text-[#6b3e26]"/>
             proteinbars
            </NavLink> 
             </li>

             <li>
          <NavLink>
             <Coffee className="w-15 h-10 text-[#6b3e26]"/>
             breakfast
            </NavLink> 
             </li>
            
            <li>
          <NavLink>
             <Cookie className="w-15 h-10 text-[#6b3e26]"/>
            snacks
            </NavLink> 
             </li>
             <li>
          <NavLink>
             <Utensils className="w-15 h-10 text-[#6b3e26]"/>
             lunch
            </NavLink> 
             </li>
             <li>
          <NavLink>
             <CupSoda className="w-15 h-10 text-[#6b3e26]"/>
             Drinks
            </NavLink> 
             </li>
       </ul>
       </nav>
      </div>
  );
}
export default Menu;