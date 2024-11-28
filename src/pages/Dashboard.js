import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BalanceChart from "../components/BalanceChart";
import ProfitAndLossTracker from "../components/ProfitAndLossTracker";
import MostTraded from "../components/MostTraded";
import TradingStatsOverview from "../components/TradingStatsOverview";
import Notifications from "../components/Notifications";
import OrderHistory from "../components/OrderHistory";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Sticky Header */}
        <Header />

        {/* Main Content */}
        <div className="bg-gray-100 dark:bg-gray-400 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/5 ">
              <BalanceChart />
            </div>

            <div className="md:w-2/5  flex flex-col gap-4">
              <ProfitAndLossTracker />

              <MostTraded />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 my-6">
            <div className="md:w-3/5 ">
              <TradingStatsOverview />
            </div>

            <div className="md:w-2/5">
              <Notifications />
            </div>
          </div>

          <OrderHistory />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
