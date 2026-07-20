import { useState, useEffect } from "react";

import Form from "../EntryForm";
import Badge from "../ComponentElements/Badge";
import Banner from "../ComponentElements/Banner";
import Card from "../ComponentElements/Card";
import Testimonial from "../ComponentElements/Testimonial";
import Tooltip from "../ComponentElements/Tooltip";
import ToastPopup from "../ComponentElements/ToastPopup";

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
            <Form.Text
              labelText="Badge Text: "
              name="badge-text"
              multiLine={false}
              placeholder="Enter custom text."
              required={false}
            />
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
        setRenderWindowElements(<Badge properties={props.formSubmission} />);
        break;
      case "banners":
        setFormElements(
          <>
            <Form.Dropdown
              labelText="Banner Type: "
              name="banner-type"
              options={formObj.banners.types}
            />
            <Form.Text
              labelText="Banner Title: "
              name="banner-title"
              multiLine={false}
              placeholder="Required."
              required={true}
            />
            <Form.Text
              labelText="Banner Message: "
              name="banner-message"
              multiLine={true}
              placeholder="Enter text here to generate a multi-line banner."
              required={false}
            />
          </>,
        );
        setRenderWindowElements(<Banner properties={props.formSubmission} />);
        break;
      case "cards":
        setFormElements(
          <>
            <Form.Text
              labelText="Card Title: "
              name="card-title"
              multiLine={false}
              placeholder="Required."
              required={true}
            />
            <Form.Text
              labelText="Card Message: "
              name="card-message"
              multiLine={true}
              placeholder="Required."
              required={true}
            />
          </>,
        );
        setRenderWindowElements(<Card properties={props.formSubmission} />);
        break;
      case "testimonials":
        setFormElements(
          <>
            <Form.ImageUpload name="testimonial-image" />
            <Form.Text
              labelText="Testimonial Message: "
              name="testimonial-message"
              multiLine={true}
              placeholder="Required."
              required={true}
            />
            <Form.Text
              labelText="Name: "
              name="testimonial-name"
              multiLine={false}
              placeholder="Required."
              required={true}
            />
            <Form.Text
              labelText="Occupation: "
              name="testimonial-occupation"
              multiLine={false}
              required={false}
            />
            <Form.Dropdown
              labelText="Testimonial Format: "
              name="testimonial-format"
              options={formObj.testimonials.format}
            />
            <Form.Radios
              labelText="Display Mode: "
              name="testimonial-display"
              options={formObj.testimonials.display}
            />
          </>,
        );
        setRenderWindowElements(
          <Testimonial properties={props.formSubmission} />,
        );
        break;
      case "tooltips":
        setFormElements(
          <>
            <Form.Text
              labelText="Tooltip Title: "
              name="tooltip-title"
              multiLine={false}
              placeholder="Required."
              required={true}
            />
            <Form.Text
              labelText="Tooltip Message: "
              name="tooltip-message"
              multiLine={true}
              placeholder="Required."
              required={true}
            />
            <Form.Dropdown
              labelText="Tooltip Color: "
              name="tooltip-color"
              options={formObj.tooltips.colors}
            />
            <Form.Radios
              labelText="Tooltip Style: "
              name="tooltip-style"
              options={formObj.tooltips.styles}
            />
          </>,
        );
        setRenderWindowElements(<Tooltip properties={props.formSubmission} />);
        break;
      case "toast-popups":
        setFormElements(
          <>
            <Form.Dropdown
              labelText="Toast Popup Type: "
              name="toast-popup-type"
              options={formObj.toastPopups.types}
            />
            <Form.Text
              labelText="Toast Popup Title: "
              name="toast-popup-title"
              multiLine={false}
              placeholder="Required."
              required={true}
            />
            <Form.Text
              labelText="Toast Popup Message: "
              name="toast-popup-message"
              multiLine={true}
              placeholder="Required."
              required={true}
            />
          </>,
        );
        setRenderWindowElements(
          <ToastPopup properties={props.formSubmission} />,
        );
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
