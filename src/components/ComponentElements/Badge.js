import { useState, useEffect } from "react";

export default function Badge(props) {
  const [badgeCSS, setBadgeCSS] = useState({ display: "none" });

  useEffect(() => {
    if (props.style) {
      const badgeColor = JSON.parse(props.style.get("badge-color"));
      const badgeShape = JSON.parse(props.style.get("badge-shape"));

      setBadgeCSS({
        color: badgeColor.textColor,
        backgroundColor: badgeColor.bodyColor,
        borderRadius: badgeShape.borderRadius,
      });
    }
  }, [props.style]);

  return (
    <div className="badge" style={badgeCSS}>
      <p>{props.text}</p>
    </div>
  );
}
