import { useState, useEffect } from "react";

export default function Testimonial(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
  const [imageCSS, setImageCSS] = useState(null);
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
      console.log(props.properties.get("testimonial-format"));
      console.log(props.properties.get("testimonial-display"));

      function amalgamateContainerCSS() {
        const commonCSS = { display: "flex", alignItems: "center" };

        const displayCSS = JSON.parse(
          props.properties.get("testimonial-display"),
        );

        const combinedCSS = { ...commonCSS, ...displayCSS.container };
        console.log(combinedCSS);

        setImageCSS(displayCSS.image);

        return combinedCSS;
      }

      setComponentCSS(amalgamateContainerCSS);
    }
  }, [props.properties]);

  return (
    <div className="testimonial" style={componentCSS}>
      {/* Contents of component here */}
      <div className="testimonial-image" style={imageCSS}>
        Image
      </div>
      <div className="testimonial-text-area">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius,
          felis a scelerisque elementum, nulla diam pulvinar nisl, quis rhoncus
          nibh augue quis augue. Morbi consectetur fermentum justo, vitae
          elementum sem. Curabitur molestie tempor ex, id ultrices sem tincidunt
          at. Praesent arcu elit, tempor eu nunc ac, auctor.
        </p>
        <div className="testimonial-name-area">
          <p>Jimmy Centrist</p>
          <p>CTO at Brickage PLC</p>
        </div>
      </div>
    </div>
  );
}
