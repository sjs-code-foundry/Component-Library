import { useState } from "react";

export default function Dropdown(props) {
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSelected(value);
  }

  return (
    <>
      <label htmlFor={props.name}>{props.labelText}</label>
      <select
        name={props.name}
        id={props.name}
        value={selected}
        onChange={handleChange}
      >
        {props.options.map((option, index) => (
          <option key={index} value={JSON.stringify(option.value)}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
