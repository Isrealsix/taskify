import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
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

  return (
    <DragDropContext onDragEnd={() => {}}>
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
