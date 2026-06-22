import { useContext } from "react";

import { LightDarkContext } from "../../App";

export default function Form({ children, onSubmit }) {
  const { dark } = useContext(LightDarkContext);

  function handleSubmit(formData) {
    onSubmit(formData);
  }

  return (
    <form action={handleSubmit}>
      {children}
      <button type="submit" className={`${dark ? "dark" : "light"}-accent`}>
        Submit
      </button>
    </form>
  );
}
