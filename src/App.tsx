import { useState } from "react";
import Form from "./components/Form"
import ItemGroup from "./components/ItemGroup"

function App() {
  const [notes, setNotes] = useState<string[]>([])

  const onClear = (n: number) => {
    const _notes = [...notes]
    console.log(_notes)
    _notes.splice(n, 1)
    console.log(_notes)
    setNotes(_notes)
    console.log(notes)
  }
  
  const onSubmit = (note: string) => {
    setNotes([...notes, note])
  }

  return (
    <>
      <div className="flex-container">
        <h1
          style={{
            fontSize: "35px",
            color: "#eff6e0",
          }}
        >
          Make Your To Do List
        </h1>
        <Form onSubmit={onSubmit} />
        <ItemGroup notes={notes} onClear={onClear} />
      </div>
    </>
  );
}

export default App
