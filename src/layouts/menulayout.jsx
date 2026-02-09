import '../index.css';
import MenuHeader from '../components/menuheader';
const MenuLayout=({children})=>{
    return(
    <div className="Menulayout">
        
            <MenuHeader/>
             
             <main className='flex-1 ml-20'>
               {children}
             </main>
             <footer>

             </footer>
        </div>
    )
};
export default MenuLayout