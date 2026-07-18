import { useState, useEffect } from "react";

export default function Badge(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
  const [text, setText] = useState(null);

  useEffect(() => {
    if (props.properties) {
      const badgeColor = JSON.parse(props.properties.get("badge-color"));
      const badgeShape = JSON.parse(props.properties.get("badge-shape"));

      const customText = props.properties.get("badge-text");
      customText
        ? setText(props.properties.get("badge-text"))
        : setText("Badge");

      setComponentCSS({
        color: badgeColor.textColor,
        backgroundColor: badgeColor.bodyColor,
        borderRadius: badgeShape.borderRadius,
      });
    }
  }, [props.properties]);

  return (
    <div className="badge" style={componentCSS}>
      <p>{text}</p>
    </div>
  );
}
