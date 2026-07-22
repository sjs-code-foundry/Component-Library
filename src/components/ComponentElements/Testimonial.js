import { useState, useEffect } from "react";

import clsx from "clsx";

import QuoteMarks from "./Decorations/QuoteMarks";
import DotMatrix from "./Decorations/DotMatrix";
import ForwardSlash from "./Decorations/ForwardSlash";

import logo from "../../img/Logo.png";

// import { formObj } from "../../helpers/constants";

export default function Testimonial(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
  const [format, setFormat] = useState(null);
  const [display, setDisplay] = useState(null);
  console.log(`Display in desktop mode? ${display}`);
  // const [imageCSS, setImageCSS] = useState(null);
  // const [textAreaCSS, setTextAreaCSS] = useState(null);
  // const [textAreaNameCSS, setTextAreaNameCSS] = useState(null);
  // const [titleCSS, setTitleCSS] = useState(null);
  // Add state values as required

  useEffect(() => {
    if (props.properties) {
      console.log(props.properties.get("testimonial-image"));
      console.log(props.properties.get("testimonial-message"));
      console.log(props.properties.get("testimonial-name"));
      console.log(props.properties.get("testimonial-occupation"));
      console.log(props.properties.get("testimonial-format"));
      console.log(props.properties.get("testimonial-display"));

      setFormat(/true/.test(props.properties.get("testimonial-format")));
      setDisplay(/true/.test(props.properties.get("testimonial-display")));
      // Regex test to make sure boolean lifted from object is parsed as a strict boolean

      setComponentCSS({ display: "flex" });
    }
  }, [props.properties]);

  return (
    <div
      className={clsx(
        "testimonial",
        display && "testimonial-container-desktop",
        !display && "testimonial-container-mobile",
        !format && "testimonial-container-plaintext",
      )}
      style={componentCSS}
    >
      {!display && format && (
        <div className="testimonial-whitebar-mobile"></div>
      )}
      {format && <QuoteMarks display={display} />}
      {!format && <DotMatrix display={display} />}
      {format && (
        <div
          className={clsx(
            "testimonial-image",
            display && "testimonial-image-desktop",
            !display && "testimonial-image-mobile",
          )}
        >
          Image
        </div>
      )}
      <div
        className={clsx(
          "testimonial-text-area",
          display && "testimonial-text-area-desktop",
          !display && "testimonial-text-area-mobile",
          !format && display && "testimonial-text-area-plaintext-desktop",
          !format && !display && "testimonial-text-area-plaintext-mobile",
        )}
      >
        {!format && (
          <img className="testimonial-logo" src={logo} alt="company logo" />
        )}
        <p>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.”
        </p>
        <div
          className={clsx(
            "testimonial-name-area",
            !format && display && "testimonial-name-area-plaintext-desktop",
          )}
        >
          <p className="testimonial-name">Jimmy Centrist</p>
          {!format && display && <ForwardSlash />}
          <p className={!format && "testimonial-name-occupation-plaintext"}>
            CTO at Brickage PLC
          </p>
        </div>
      </div>
    </div>
  );
}
