const AppLogo = () => {
  return (
    <div className="p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 dark:text-white">
          <img src="assets/logo.png" alt="logo" className="h-10" />
          <span className="text-lg font-semibold">Trading</span>
        </div>

        <button className="text-gray-600 focus:outline-none">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 12H5m14-6H5m14 12H5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppLogo;
