import Form from "../EntryForm";
import Badge from "../ComponentElements/Badge";

import { formObj } from "../../helpers/constants";
// Implement a button that lets all possible combinations be displayed?

export default function Main(props) {
  console.log(props);

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
