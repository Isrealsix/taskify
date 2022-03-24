import './styles.css';

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a task" value={todo} onChange={e => setTodo(e.target.value)} className="input__box" /> 
      <button className="input__submit" type="submit">Add</button>
    </form>
  )
}

export default InputField