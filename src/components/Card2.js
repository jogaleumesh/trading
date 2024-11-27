const Card2 = ({ title, value, icon, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-gray-700 text-lg font-medium">{title}</h4>
        {icon && <div className="text-2xl">{icon}</div>}
      </div>
      <p className="text-2xl font-semibold">{value}</p>
      {footer && (
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card2;
