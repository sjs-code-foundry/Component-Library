import { useState, useEffect, createElement } from "react";

import clsx from "clsx";

export default function ToastPopup(props) {
  const [classStr, setClassStr] = useState("");
  const [iconSVG, setIconSVG] = useState(null);
  const [title, setTitle] = useState("Biscuits!");
  const [message, setMessage] = useState(
    "as prose aisle flow made did way to his memory",
  );
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    if (props.properties) {
      // console.log(props.properties.get("toast-popup-title"));
      // console.log(props.properties.get("toast-popup-message"));

      const popupType = JSON.parse(props.properties.get("toast-popup-type"));

      setClassStr(popupType.classStr);

      setIconSVG(
        createElement(
          "svg",
          popupType.iconProps,
          createElement("path", popupType.iconChildProps),
        ),
      );

      setCount(5);
    }
  }, [props.properties]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  });

  return (
    <div
      className={clsx(
        "toast-popup",
        `toast-popup-${classStr}`,
        count !== 0 && "toast-popup-display",
      )}
    >
      {iconSVG}
      <div className="toast-popup-textarea">
        <h1 className={`toast-popup-${classStr}-title`}>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
