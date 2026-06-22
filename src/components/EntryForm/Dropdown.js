import { useState, useContext } from "react";

import clsx from "clsx";

import { LightDarkContext } from "../../App";

export default function Dropdown(props) {
  const [selected, setSelected] = useState("");

  const { dark } = useContext(LightDarkContext);

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
        className={clsx("select", `${dark ? "dark" : "light"}-accent`)}
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
