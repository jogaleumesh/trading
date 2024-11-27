const Card = ({ icon, title, value, subTitle, equityLevel, equityColor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div
            className={`w-12 h-12 ${icon.bgColor} ${icon.textColor} flex items-center justify-center rounded-full`}
          >
            {icon.emoji}
          </div>
          <div className="ml-4">
            <h2 className="text-gray-700 font-semibold">{title}</h2>
            <p className="text-gray-400 text-sm">{subTitle}</p>
          </div>
        </div>
        <div className="text-gray-400">⋮</div>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-gray-400 mt-2">
        {equityLevel.label}{" "}
        <span className={equityColor}>{equityLevel.value}</span>
      </p>
    </div>
  );
};

export default Card;
