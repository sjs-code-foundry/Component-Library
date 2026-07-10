import { useState, useEffect } from "react";

export default function Banner(props) {
  const [bannerCSS, setBannerCSS] = useState({
    display: "block",
    color: "white",
    backgroundColor: "black",
  });

  console.log(props.style.get("banner-format"));
  console.log(props.style.get("banner-type"));
  console.log(props.style.get("banner-title"));
  console.log(props.style.get("banner-message"));

  useEffect(() => {
    if (props.style) {
      // const bannerFormat = JSON.parse(props.style.get("banner-format"));
      //
      // setBannerCSS({
      //   color: bannerColor.textColor,
      //   backgroundColor: bannerColor.bodyColor,
      //   borderRadius: bannerShape.borderRadius,
      // });
    }
  }, [props.style]);

  return (
    <div className="banner" style={bannerCSS}>
      <p>This is a banner.</p>
    </div>
  );
}
