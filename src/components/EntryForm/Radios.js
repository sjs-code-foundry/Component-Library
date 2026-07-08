import { useState, useContext } from "react";

import clsx from "clsx";

import { LightDarkContext } from "../../App";

export default function Radios(props) {
  const [selected, setSelected] = useState(
    JSON.stringify(props.options[0].value),
  );

  const { dark } = useContext(LightDarkContext);

  function handleChange(e) {
    const value = e.target.value;
    setSelected(value);
  }

  const optionsElements = props.options.map((option, index) => {
    return (
      <div key={index} className="radio-option">
        <label name={props.name}>{option.name}</label>
        <input
          type="radio"
          name={props.name}
          className={`${dark ? "dark" : "light"}-accent`}
          value={JSON.stringify(option.value)}
          checked={selected === JSON.stringify(option.value)}
          onChange={handleChange}
        />
      </div>
    );
  });

  return (
    <div className="radio">
      <p className="radio-title">{props.labelText}</p>
      <div className="radio-list">{optionsElements}</div>
    </div>
  );
}
