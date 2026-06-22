import { useContext } from "react";

import { LightDarkContext } from "../../App";

export default function Form({ children, onSubmission }) {
  const { dark } = useContext(LightDarkContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    onSubmission(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit" className={`${dark ? "dark" : "light"}-accent`}>
        Submit
      </button>
    </form>
  );
}
