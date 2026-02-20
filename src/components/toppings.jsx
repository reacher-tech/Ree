import { useEffect, useRef, useState } from 'react';
import coconutflakes from '../assets/coconutflakes.jpg';
import driedfruits from '../assets/driedfruits.jpg';

const Toppings = () => {
  const [visibleIds, setVisibleIds] = useState(new Set());
  const cardRefs = useRef({});

  const items = [
    {
      id: 1,
      name: "Toasted Coconut Flakes",
      image: coconutflakes,
      description: "Lightly toasted coconut flakes that add a delicate crunch and rich, natural flavor.",
      benefits: "Packed with healthy fats that support brain energy and metabolism while staying naturally low in sugar.",
      bestPairedWith: ["Fruit Bowls ", "Smoothies ", "Oatmeal"],
      colSpan: 'col-span-1', rowSpan: 'row-span-2', border: 'border-r border-l',
    },
    {
      id: 2,
      name: "Naturally Dried Fruits",
      image: driedfruits,
      description: "Gently dried fruits that add natural sweetness and vibrant flavor.",
      benefits: "Provides quick energy, essential minerals, and fiber—sweetened by nature only.",
      bestPairedWith: ["Oatmeal ", "Granola ", "Snack Bowls "],
      colSpan: 'col-span-1', rowSpan: 'row-span-2', border: 'border-r',
    },
    {
      id: 3,
      name: "Nut & Seed Power Mix",
      icon: "nut",
      description: "A roasted blend of almonds, peanuts, and seeds for bold crunch and natural protein.",
      benefits: "High in plant protein and healthy fats—ideal for sustained energy and muscle recovery.",
      bestPairedWith: ["Protein Bowls ", "Snack Packs ", "Breakfast Plates"],
      colSpan: 'col-span-1', rowSpan: 'row-span-1', border: 'border-b',
    },
    {
      id: 4,
      name: "Cacao Nibs",
      icon: "chocolate",
      description: "Pure crushed cacao beans delivering rich chocolate flavor with no added sugar.",
      benefits: "Loaded with antioxidants and magnesium to boost mood and support heart health.",
      bestPairedWith: ["Smoothie Bowls ", "Yogurt ", "Granola Mixes "],
      colSpan: 'col-span-1', rowSpan: 'row-span-1', border: 'border-r',
    },
    {
      id: 5,
      name: "Chia Seed Crunch",
      icon: "seedling",
      description: "Tiny super seeds that deliver big nutrition with every sprinkle.",
      benefits: "Rich in omega-3 fatty acids and fiber to support gut health, heart health, and appetite control.",
      bestPairedWith: ["Overnight Oats ", "Yogurt ", "Smoothies "],
      colSpan: 'col-span-1', rowSpan: 'row-span-1',
    },
    {
      id: 6,
      name: "Protein Crispies",
      icon: "zap",
      description: "Light, crunchy protein bites made from plant or whey protein.",
      benefits: "Boosts protein intake while keeping meals light, crunchy, and satisfying.",
      bestPairedWith: ["Fitness Bowls ", "Breakfast Jars ", "Smoothies"],
      colSpan: 'col-span-1', rowSpan: 'row-span-1', border: 'border-r border-t',
    },
  ];

  useEffect(() => {
    const observers = [];

    items.forEach((item, index) => {
      const el = cardRefs.current[item.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleIds(prev => new Set([...prev, item.id]));
            }, index * 120);
            observer.disconnect();
          }
        },
        { threshold: 0.12 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        .topping-card {
          opacity: 0;
          transform: translateY(32px) scale(0.97);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .topping-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .topping-img {
          transition: transform 0.45s ease;
        }
        .topping-card:hover .topping-img {
          transform: scale(1.05);
        }
        .paired-tag {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 999px;
          background: rgba(107, 62, 38, 0.1);
          color: #6b3e26;
          font-size: 0.78rem;
          font-weight: 600;
          margin: 2px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .topping-card:hover .paired-tag {
          background: rgba(44, 19, 53, 0.12);
          color: #2C1332;
        }
      `}</style>

      <div className="w-full relative overflow-x-hidden">
        <div className="w-full md:w-[97%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 border-b border-[#672218] m-4 p-6">
          {items.map((item) => {
            const isVisible = visibleIds.has(item.id);
            return (
              <div
                key={item.id}
                ref={el => cardRefs.current[item.id] = el}
                className={`topping-card ${isVisible ? 'visible' : ''} ${item.colSpan ?? ''} ${item.rowSpan ?? ''} ${item.border ?? ''} p-2 flex flex-col`}
              >
                {item.image && (
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="topping-img w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
                    />
                  </div>
                )}

                <div className="w-full p-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-3">
                    {item.name}
                  </h1>
                  <p className="text-lg mb-2 text-[#2C1332]">{item.description}</p>
                  <p className="text-lg mb-3 text-[#2C1332]">{item.benefits}</p>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.bestPairedWith.map((tag) => (
                      <span key={tag} className="paired-tag">{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Toppings;