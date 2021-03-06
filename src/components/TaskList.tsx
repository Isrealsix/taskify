import { Droppable } from "react-beautiful-dnd";
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
        {(provided, snapshot) => (
          <div
            className={`tasks ${snapshot.isDraggingOver ? "dragactive" : "" }`}
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="RemovedTasks">
        {(provided, snapshot) => (
          <div
            className={`tasks remove ${snapshot.isDraggingOver ? "dragacomplete" : "" }`}
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
