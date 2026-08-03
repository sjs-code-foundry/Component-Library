import { useState, useEffect } from "react";

import clsx from "clsx";

import TooltipIcon from "./Decorations/TooltipIcon";
import Cross from "./Decorations/Cross";

export default function Tooltip(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
  const [bodyClass, setBodyClass] = useState(null);
  const [arrowClass, setArrowClass] = useState(null);
  const [iconClass, setIconClass] = useState(null);
  const [titleClass, setTitleClass] = useState(null);
  const [crossClass, setCrossClass] = useState(null);

  useEffect(() => {
    if (props.properties) {
      const isBoldStyle = /true/.test(props.properties.get("tooltip-style"));
      const colorClasses = JSON.parse(props.properties.get("tooltip-color"));
      let classObj;

      isBoldStyle
        ? (classObj = colorClasses.boldClasses)
        : (classObj = colorClasses.lightClasses);

      setBodyClass(classObj.bodyClass);
      setArrowClass(classObj.arrowClass);
      setIconClass(classObj.iconClass);
      setTitleClass(classObj.titleClass);
      setCrossClass(classObj.crossClass);

      setComponentCSS({ display: "flex" });
    }
  }, [props.properties]);

  function handleClose() {
    console.log("Tooltip closed.");
    // Parent div will need to be wired up with a handleOpen function before this can be used.
  }

  return (
    <div className={clsx("tooltip", bodyClass)} style={componentCSS}>
      <TooltipIcon classNames={clsx("tooltip-icon", iconClass)} />
      <div className="tooltip-text-area">
        <h1 className={titleClass}>Tooltip Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
          tenetur.
        </p>
      </div>
      <button
        className={clsx("tooltip-close-btn", bodyClass)}
        onClick={handleClose}
      >
        <Cross classNames={crossClass} />
      </button>
      <i className={clsx("tooltip-arrow", arrowClass)}></i>
    </div>
  );
}
