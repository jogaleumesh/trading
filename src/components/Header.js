import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 shadow p-5 flex justify-between items-center">
      <h2 className="text-2xl font-bold dark:text-white">
        Welcome back, Umesh
      </h2>
      <div className="space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Request Payout
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded">
          Share Matrices
        </button>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Theme
        </button>
      </div>
    </div>
  );
};

export default Header;
