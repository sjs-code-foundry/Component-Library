import { useState, useContext } from "react";

import { LightDarkContext } from "../../App";

export default function Text(props) {
  const [input, setInput] = useState("");

  const { dark } = useContext(LightDarkContext);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
  }

  return (
    <div className="text-input">
      <label name={props.name}>{props.labelText}</label>

      {props.multiLine ? (
        <textarea
          type="text"
          name={props.name}
          className={`${dark ? "dark" : "light"}-accent`}
          value={input}
          placeholder={props.placeholder}
          maxLength={props.limit}
          required={props.required}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type="text"
          name={props.name}
          className={`${dark ? "dark" : "light"}-accent`}
          value={input}
          placeholder={props.placeholder}
          maxLength={props.limit}
          required={props.required}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
