import { useState, useEffect } from "react";

export default function Testimonial(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
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

      console.log(props.properties.get("testimonial-image"));
      console.log(props.properties.get("testimonial-message"));
      console.log(props.properties.get("testimonial-name"));
      console.log(props.properties.get("testimonial-occupation"));

      setComponentCSS({ display: "block" });
    }
  }, [props.properties]);

  return (
    <div className="testimonial" style={componentCSS}>
      {/* Contents of component here */}
      <p>This is a testimonial.</p>
    </div>
  );
}
