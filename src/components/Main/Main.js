import { useState } from "react";

import Form from "../EntryForm";
import Badge from "../ComponentElements/Badge";

import { formObj } from "../../helpers/constants";
// Implement a button that lets all possible combinations be displayed?

export default function Main(props) {
  const [formElements, setFormElements] = useState(null);
  const [renderWindowElements, setRenderWindowElements] = useState(null);

  switch (props.tab) {
    case "badges":
      console.log("Badges tab selected.");
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
      console.log("Badges tab selected.");
      break;
  }

  return (
    <main>
      <section className="entry-form">
        <Form onSubmission={props.setFormSubmission}>
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
        </Form>
      </section>
      <section className="render-window">
        <Badge text="Badge" style={props.formSubmission} />
      </section>
    </main>
  );
}
