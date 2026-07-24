import { useState, useEffect } from "react";

export default function Tooltip(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });

  useEffect(() => {
    if (props.properties) {
      console.log(props.properties.get("tooltip-title"));
      console.log(props.properties.get("tooltip-message"));
      console.log(props.properties.get("tooltip-color"));
      console.log(props.properties.get("tooltip-style"));

      setComponentCSS({ display: "block" });
    }
  }, [props.properties]);

  return (
    <div className="tooltip" style={componentCSS}>
      {/* Contents of component here */}
      <p>This is a tooltip.</p>
      <i class="tooltip-arrow"></i>
    </div>
  );
}
