import '../index.css';
import Header from '../components/header';
const Layout=({children})=>{
    return(
    <div className="Mainlayout">
        
            <Header/>
             
             <main className='Content'>
               {children}
             </main>
             <footer className='footer'>

             </footer>
        </div>
    )
};
export default Layout