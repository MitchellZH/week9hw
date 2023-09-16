interface Props {
  notes: string[]
  onClear: (n: number) => void
}

import Item from "./Item"
const ItemGroup = ({notes, onClear}: Props) => {
  return (
    <table style={{ width: "500px" }}>
      <tbody>
        {notes.map((note, idx) => (
          <Item note={note} onClear={onClear} key={idx} index={idx} />
        ))}
      </tbody>
    </table>
  );
}
export default ItemGroup