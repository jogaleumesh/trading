const MostTraded = ({ trades, total }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-700 font-semibold">Most Traded</h2>
        <div className="text-gray-400">⋮</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-2">
          {trades.left.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          {trades.right.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Total Indicator */}
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20">
            <svg className="absolute top-0 left-0" width="80" height="80">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="32"
                cx="40"
                cy="40"
              ></circle>
              <circle
                className="text-blue-500"
                strokeWidth="8"
                strokeDasharray="100"
                strokeDashoffset="25"
                strokeLinecap="round"
                fill="transparent"
                r="32"
                cx="40"
                cy="40"
              ></circle>
              <circle
                className="text-red-400"
                strokeWidth="8"
                strokeDasharray="25"
                strokeDashoffset="-75"
                strokeLinecap="round"
                fill="transparent"
                r="32"
                cx="40"
                cy="40"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-lg font-semibold">
              {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostTraded;
