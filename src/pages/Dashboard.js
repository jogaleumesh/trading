import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import MostTraded from "../components/MostTraded";
import Notifications from "../components/Notifications";
import BalanceChart from "../components/BalanceChart";
import OrderHistory from "../components/OrderHistory";

function Dashboard() {
  const notificationsData = [
    {
      time: "12 days ago",
      type: "RulesSoftBreach",
      message: "Closed trade not placed with a stop-loss",
    },
    {
      time: "8 days ago",
      type: "RulesSoftBreach",
      message: "Days since a trade was placed, closed...",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Sticky Header */}
        <Header />

        {/* Content Area */}
        <div className="bg-gray-100">
          <div className="flex flex-col md:flex-row  m-6 gap-4  ">
            <div className="md:w-3/5">
              <BalanceChart />
            </div>

            <div className="md:w-2/5  flex flex-col gap-4">
              {/* Top Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  icon={{
                    emoji: "📈",
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-600",
                  }}
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
                  icon={{
                    emoji: "📉",
                    bgColor: "bg-red-100",
                    textColor: "text-red-600",
                  }}
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

              {/* Most Traded Section */}
              <MostTraded
                trades={{
                  left: [
                    { name: "NZDUSD", color: "bg-blue-500" },
                    { name: "GBPUSD", color: "bg-red-400" },
                    { name: "AUDCHF", color: "bg-blue-300" },
                  ],
                  right: [
                    { name: "USDCHF", color: "bg-purple-300" },
                    { name: "XAUUSD", color: "bg-orange-200" },
                    { name: "AUDNZD", color: "bg-teal-300" },
                  ],
                }}
                total={16}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  m-6  gap-4">
            <div className="md:w-3/5 ">
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card2
                  title="Average Win"
                  value="$642.00"
                  icon="📈"
                  footer={<span className="text-green-500">↑ 7%</span>}
                />
                <Card2
                  title="Average Loss"
                  value="$0.00"
                  icon="📉"
                  footer={<span className="text-red-500">0%</span>}
                />
                <Card2 title="Profit Factor" value="6.4" icon="💹" />
                <Card2 title="Best Trade" value="$8,908.99" icon="🏆" />
                <Card2 title="Win Ratio" value="-$4,800.90" icon="🥇" />
                <Card2 title="Risk Reward" value="$3,490.00" icon="⚖️" />
              </div>
            </div>

            <div className="md:w-2/5">
              <Notifications data={notificationsData} />
            </div>
          </div>

          {/* Order History Table */}
          <OrderHistory />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;