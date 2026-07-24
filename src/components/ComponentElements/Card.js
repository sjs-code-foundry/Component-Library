import { useState, useEffect } from "react";

import CardIcon from "./Decorations/CardIcon";

export default function Card(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  // const [titleCSS, setTitleCSS] = useState(null);
  // Add state values as required

  useEffect(() => {
    if (props.properties) {
      // setTitle(props.properties.get("banner-title"));
      // setMessage(props.properties.get("banner-message"));
      // const bannerStyles = JSON.parse(props.properties.get("banner-type"));
      // setComponentCSS({
      //   color: bannerStyles.textColor,
      //   backgroundColor: bannerStyles.bodyColor,
      // });

      setTitle(props.properties.get("card-title"));
      setMessage(props.properties.get("card-message"));

      setComponentCSS({ display: "block" });
    }
  }, [props.properties]);

  return (
    <div className="card" style={componentCSS}>
      <CardIcon />
      <div className="card-text-area">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
