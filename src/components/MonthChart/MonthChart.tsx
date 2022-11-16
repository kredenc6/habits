import { DAYS_IN_MONTH } from "../../misc/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./monthChart.css";

export default function MonthChart() {
  return (
    <table className="monthChart">
      <tbody>
        {Array.from({ length: DAYS_IN_MONTH }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: DAYS_IN_MONTH }, (_, columnIndex) => (
              shouldHideTableCell(rowIndex, columnIndex, "top")
                ? <td key={`${rowIndex}${columnIndex}`} className="monthChart--tableCell"></td>
                : <td key={`${rowIndex}${columnIndex}`} className="monthChart--tableCell border border-success"></td>
            ))} 
          </tr>
        ))}
        <tr>
          {Array.from({ length: DAYS_IN_MONTH }, (_, i) => <td className="monthChart--tableCell border border-success">{i + 1}</td>)}
        </tr>
        {Array.from({ length: DAYS_IN_MONTH }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: DAYS_IN_MONTH }, (_, columnIndex) => (
              shouldHideTableCell(rowIndex, columnIndex, "bottom")
                ? <td key={`${rowIndex}${columnIndex}`} className="monthChart--tableCell"></td>
                : <td key={`${rowIndex}${columnIndex}`} className="monthChart--tableCell border border-success"></td>
            ))} 
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function shouldHideTableCell(rowIndex: number, columnIndex: number, half: "top" | "bottom") {
  let rowCellCount = half === "top"
    ? rowIndex + 1
    : DAYS_IN_MONTH - rowIndex;

  return DAYS_IN_MONTH - rowCellCount > columnIndex;
}