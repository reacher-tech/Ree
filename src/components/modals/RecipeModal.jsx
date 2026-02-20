import { useEffect } from "react";

const RecipeModal = ({ modalData, onClose }) => {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // If no modalData, don't render
  if (!modalData) return null;

  // Extract data from modalData
  const {
    title = "Recipe Details",
    image,
    ingredients = [],
    instructions = [],
    servings = "1",
    nutrition = {},
    time,
    calories,
    description
  } = modalData;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#eedac7] shadow-[#2C1332] rounded-xl max-w-3xl w-full max-h-[70vh] overflow-y-scroll no-scrollbar shadow-2xl relative "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-[#2C1332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Header (if exists) */}
        {image && (
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                {title}
              </h2>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title (if no image) */}
          {!image && (
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-[#2C1332] text-lg mb-6 leading-relaxed">
              {description}
            </p>
          )}

          {/* Quick Stats */}
          {(time || calories || servings) && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {time && (
                <div className="bg-[#2C1332] p-4 rounded-lg text-center">
                  <div className="text-2xl mb-1">⏱️</div>
                  <p className="text-xl text-white mb-1">Time</p>
                  <p className="font-bold text-amber-900">{time}</p>
                </div>
              )}
              
              {calories && (
                <div className="bg-[#2C1332] p-4 rounded-lg text-center">
                  <div className="text-2xl mb-1">🔥</div>
                  <p className="text-xl text-white mb-1">Calories</p>
                  <p className="font-bold text-amber-900">{calories}</p>
                </div>
              )}
              
              {servings && (
                <div className="bg-[#2C1332] p-4 rounded-lg text-center">
                  <div className="text-2xl mb-1">🍽️</div>
                  <p className="text-xl text-white mb-1">Servings</p>
                  <p className="font-bold text-amber-900">{servings}</p>
                </div>
              )}
            </div>
          )}

          {/* INGREDIENTS */}
          {ingredients.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <span>🥗</span>
                Ingredients
              </h3>
              <ul className="space-y-3">
                {ingredients.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 bg-[#2C1332] p-3 rounded-lg"
                  >
                    <span className="text-amber-700 font-bold mt-1">✓</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INSTRUCTIONS */}
          {instructions.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <span>📝</span>
                Instructions
              </h3>
              <ol className="space-y-4">
                {instructions.map((step, index) => (
                  <li 
                    key={index} 
                    className="flex gap-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-700 text-[#2C1332] rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-[#2C1332] leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* NUTRITION */}
          {Object.keys(nutrition).length > 0 && (
            <div className="bg-[#2C1332] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Nutrition Facts (per serving)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(nutrition).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-xl text-white capitalize">{key}</p>
                    <p className="text-lg font-bold text-amber-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button 
              className="flex-1 bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              Save Recipe
            </button>
            <button 
              className="flex-1 bg-gray-200 text-[#2C1332] py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;