const Card = ({ title, value, icon, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-5">
      <div className="flex items-center">
        <img src={`assets/${icon}`} alt="icon" className="w-10 mr-4" />
        <h4 className="text-gray-700 text-lg font-medium">{title}</h4>
      </div>

      <div className="flex justify-between">
        <p className="text-2xl">{value}</p>
        {footer && (
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
