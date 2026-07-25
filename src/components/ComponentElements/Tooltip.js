import { useState, useEffect } from "react";

import TooltipIcon from "./Decorations/TooltipIcon";
import Cross from "./Decorations/Cross";

export default function Tooltip(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });

  useEffect(() => {
    if (props.properties) {
      console.log(props.properties.get("tooltip-title"));
      console.log(props.properties.get("tooltip-message"));
      console.log(props.properties.get("tooltip-color"));
      console.log(props.properties.get("tooltip-style"));

      setComponentCSS({ display: "flex" });
    }
  }, [props.properties]);

  function handleClose() {
    console.log("Tooltip closed.");
    // Parent div will need to be wired up with a handleOpen function before this can be used.
  }

  return (
    <div className="tooltip" style={componentCSS}>
      <TooltipIcon classNames="tooltip-icon" />
      <div className="tooltip-text-area">
        <h1>Tooltip Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
          tenetur.
        </p>
      </div>
      <button className="tooltip-close-btn" onClick={handleClose}>
        <Cross classNames="" />
      </button>
      <i className="tooltip-arrow"></i>
    </div>
  );
}
