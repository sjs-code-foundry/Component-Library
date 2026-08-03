import { useState, useEffect, createElement } from "react";

export default function ToastPopup(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "flex" });
  const [classStr, setClassStr] = useState("");
  const [iconSVG, setIconSVG] = useState(null);
  const [title, setTitle] = useState("Biscuits!");
  const [message, setMessage] = useState(
    "as prose aisle flow made did way to his memory",
  );

  useEffect(() => {
    if (props.properties) {
      console.log(props.properties.get("toast-popup-title"));
      console.log(props.properties.get("toast-popup-message"));

      const popupType = JSON.parse(props.properties.get("toast-popup-type"));
      console.log(popupType);

      setClassStr(popupType.classStr);

      setIconSVG(
        createElement(
          "svg",
          popupType.iconProps,
          createElement("path", popupType.iconChildProps),
        ),
      );

      setComponentCSS({ display: "flex" });
    }
  }, [props.properties]);

  return (
    <div className={`toast-popup toast-popup-${classStr}`} style={componentCSS}>
      {iconSVG}
      <div className="toast-popup-textarea">
        <h1 className={`toast-popup-${classStr}-title`}>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
