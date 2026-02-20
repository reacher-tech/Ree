import { useEffect, useRef, useState } from 'react';
import Layout from "../layouts/mainlayout";
import menuimg from '../assets/menuimg.jpg';
import recipeimg from '../assets/recipeimg.jpg';
import logoimg from '../assets/logoimg.png';
import Footer from "../components/footer";

const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const fadeUp = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(40px)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
});

const fadeDir = (visible, fromLeft, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateX(0)' : `translateX(${fromLeft ? '-50px' : '50px'})`,
  transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
});

const AboutSection = ({ section }) => {
  const [ref, visible] = useReveal(0.12);

  return (
    <div ref={ref} className="w-full relative overflow-x-hidden">
      <div className="w-full md:w-[97%] flex flex-col md:flex-row border-l border-r m-4 border-[#672218] p-8 gap-8">

        
        {section.imageOnLeft && (
          <div className="w-full md:w-[50%]" style={fadeDir(visible, true, 0)}>
            <img
              src={section.image}
              alt={section.imageAlt}
              className="w-full rounded-xl object-cover p-4 md:p-12"
            />
          </div>
        )}

    
        <div className="pt-4 md:pt-18 gap-8 w-full md:w-[50%]">
          <h1
            className="text-2xl md:text-5xl font-bold text-amber-900 mb-6"
            style={fadeUp(visible, 100)}
          >
            {section.title}
          </h1>

          {section.features.map((feature, index) => (
            <div
              key={index}
              className={index > 0 ? 'pt-6' : ''}
              style={fadeUp(visible, 180 + index * 100)}
            >
              {feature.subtitle && (
                <h3 className="text-amber-900 text-2xl md:text-3xl mb-4">
                  {feature.subtitle}
                </h3>
              )}
              <p className="text-[#2C1332] mb-2 text-lg md:text-xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

    
        {!section.imageOnLeft && (
          <div className="w-full md:w-[50%]" style={fadeDir(visible, false, 0)}>
            <img
              src={section.image}
              alt={section.imageAlt}
              className="w-full rounded-xl object-cover p-4 md:p-12"
            />
          </div>
        )}

      </div>

    
      <div className="mx-4 h-px bg-[#672218]/20 overflow-hidden">
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(to right, #672218, #d97706, #672218)',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 400ms',
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const aboutSections = [
    {
      id: 1,
      image: menuimg,
      imageAlt: "Menu features",
      title: "Menu",
      features: [
        {
          subtitle: "Smart Menu Design",
          description: "Ree takes the stress out of deciding what to eat by offering a smart, intentionally curated menu built around how your body actually works."
        },
        {
          subtitle: "Nutritional Balance",
          description: "Every category is designed with nutritional balance and digestion timing in mind—so you're not just eating, you're eating right."
        },
        {
          subtitle: "Perfect Timing",
          description: "Whether you need a light boost, steady energy, or something deeply satisfying, the menu guides you toward meals that align with your body's needs at different times of the day."
        }
      ],
      imageOnLeft: true
    },
    {
      id: 2,
      image: recipeimg,
      imageAlt: "Recipe features",
      title: "Recipes",
      features: [
        {
          subtitle: "Easy & Healthy",
          description: "Our recipes are designed to be simple yet nutritious, making healthy eating accessible to everyone."
        },
        {
          subtitle: "Body-Friendly",
          description: "Each recipe is crafted to support your body's natural rhythms and nutritional needs throughout the day."
        },
        {
          subtitle: "Taste Meets Wellness",
          description: "We believe healthy food should taste amazing. Every recipe balances flavor with function."
        }
      ],
      imageOnLeft: false
    },
    {
      id: 3,
      image: logoimg,
      imageAlt: "Project Ree",
      title: "Portfolio",
      features: [
        {
          subtitle: "",
          description: "Ree represents my first year in the tech space and my first complete project released publicly. It serves as a foundation for my journey as a developer, reflecting my commitment to growth, learning, and continuous improvement. The purpose of Ree is to promote awareness, progress, and thoughtful iteration. Throughout its development, I embraced learning through experimentation, identifying gaps, and refining solutions. This project highlights my ability to adapt, problem-solve, and apply feedback in meaningful ways. Ree stands as a demonstration of my dedication to building well-structured, functional, and visually refined digital experiences. It marks an important milestone in my career and sets the standard for the quality, discipline, and intention I bring to every project. I appreciate the opportunity to share my work and the process behind creating purposeful, engaging web experiences."
        }
      ],
      imageOnLeft: true
    }
  ];

  return (
    <Layout>
      {aboutSections.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}
      <Footer />
    </Layout>
  );
};

export default About;