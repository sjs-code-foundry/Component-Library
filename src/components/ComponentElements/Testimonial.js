import { useState, useEffect } from "react";

import clsx from "clsx";

import { formObj } from "../../helpers/constants";

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
      )}
      style={componentCSS}
    >
      {!display && format && (
        <div className="testimonial-whitebar-mobile"></div>
      )}
      {format && (
        <svg
          className={clsx(
            "testimonial-quote-svg",
            display && "testimonial-quote-svg-desktop",
            !display && "testimonial-quote-svg-mobile",
          )}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.436 41.136C16.476 41.136 20.22 37.104 20.22 32.352C20.22 27.6 16.908 24.144 12.588 24.144C11.724 24.144 10.572 24.288 10.284 24.432C11.004 19.536 15.612 13.776 20.22 10.896L14.028 6ZM38.796 6C31.596 11.184 26.412 19.68 26.412 29.04C26.412 36.672 31.02 41.136 36.348 41.136C41.244 41.136 45.132 37.104 45.132 32.352C45.132 27.6 41.676 24.144 37.356 24.144C36.492 24.144 35.484 24.288 35.196 24.432C35.916 19.536 40.38 13.776 44.988 10.896L38.796 6Z"
            fill="white"
            fillOpacity="0.25"
          />
        </svg>
      )}
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
        )}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </p>
        <div
          className={clsx(
            "testimonial-name-area",
            !format && display && "testimonial-name-area-plaintext-desktop",
          )}
        >
          <p className="testimonial-name">Jimmy Centrist</p>
          <p>CTO at Brickage PLC</p>
        </div>
      </div>
    </div>
  );
}
