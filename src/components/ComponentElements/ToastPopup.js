import { useState, useEffect, createElement } from "react";

import clsx from "clsx";

export default function ToastPopup(props) {
  const [classStr, setClassStr] = useState("");
  const [iconSVG, setIconSVG] = useState(null);
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.properties) {
      const popupType = JSON.parse(props.properties.get("toast-popup-type"));

      setClassStr(popupType.classStr);

      setIconSVG(
        createElement(
          "svg",
          popupType.iconProps,
          createElement("path", popupType.iconChildProps),
        ),
      );

      setTitle(props.properties.get("toast-popup-title"));
      setMessage(props.properties.get("toast-popup-message"));

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
