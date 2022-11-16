import MonthChart from "./components/MonthChart/MonthChart";
import TaskTable from "./components/TaskTable/TaskTable";
import TaskForm from "./components/TaskForm/TaskForm";
import ActiveMonth from "./components/ActiveMonth/ActiveMonth";
import { MONTHS_CZ } from "./misc/constants";
import MonthChallenge from "./components/MonthChallenge/MonthChallenge";
import "./mcleod-resetDev.css";
import RewardField from "./components/RewardField/RewardField";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* <MonthChart />
      <TaskTable /> */}
      {/* <TaskForm /> */}
      {/* <ActiveMonth activeMonth={MONTHS_CZ[new Date().getMonth()]} /> */}
      {/* <MonthChallenge /> */}
      <RewardField />
    </div>
  );
}

export default App;

// TODO get a solid CSS reset
// https://www.joshwcomeau.com/css/custom-css-reset/
// https://piccalil.li/blog/a-modern-css-reset/