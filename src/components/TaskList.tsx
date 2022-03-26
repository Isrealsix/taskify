import { Droppable } from "react-beautiful-dnd";
import { MdTask } from "react-icons/md";
import { ITask } from "../model";
import "./styles.css";
import Task from "./Task";

interface IProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  completedTasks: ITask[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskList: React.FC<IProps> = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TaskList">
        {(provided) => (
          <div
            className="tasks"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="tasks__heading">Active Tasks</span>
            {tasks.map((task, index) => (
              <Task
                index={index}
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="RemovedTasks">
        {(provided) => (
          <div
            className="tasks remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="tasks__heading">Completed Tasks</span>
            {completedTasks.map((task, index) => (
              <Task
                index={index}
                key={task.id}
                task={task}
                tasks={completedTasks}
                setTasks={setCompletedTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
