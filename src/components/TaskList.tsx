import { ITask } from "../model";
import "./styles.css";
import Task from "./Task";

interface IProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskList: React.FC<IProps> = ({ tasks, setTasks }) => {
  return (
    <div className="container">
      <div className="tasks">
        <span className="tasks__heading">Active Tasks</span>
        {tasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
      <div className="tasks remove">
        <span className="tasks__heading">Active Tasks</span>
        {tasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
