import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import { ITask } from "./model";
import "./App.css";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

  const handlerAddTask = () => {
    if (!task) return;
    setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
    setTask("");
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    // dnd logic
    let add,
      active = tasks,
      completed = completedTasks;

    if (source.droppableId === "TaskList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1)
    }

    if(destination.droppableId === "TaskList") {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add)
    }

    setCompletedTasks(completed);
    setTasks(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField task={task} setTask={setTask} addTask={handlerAddTask} />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
