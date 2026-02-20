import MenuLayout from "../layouts/menulayout";
import { useState } from "react";
import RecipeModal from "../components/modals/RecipeModal";
import MenuCards from "../components/menucards";
import oatchiabowl from '../assets/oatchiabowl.jpg';
import eggtoast from '../assets/eggtoast.jpg';
import smoothie from '../assets/smoothie.jpg';
import omelet from '../assets/omelet.jpg';  
import yogrand from '../assets/yogrand.jpg';
import appleoatts from '../assets/appleoatts.jpg';
import oatpancakes from '../assets/oatpancakes.jpg';
import wrap from '../assets/wrap.jpg';
import cottagebowl from '../assets/cottagebowl.jpg';
import breadbeans from '../assets/breadbeans.jpg';
import oatsmoothies from '../assets/oatsmoothie.jpg';
import riceveggies from '../assets/riceveggies.jpg';
import millet from '../assets/millet.jpg';
import eggmuffin from '../assets/eggmuffin.jpg';
import Second from '../assets/Second.png';
import Seventh from '../assets/Seventh.jpg';

const Recipe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
    const recipes = [
        
  {
  id: 1,
  image: oatchiabowl,
  title: "Overnight Chia Oats",
  description: "Soaked oats and chia seeds for a light, filling, and gut-friendly breakfast.",
  calories: 310,
  time: "10 mins prep + overnight soak",
  digestionTime: "Early morning",
  ingredients: ["oats", "chia seeds", "milk", "honey"],
  instructions: ["Mix all ingredients and refrigerate overnight."],
  servings: "1",
  nutrition: { protein: "11g", carbs: "42g", fats: "9g", fiber: "10g" },
},
{
  id: 2,
  image: eggtoast,
  title: "Scrambled Eggs & Toast",
  description: "Classic protein-rich breakfast with whole-grain toast.",
  calories: 350,
  time: "15 mins",
  digestionTime: "Morning",
  ingredients: ["eggs", "whole wheat bread", "olive oil"],
  instructions: ["Scramble eggs and serve with toasted bread."],
  servings: "1",
  nutrition: { protein: "20g", carbs: "30g", fats: "16g", fiber: "5g" },
},

{
  id: 4,
  image: Seventh, //check home page for pic
  title: "Peanut Butter Banana Toast",
  description: "Quick energy-boosting toast with healthy fats.",
  calories: 330,
  time: "10 mins",
  digestionTime: "Morning",
  ingredients: ["bread", "peanut butter", "banana"],
  instructions: ["Toast bread, spread peanut butter, add banana slices."],
  servings: "1",
  nutrition: { protein: "13g", carbs: "38g", fats: "15g", fiber: "6g" },
},
{
  id: 5,
  image: omelet,
  title: "Omelette with Veggies",
  description: "Fluffy eggs loaded with light vegetables for easy digestion.",
  calories: 340,
  time: "20 mins",
  digestionTime: "Morning",
  ingredients: ["eggs", "onions", "bell peppers", "spinach"],
  instructions: ["Cook vegetables, add eggs, and fold gently."],
  servings: "1",
  nutrition: { protein: "22g", carbs: "14g", fats: "18g", fiber: "4g" },
},
{
  id: 6,
  image: yogrand,
  title: "Yogurt & Granola Cup",
  description: "Crunchy and creamy breakfast parfait.",
  calories: 300,
  time: "10 mins",
  digestionTime: "Mid-morning",
  ingredients: ["yogurt", "granola", "honey"],
  instructions: ["Layer yogurt and granola in a cup."],
  servings: "1",
  nutrition: { protein: "14g", carbs: "40g", fats: "8g", fiber: "5g" },
},
{
  id: 7,
  image: oatpancakes,
  title: "Oat Pancakes",
  description: "Soft pancakes made from blended oats.",
  calories: 370,
  time: "30 mins",
  digestionTime: "Morning",
  ingredients: ["oats", "eggs", "milk"],
  instructions: ["Blend ingredients and cook on pan."],
  servings: "1",
  nutrition: { protein: "16g", carbs: "50g", fats: "10g", fiber: "7g" },
},
{
  id: 8,
  image: appleoatts,
  title: "Apple Cinnamon Oats",
  description: "Warm oats flavored naturally with apple and spice.",
  calories: 340,
  time: "20 mins",
  digestionTime: "Morning",
  ingredients: ["oats", "apple", "cinnamon"],
  instructions: ["Cook oats with apple and cinnamon."],
  servings: "1",
  nutrition: { protein: "10g", carbs: "52g", fats: "7g", fiber: "8g" },
},
{
  id: 9,
  image: wrap,
  title: "Egg & Avocado Wrap",
  description: "Soft wrap filled with protein and healthy fats.",
  calories: 390,
  time: "20 mins",
  digestionTime: "Late morning",
  ingredients: ["wrap", "eggs", "avocado"],
  instructions: ["Cook eggs and wrap with avocado slices."],
  servings: "1",
  nutrition: { protein: "19g", carbs: "35g", fats: "20g", fiber: "6g" },
},
{
  id: 10,
  image: cottagebowl,
  title: "Cottage Cheese Fruit Bowl",
  description: "Light protein breakfast with natural sweetness.",
  calories: 260,
  time: "10 mins",
  digestionTime: "Mid-morning",
  ingredients: ["cottage cheese", "pineapple"],
  instructions:[ "Mix cottage cheese with fruit."],
  servings: "1",
  nutrition: { protein: "18g", carbs: "22g", fats: "5g", fiber: "3g" },
},
{
  id: 11,
  image: breadbeans,
  title: "Toast & Baked Beans",
  description: "Hearty breakfast with plant protein.",
  calories: 380,
  time: "20 mins",
  digestionTime: "Morning",
  ingredients: ["bread", "baked beans"],
  instructions: ["Heat beans and serve over toast."],
  servings: "1",
  nutrition: { protein: "17g", carbs: "55g", fats: "8g", fiber: "9g" },
},
{
  id: 12,
  image: oatsmoothies,
  title: "Smoothie Oats Drink",
  description: "Drinkable oats blended with fruit.",
  calories: 320,
  time: "10 mins",
  digestionTime: "Morning",
  ingredients: ["oats", "banana", "milk"],
  instructions: ["Blend all ingredients until smooth."],
  servings: "1",
  nutrition: { protein: "12g", carbs: "46g", fats: "8g", fiber: "6g" },
},
{
  id: 13,
  image: eggtoast,
  title: "Boiled Eggs & Toast",
  description: "Simple high-protein breakfast combo.",
  calories: 300,
  time: "15 mins",
  digestionTime: "Morning",
  ingredients: ["eggs", "bread"],
  instructions: ["Boil eggs and toast bread."],
  servings: "1",
  nutrition: { protein: "18g", carbs: "26g", fats: "14g", fiber: "4g" },
},
{
  id: 14,
  image: yogrand,
  title: "Banana Yogurt Smoothie",
  description: "Light and easy-to-digest smoothie.",
  calories: 250,
  time: "10 mins",
  digestionTime: "Early morning",
  ingredients: ["banana", "yogurt"],
  instructions: ["Blend until smooth."],
  servings: "1",
  nutrition: { protein: "11g", carbs: "38g", fats: "5g", fiber: "4g" },
},
{
  id: 15,
  image: Second,// use the peanut bowl
  title: "Peanut Oat Energy Bowl",
  description: "Sustained energy breakfast bowl.",
  calories: 400,
  time: "20 mins",
  digestionTime: "Morning",
  ingredients: ["oats", "peanut butter"],
  instructions: ["Cook oats and mix in peanut butter."],
  servings: "1",
  nutrition: { protein: "15g", carbs: "48g", fats: "16g", fiber: "8g" },
},
{
  id: 16,
  image: riceveggies,
  title: "Veggie Breakfast Rice",
  description: "Warm rice bowl with light vegetables.",
  calories: 360,
  time: "30 mins",
  digestionTime: "Late morning",
  ingredients: ["rice", "vegetables"],
  instructions: ["Cook rice and stir-fry vegetables."],
  servings: "1",
  nutrition: { protein: "9g", carbs: "62g", fats: "7g", fiber: "5g" },
},
{
  id: 17,
  image: oatsmoothies, //use oatsmothie 
  title: "Milk & Date Oats",
  description: "Naturally sweetened oat breakfast.",
  calories: 330,
  time: "20 mins",
  digestionTime: "Morning",
  ingredients: ["oats", "dates", "milk"],
  instructions: ["Cook oats with chopped dates and milk."],
  servings: "1",
  nutrition: { protein: "11g", carbs: "54g", fats: "7g", fiber: "8g" },
},
{
  id: 18,
  image: eggmuffin,
  title: "Egg Muffins",
  description: "Baked eggs perfect for grab-and-go mornings.",
  calories: 280,
  time: "30 mins",
  digestionTime: "Morning",
  ingredients: ["eggs", "vegetables"],
  instructions: ["Bake egg mixture in muffin tray."],
  servings: "2",
  nutrition: { protein: "20g", carbs: "10g", fats: "15g", fiber: "3g" },
},
{
  id: 19,
  image: Second, 
  title: "Fruit & Nut Oats",
  description: "Balanced oats with crunch and sweetness.",
  calories: 370,
  time: "25 mins",
  digestionTime: "Morning",
  ingredients: ["oats", "nuts", "fruits"],
  instructions: ["Cook oats and mix in toppings."],
  servings: "1",
  nutrition: { protein: "14g", carbs: "50g", fats: "12g", fiber: "7g" },
},
{
  id: 20,
  image: Seventh, //use existing fitting 
  title: "Toast with Honey & Seeds",
  description: "Light breakfast with quick energy.",
  calories: 260,
  time: "10 mins",
  digestionTime: "Early morning",
  ingredients: ["bread", "honey", "seeds"],
  instructions: ["Toast bread, drizzle honey, add seeds."],
  servings: "1",
  nutrition: { protein: "7g", carbs: "38g", fats: "8g", fiber: "4g" },
},
{
  id: 21,
  image: millet,
  title: "Warm Millet Porridge",
  description: "Gentle-on-the-stomach grain porridge.",
  calories: 310,
  time: "25 mins",
  digestionTime: "Morning",
  ingredients: ["millet", "milk"],
  instructions: ["Cook millet until soft and creamy."],
  servings: "1",
  nutrition: { protein: "9g", carbs: "48g", fats: "6g", fiber: "5g" },
},

    ];


     const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };
    return (
        <MenuLayout>
            <div className=" w-full max-w-7xl mx-auto p-6 md:p-8 ">
                <h1 className="text-4xl font-bold text-[#2C1332] mb-8">
                    Breakfast Recipes
                </h1>
                
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
  {recipes.map((recipe) => (
    <MenuCards
      key={recipe.id}
      {...recipe}
      onOpen={openModal} 
    />
  ))}
</div>

{isModalOpen && selectedRecipe && (
  <RecipeModal
    modalData={selectedRecipe}
    onClose={closeModal}
  />
)}

            </div>
        </MenuLayout>
    );
};

export default Recipe;