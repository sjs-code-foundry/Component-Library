import "./App.css";

import { createContext, useState, useRef, useEffect } from "react";
import useToggle from "./hooks/useToggle";

import clsx from "clsx";

import Title from "./components/Title/index";
import Header from "./components/Header/index";
import Main from "./components/Main/Main";

import { RiLightbulbFlashLine } from "react-icons/ri";
// Insert MIT licence text somewhere in this app

const LightDarkContext = createContext();
export { LightDarkContext };

function App() {
  document.title = "Component Library";

  const [dark, toggleDark] = useToggle(false, true, () => {});
  // Perhaps implement localStorage to remember dark mode setting?
  const [tab, setTab] = useState("badges");
  const [formSubmission, setFormSubmission] = useState(null);

  const appRef = useRef(null);

  useEffect(() => {
    const bodyRef = appRef.current.parentNode.parentNode;

    dark
      ? (bodyRef.classList = "dark-bg dark-text")
      : (bodyRef.classList = "light-bg light-text");
  }, [dark]);

  function handleTabSelect(tab) {
    function navigationActions() {
      // Reset form elements
      setFormSubmission(null);
      setTab(tab);
    }

    if (formSubmission !== null) {
      const message =
        "Navigating away from this tab will erase your current component, do you wish to continue?";
      if (window.confirm(message)) {
        // Code if user wants to navigate away
        navigationActions();
      }
    } else {
      navigationActions();
    }
  }

  return (
    <LightDarkContext.Provider value={{ dark, toggleDark }}>
      <Title>
        <h1>Component Library</h1>
        <Title.Button
          className={dark ? "dark-accent" : "light-accent"}
          onClick={toggleDark}
        >
          <RiLightbulbFlashLine
            className={clsx(
              "light-dark-btn-content",
              `${dark ? "dark" : "light"}-bulb-icon`,
            )}
          />
        </Title.Button>
      </Title>
      <div className="App" ref={appRef}>
        <Header className={dark ? "dark-border-bottom" : "light-border-bottom"}>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => handleTabSelect("badges")}
          >
            Badges
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => handleTabSelect("banners")}
          >
            Banners
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => handleTabSelect("cards")}
          >
            Cards
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => handleTabSelect("testimonials")}
          >
            Testimonials
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => handleTabSelect("tooltips")}
          >
            Tooltips
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => handleTabSelect("toast-popups")}
          >
            Toast Popups
          </Header.Button>
        </Header>
        <Main
          tab={tab}
          formSubmission={formSubmission}
          setFormSubmission={setFormSubmission}
        />
      </div>
    </LightDarkContext.Provider>
  );
}

export default App;

// <section className="entry-form">
//   <Form onSubmission={setFormSubmission}>
//     <Form.Dropdown
//       labelText="Badge Color: "
//       name="badge-color"
//       options={formObj.badges.colors}
//     />
//     <Form.Radios
//       labelText="Badge Shape: "
//       name="badge-shape"
//       options={formObj.badges.shapes}
//     />
//   </Form>
// </section>
// <section className="render-window">
//   <Badge text="Badge" style={formSubmission} />
// </section>
