import { DAYS_IN_MONTH, MAX_TASK_COUNT } from "../../misc/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./taskTable.css";

export default function TaskTable() {
  const AccomplishedTaskCellComponents = Array.from({ length: DAYS_IN_MONTH }, (_, i) => (
    <tr key={i}>
      <th scope="row">{i + 1}</th>
      {Array.from({ length: MAX_TASK_COUNT }, () => <td className="taskTable--tableCell"></td>)}
    </tr>
  ))

  return (
    <div className="taskTable--wrapper">
      <table className="table table-bordered table-sm">
        <thead>
          <tr>
            <th scope="column" className="taskTable--tableCell">Datum</th>
            <th scope="column" colSpan={5} className="taskTable--tableCell">Splněné kroky:</th>
          </tr>
          <tr>
            <td className="taskTable--tableCell"></td>
            {Array.from({
              length: MAX_TASK_COUNT },
              (_, i) => <td className="taskTable--tableCell">{i + 1}</td>
            )}
          </tr>
        </thead>
        <tbody>
          {AccomplishedTaskCellComponents}
        </tbody>
      </table>
    </div>
  );
}