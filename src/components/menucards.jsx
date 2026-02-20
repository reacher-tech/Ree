import RecipeModal from "./modals/RecipeModal";

const MenuCards = ({
  id,
  image,
  title,
  description,
  calories,
  time,
  digestionTime,
  onOpen, 
  ...recipe
}) => {
  return (
    <div
      onClick={() => onOpen({ id, image, title, description, calories, time, digestionTime, ...recipe })}
      className=" bg-gradient-to-r from-[#2C1332] via-[#3d1a45] to-[#2C1332] rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
    >
      <div className="relative h-48 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{title}</h3>

        {description && (
          <p className="text-white text-sm mb-3 line-clamp-2">{description}</p>
        )}

        {digestionTime && (
          <p className="text-amber-700 text-xs mb-3 font-medium">
            ⏰ {digestionTime}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-white">
          {time && (
            <div className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{time}</span>
            </div>
          )}

          {calories && (
            <div className="flex items-center gap-1">
              <span>🔥</span>
              <span>{calories} cal</span>
            </div>
          )}
        </div>

        <button className="mt-4 w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors text-sm font-semibold">
          View Full Recipe
        </button>
      </div>
    </div>
  );
};

export default MenuCards;
