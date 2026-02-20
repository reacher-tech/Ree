import Layout from '../layouts/mainlayout';
import '../index.css';
import Hero from '../components/hero'
import ItemSlide from '../components/carousel';
import Footer from '../components/footer';
import Toppings from '../components/toppings';
import Menu from '../components/menu';
import features from '../assets/features.jpg';
import FeatureSection from '../components/feature';

const LandingPage = ()=> {
    const FeaturesData= [
         {
      subtitle: "menu",
      description: "Ree provides already categorized menu that are based on the nutritional and digestion rate of each recipe to determine best time for consumption easy digestion and body nutrition needs"
    },
    {
      subtitle: "recipes",
      description: "our recipe are mostly low effects to help consumers make quick and easy healthy meal choices that fix their bodily and taste needs"
    }

    ]
    return(
        <Layout>
             <Hero/>
             <Menu/>
              <Toppings/>
              
             <ItemSlide/>
             <FeatureSection
         image={features}
         imageAlt='menu Feature'
         title= 'feature'
         features={FeaturesData}
         imageOnLeft={true}
         />
             <Footer/>
           
        
        </Layout>
    );
}
export default LandingPage;