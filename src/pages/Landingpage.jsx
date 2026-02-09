import Layout from '../layouts/mainlayout';
import '../index.css';
import Hero from '../components/hero'
import ItemSlide from '../components/carousel';
import Footer from '../components/footer';

const LandingPage = ()=> {
    return(
        <Layout>
             <Hero/>;
             <ItemSlide/>;
             <Footer/>
           
        
        </Layout>
    );
}
export default LandingPage;