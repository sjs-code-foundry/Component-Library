import { useState, useEffect } from "react";

import Form from "../EntryForm";
import Badge from "../ComponentElements/Badge";
import Banner from "../ComponentElements/Banner";

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
            />
            <Form.Text
              labelText="Banner Message: "
              name="banner-message"
              multiLine={true}
            />
          </>,
        );
        setRenderWindowElements(<Banner style={props.formSubmission} />);
        break;
      case "cards":
        setFormElements(<p>Cards form here.</p>);
        setRenderWindowElements(<p>Rendering Window not loaded.</p>);
        break;
      case "testimonials":
        setFormElements(<p>Testimonials form here.</p>);
        setRenderWindowElements(<p>Rendering Window not loaded.</p>);
        break;
      case "tooltips":
        setFormElements(<p>Tooltips form here.</p>);
        setRenderWindowElements(<p>Rendering Window not loaded.</p>);
        break;
      case "toast-popups":
        setFormElements(<p>Toast Popups form here.</p>);
        setRenderWindowElements(<p>Rendering Window not loaded.</p>);
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
