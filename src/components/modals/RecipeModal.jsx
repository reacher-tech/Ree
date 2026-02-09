import { useEffect } from "react";
import MenuCards from "../menucards";

const RecipeModal = ({ modalData, onClose }) => {
    // modalData can have COMPLETELY DIFFERENT structure from card props
    // Example: { recipeId, fullTitle, heroImage, fullDescription, ingredientsList, stepByStepInstructions, nutritionFacts, cookingTips, videoUrl, etc. }

  const {
    ingredients = [],
    instructions = [],
    nutrition = {},
  } = modalData || {};

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
        >
          ✕
        </button>

        <div className="p-6 md:p-8">
          {/* INGREDIENTS */}
          {ingredients.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                🥗 Ingredients
              </h3>
              <ul className="space-y-2">
                {ingredients.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INSTRUCTIONS */}
          {instructions.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                📝 Instructions
              </h3>
              <ol className="space-y-3">
                {instructions.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-bold">{index + 1}.</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* NUTRITION */}
          {Object.keys(nutrition).length > 0 && (
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Nutrition Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(nutrition).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-xs text-gray-500 capitalize">{key}</p>
                    <p className="font-bold text-amber-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default RecipeModal;