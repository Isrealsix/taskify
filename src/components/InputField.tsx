import { useRef } from 'react';
import './styles.css';

interface IProps {
  task: string,
  setTask: React.Dispatch<React.SetStateAction<string>>,
  addTask: () => void,
}

const InputField: React.FC<IProps> = ({task, setTask, addTask}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const sendTodo: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    addTask();
  }

  return (
    <form
      className="input"
      onSubmit={ev => {
        inputRef.current?.blur();
        sendTodo(ev);
        }
      }
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a task"
        value={task} onChange={e => setTask(e.target.value)}
        className="input__box"
      />

      <button
        className="input__submit"
        type="submit"
        disabled={!task}
        >
          Add
      </button>
    </form>
  )
}

export default InputField