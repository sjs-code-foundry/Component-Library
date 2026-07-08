import { useState, useEffect } from "react";

import Form from "../EntryForm";
import Badge from "../ComponentElements/Badge";

import { formObj } from "../../helpers/constants";
// Implement a button that lets all possible combinations be displayed?

export default function Main(props) {
  const [formElements, setFormElements] = useState(null);
  const [renderWindowElements, setRenderWindowElements] = useState(null);

  useEffect(() => {
    switch (props.tab) {
      case "badges":
        setFormElements(
          <>
            <Form.Dropdown
              labelText="Badge Color: "
              name="badge-color"
              options={formObj.badges.colors}
            />
            <Form.Radios
              labelText="Badge Shape: "
              name="badge-shape"
              options={formObj.badges.shapes}
            />
          </>,
        );
        setRenderWindowElements(
          <Badge text="Badge" style={props.formSubmission} />,
        );
        break;
      case "banners":
        console.log("Banners tab selected.");
        break;
      case "cards":
        console.log("Cards tab selected.");
        break;
      case "testimonials":
        console.log("Testimonials tab selected.");
        break;
      case "tooltips":
        console.log("Tooltips tab selected.");
        break;
      case "toast-popups":
        console.log("Toast Popups tab selected.");
        break;
      default:
        setFormElements(<p>Form not loaded.</p>);
        setRenderWindowElements(<p>Rendering Window not loaded.</p>);
        break;
    }
  }, [props.tab, props.formSubmission]);

  return (
    <main>
      <section className="entry-form">
        <Form onSubmission={props.setFormSubmission}>{formElements}</Form>
      </section>
      <section className="render-window">{renderWindowElements}</section>
    </main>
  );
}
