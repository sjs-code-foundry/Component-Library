import { useState, useEffect } from "react";

import clsx from "clsx";

import QuoteMarks from "./Decorations/QuoteMarks";
import DotMatrix from "./Decorations/DotMatrix";
import ForwardSlash from "./Decorations/ForwardSlash";

import logo from "../../img/Logo.png";
import defaultAvatar from "../../img/Default-Avatar.png";

export default function Testimonial(props) {
  const [componentCSS, setComponentCSS] = useState({ display: "none" });
  const [format, setFormat] = useState(null);
  const [display, setDisplay] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const [occupation, setOccupation] = useState(null);

  useEffect(() => {
    if (props.properties) {
      const avatar = props.properties.get("testimonial-image");

      if (avatar.name !== "") {
        setImgSrc(URL.createObjectURL(avatar));
      } else {
        setImgSrc(null);
      }

      setMessage(props.properties.get("testimonial-message"));
      setName(props.properties.get("testimonial-name"));
      setOccupation(props.properties.get("testimonial-occupation"));

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
        <img
          className={clsx(
            "testimonial-image",
            display && "testimonial-image-desktop",
            !display && "testimonial-image-mobile",
          )}
          src={imgSrc ? imgSrc : defaultAvatar}
          alt="Avatar"
        />
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
        <p>{`"${message}"`}</p>
        <div
          className={clsx(
            "testimonial-name-area",
            !format && display && "testimonial-name-area-plaintext-desktop",
          )}
        >
          <p className="testimonial-name">{name}</p>
          {!format && display && <ForwardSlash />}
          <p className={!format && "testimonial-name-occupation-plaintext"}>
            {occupation}
          </p>
        </div>
      </div>
    </div>
  );
}
