import React, { useState } from 'react';
import { ITask } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

interface IProps {
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Task: React.FC<IProps> = ({task, tasks, setTasks}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handlerDone = (id: number) => {
    tasks.map(task => (
      task.id === id ? {...task, isDone: !task.isDone} : task
    ))
  }

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <form className="task">
      <span className="task--text">
        { task.isDone ? (
          <span className="task--text">{ task.task }</span>
        ): (
          <span className="task--text">{ task.task }</span>
        ) }
      </span>
      <div>
        <span className="icon">{ <AiFillEdit /> }</span>
        <span className="icon" onClick={ () => handlerDelete(todo.id) }>{ <AiFillDelete /> }</span>
        <span className="icon" onClick={ () => handlerDone(task.id) }>{ <MdDone /> }</span>
      </div>
    </form>
  )
}

export default Task