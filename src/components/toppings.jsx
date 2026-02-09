import coconutflakes from '../assets/coconutflakes.jpg'
import driedfruits from '../assets/driedfruits.jpg';

const Toppings = () => {
    const items=[
       
  {
    id: 1,
    name: "Toasted Coconut Flakes",
    image: coconutflakes,
    description:
      "Lightly toasted coconut flakes that add a delicate crunch and rich, natural flavor.",
    benefits:
      "Packed with healthy fats that support brain energy and metabolism while staying naturally low in sugar.",
    bestPairedWith: ["Fruit Bowls ", "Smoothies ", "Oatmeal"],
     colSpan: 'col-span-1', rowSpan: 'row-span-2', border: 'border-r border-l ' ,
  },

  
  {
    id: 2,
    name: "Naturally Dried Fruits",
    image: driedfruits,
    description:
      "Gently dried fruits that add natural sweetness and vibrant flavor.",
    benefits:
      "Provides quick energy, essential minerals, and fiber—sweetened by nature only.",
    bestPairedWith: ["Oatmeal ", "Granola ", "Snack Bowls "],
         colSpan: 'col-span-1', rowSpan: 'row-span-2', border: 'border-r',
  },

  {
    id: 3,
    name: "Nut & Seed Power Mix",
    icon: "nut",
    description:
      "A roasted blend of almonds, peanuts, and seeds for bold crunch and natural protein.",
    benefits:
      "High in plant protein and healthy fats—ideal for sustained energy and muscle recovery.",
    bestPairedWith: ["Protein Bowls ", "Snack Packs ", "Breakfast Plates"],
     colSpan: 'col-span-1', rowSpan: 'row-span-1',border: 'border-b ',
  },

  {
    id: 4,
    name: "Cacao Nibs",
    icon: "chocolate",
    description:
      "Pure crushed cacao beans delivering rich chocolate flavor with no added sugar.",
    benefits:
      "Loaded with antioxidants and magnesium to boost mood and support heart health.",
    bestPairedWith: ["Smoothie Bowls ", "Yogurt ", "Granola Mixes "],
       colSpan: 'col-span-1', rowSpan: 'row-span-1', border:'border-r'
  },

  {
    id: 5,
    name: "Chia Seed Crunch",
    icon: "seedling",
    description:
      "Tiny super seeds that deliver big nutrition with every sprinkle.",
    benefits:
      "Rich in omega-3 fatty acids and fiber to support gut health, heart health, and appetite control.",
    bestPairedWith: ["Overnight Oats ", "Yogurt ", "Smoothies "],
     colSpan: 'col-span-1', rowSpan: 'row-span-1', 
   
  },

  {
    id: 6,
    name: "Protein Crispies",
    icon: "zap",
    description:
      "Light, crunchy protein bites made from plant or whey protein.",
    benefits:
      "Boosts protein intake while keeping meals light, crunchy, and satisfying.",
    bestPairedWith: ["Fitness Bowls ", "Breakfast Jars ", "Smoothies"],
       colSpan: 'col-span-1', rowSpan: 'row-span-1', border: 'border-r border-t',
  },

 
    ]
return(
      <div className="w-full relative overflow-x-hidden">
  <div
    className="
      w-full
      md:w-[97%]
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      grid-rows-auto
      gap-4
      border-b border-[#672218]
      m-4
      p-6
    "
  >
    {items.map((item) => (
      <div
        key={item.id}
        className={`
          ${item.colSpan ?? ""}
          ${item.rowSpan ?? ""}
          ${item.border ?? ""}
          p-2
          flex
          flex-col
        `}
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="
              w-full
              h-40
              sm:h-48
              md:h-52
              lg:h-56
              object-cover
              mb-4
              rounded-lg
            "
          />
        )}

        <div className="w-full p-2">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
            {item.name}
          </h1>

          <p className="text-lg mb-2 text-[#2C1332]">
            {item.description}
          </p>

          <p className="text-lg mb-2 text-[#2C1332]">
            {item.benefits}
          </p>

          <p className="text-lg text-[#2C1332]">
            {item.bestPairedWith}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

)
}
export default Toppings;