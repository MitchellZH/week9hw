import {useState} from "react"

interface Props { 
  onSubmit: (note: string) => void; 
}

const Form = ({onSubmit}: Props) => {
  const [note, setNote] = useState('')

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(note);
        }}
      >
        <input
          type="text"
          placeholder="Add your task here..."
          onChange={(event) => setNote(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
export default Form