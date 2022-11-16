import {ReactComponent as RewardBox} from "../../svg/rewardBox.svg";
import "./rewardField.css";

export default function RewardField() {
  return (
    <div className="rewardField--wrapper">
      <RewardBox className="rewardField--svgBox" />
      <p className="rewardField--text rewardField--text-bolded">Jak se odměním</p>
      <p className="rewardField--text">za splněné aktivity?</p>
      <input type="text" className="rewardField--input" />
    </div>
  );
}