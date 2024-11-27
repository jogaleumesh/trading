const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h2 className="text-gray-400 uppercase text-sm font-semibold mb-4">
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={`flex items-center text-sm p-3 rounded-lg w-full dark:text-white ${
                item.isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <img
                src={`assets/${item.iconPath}`}
                alt={item.name}
                className="w-6 mr-2"
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
