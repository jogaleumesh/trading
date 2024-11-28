import Card from "./Card";

const TradingStatsOverview = () => {
  return (
    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        title="Average Win"
        value="$642.00"
        icon="average-win.png"
        footer={<span className="text-green-500">↑ 7%</span>}
      />
      <Card
        title="Average Loss"
        value="$0.00"
        icon="average-loss.png"
        footer={<span className="text-red-500">0%</span>}
      />
      <Card title="Profit Factor" value="6.4" icon="profit-factor.png" />
      <Card title="Best Trade" value="$8,908.99" icon="best-trade.png" />
      <Card title="Win Ratio" value="-$4,800.90" icon="win-ratio.png" />
      <Card title="Risk Reward" value="$3,490.00" icon="risk-reward.png" />
    </div>
  );
};

export default TradingStatsOverview;
