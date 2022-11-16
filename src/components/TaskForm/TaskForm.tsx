import "./taskForm.css";

export default function TaskForm() {
  return (
    <div className="taskForm--wrapper">
      <span className="taskForm--priorityText taskForm--priorityText taskForm--priorityText-primary">prioritní</span>
      <div className="taskForm--priority taskForm--priority-main">
        <label htmlFor="task1" className="taskForm--task">
          1.
          <input type="text" className="taskForm--input" placeholder="task1" />
        </label>
        <label htmlFor="task2" className="taskForm--task">
          2.
          <input type="text" className="taskForm--input" placeholder="task2" />
        </label>
      </div>
      <span className="taskForm--priorityText taskForm--priorityText-secondary">vedlejší</span>
      <div className="taskForm--priority taskForm--priority-secondary">
        <label htmlFor="task3" className="taskForm--task">
          3.
          <input type="text" className="taskForm--input" placeholder="task3" />
        </label>
        <label htmlFor="task4" className="taskForm--task">
          4.
          <input type="text" className="taskForm--input" placeholder="task4" />
        </label>
        <label htmlFor="task5" className="taskForm--task">
          5.
          <input type="text" className="taskForm--input" placeholder="task5" />
        </label>
      </div>
      {/* <div className="taskForm--priority"><span>vedlejší | prioritní</span></div> */}
    </div>
  );
}