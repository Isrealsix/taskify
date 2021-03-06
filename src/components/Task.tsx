import React, { useEffect, useRef, useState } from "react";
import { ITask } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

interface IProps {
  index: number;
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Task: React.FC<IProps> = ({ index, task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const handlerDone = (id: number) => {
    tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
  };

  const handlerDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handlerEdit = (ev: React.FormEvent<HTMLFormElement>, id: number) => {
    ev.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`task ${snapshot.isDragging ? "drag" : "" }`}
          onSubmit={(ev) => handlerEdit(ev, task.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTask}
              onChange={(ev) => setEditTask(ev.target.value)}
              className="task--text"
            />
          ) : task.isDone ? (
            <span className="task--text">{task.task}</span>
          ) : (
            <span className="task--text">{task.task}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !task.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handlerDelete(task.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handlerDone(task.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default Task;
