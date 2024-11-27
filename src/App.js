import { useSelector } from "react-redux";

import Dashboard from "./pages/Dashboard";

import "./App.css";
function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Dashboard />
    </div>
  );
}

export default App;
