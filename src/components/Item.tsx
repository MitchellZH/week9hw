interface Props {
  note: string;
  index: number;
  onClear: (n: number) => void;
}

const Item = ({note, index, onClear}: Props) => {
  return (
    <>
      <tr style={{ height: "30px" }}>
        <td style={{ color: "#eff6e0", fontSize: "18px" }}>- {note}</td>
        <td
          style={{
            float: "right",
          }}
        >
          <button onClick={()=>onClear(index)}>Remove</button>
        </td>
      </tr>
    </>
  );
};
export default Item;
