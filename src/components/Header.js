import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../store/themeSlice";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h2 className="text-lg font-bold dark:text-white">Welcome back, Umesh</h2>
      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2">
          <img src="assets/dollar.png" alt="payout" className="h-6" />
          <span>Request Payout</span>
        </button>

        <button className="bg-gray-200 px-4 py-2 rounded flex items-center space-x-2">
          <img src="assets/share.png" alt="share" className="h-6" />
          <span>Share Matrices</span>
        </button>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 rounded flex items-center"
        >
          <img
            src={`assets/${
              theme === "dark" ? "light-theme.png" : "dark-theme.png"
            }`}
            alt="theme"
            className="h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
