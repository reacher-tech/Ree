
import Layout from '../layouts/mainlayout';
import Intro from '../components/intro';
import Menu from '../components/menu';
import Toppings from '../components/toppings';
import features from '../assets/features.jpg';
import FeatureSection from '../components/feature'



const Home = ()=> {
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
        <Intro/>
        <Menu/>
         <Toppings/>
         <FeatureSection
         image={features}
         imageAlt='menu Feature'
         title= 'feature'
         features={FeaturesData}
         imageOnLeft={true}
         />
    </Layout>
);
}
export default Home;