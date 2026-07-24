import { useState, useEffect } from "react";

export default function ToastPopup(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });

  useEffect(() => {
    if (props.properties) {
      console.log(props.properties.get("toast-popup-type"));
      console.log(props.properties.get("toast-popup-title"));
      console.log(props.properties.get("toast-popup-message"));

      setComponentCSS({ display: "block" });
    }
  }, [props.properties]);

  return (
    <div className="toast-popup" style={componentCSS}>
      {/* Contents of component here */}
      <p>This is a toast popup.</p>
    </div>
  );
}
