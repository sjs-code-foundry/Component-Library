import { useState } from "react";

export default function Radios(props) {
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSelected(value);
  }

  const optionsElements = props.options.map((option, index) => {
    return (
      <div className="radio-option">
        <label key={index} name={props.name}>
          {option.name}
        </label>
        <input
          type="radio"
          name={props.name}
          value={JSON.stringify(option.value)}
          checked={selected === JSON.stringify(option.value)}
          onChange={handleChange}
        />
      </div>
    );
  });

  return (
    <div className="radio">
      <p>{props.labelText}</p>
      <div className="radio-list">{optionsElements}</div>
    </div>
  );
}
