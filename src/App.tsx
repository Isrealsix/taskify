import { useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { ITask } from './model';

const App : React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);


  // useEffect(() => {
  //   console.log(tasks, 'of new tasksssss');
  // }, [tasks])

  const handlerAddTask = () => {
    if(!task) return;
    setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
    setTask('');
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField task={task} setTask={setTask} addTask={handlerAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
