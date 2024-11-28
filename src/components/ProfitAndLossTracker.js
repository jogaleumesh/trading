const ProfitAndLossTracker = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card
        icon="profit-target.png"
        title="Profit Target"
        subTitle="Of $12,00.90"
        value="$8,908.99"
        equityLevel={{
          label: "Equity Pass Level",
          value: "$124,900.00",
        }}
        equityColor="text-blue-600"
      />

      <Card
        icon="daily-loss-limit.png"
        title="Daily Loss Limit"
        subTitle="Of $12,00.90"
        value="$12,908.99"
        equityLevel={{
          label: "Equity Breach Level",
          value: "$124,900.00",
        }}
        equityColor="text-red-600"
      />
    </div>
  );
};

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

export default ProfitAndLossTracker;
