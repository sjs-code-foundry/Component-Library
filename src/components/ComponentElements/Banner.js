import { useState, useEffect, createElement } from "react";

export default function Banner(props) {
  const [bannerCSS, setBannerCSS] = useState({ display: "none" });
  const [titleCSS, setTitleCSS] = useState(null);
  const [iconSVG, setIconSVG] = useState(null);
  console.log(iconSVG);
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (props.properties) {
      setTitle(props.properties.get("banner-title"));
      setMessage(props.properties.get("banner-message"));

      const bannerStyles = JSON.parse(props.properties.get("banner-type"));
      console.log(bannerStyles);

      setBannerCSS({
        color: bannerStyles.textColor,
        backgroundColor: bannerStyles.bodyColor,
      });

      setTitleCSS({
        color: bannerStyles.titleColor,
      });

      setIconSVG(
        createElement(
          "svg",
          bannerStyles.iconProps,
          createElement("path", bannerStyles.iconChildProps),
        ),
      );
    }
  }, [props.properties]);

  return (
    <div className="banner" style={bannerCSS}>
      {iconSVG}
      <div className="banner-text-space">
        <h1 style={titleCSS}>{title}</h1>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
