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
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={item.iconPath}></path>
              </svg>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
