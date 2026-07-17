import { useState, useContext } from "react";

import clsx from "clsx";

import { LightDarkContext } from "../../App";

export default function ImageUpload(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const { dark } = useContext(LightDarkContext);

  function handleChange(e) {
    setSelectedImage(e.target.files[0]);
    console.log(selectedImage);
  }

  return (
    <div className="image-upload">
      <label
        className={clsx(
          "image-upload-label",
          `${dark ? "dark" : "light"}-accent`,
        )}
      >
        <input type="file" name={props.name} onChange={handleChange} />
        {selectedImage ? (
          <>
            <p>Image:</p>
            <p>{selectedImage.name}</p>
          </>
        ) : (
          <p>Upload Image</p>
        )}
      </label>
    </div>
  );
}
