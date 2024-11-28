const Card = ({ icon, title, value, subTitle, equityLevel, equityColor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={`assets/${icon}`} alt="icon" className="h-8" />
            <div className="ml-4">
              <h2 className="text-gray-700 font-semibold">{title}</h2>
              <p className="text-gray-400 text-sm">{subTitle}</p>
            </div>
          </div>
          <div className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </div>
        </div>

        <p className="text-2xl">{value}</p>
      </div>

      <hr className="my-2 border-gray-200" />

      <p className="text-gray-400 mt-2 flex items-center space-x-1 p-4">
        <span>{equityLevel.label}</span>
        <span className={equityColor}>{equityLevel.value}</span>
      </p>
    </div>
  );
};

export default Card;
