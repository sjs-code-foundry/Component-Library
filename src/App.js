import "./App.css";

import { createContext, useRef, useEffect } from "react";
import useToggle from "./hooks/useToggle";

import Title from "./components/Title/index";
import Header from "./components/Header/index";

import { RiLightbulbFlashLine } from "react-icons/ri";
// Insert MIT licence text somewhere in this app

const LightDarkContext = createContext();
export { LightDarkContext };
// Do we even need context?

function App() {
  document.title = "Component Library";

  const [dark, toggleDark] = useToggle(false, true, () =>
    console.log(`Dark Mode: ${dark}`),
  );
  // Perhaps implement localStorage to remember dark mode setting?

  const appRef = useRef(null);

  useEffect(() => {
    const bodyRef = appRef.current.parentNode.parentNode;

    dark
      ? (bodyRef.classList = "dark-bg dark-text")
      : (bodyRef.classList = "light-bg light-text");
  }, [dark]);

  return (
    <LightDarkContext.Provider value={{ dark, toggleDark }}>
      <Title>
        <h1>Component Library</h1>
        <Title.Button
          className={dark ? "dark-accent" : "light-accent"}
          onClick={toggleDark}
        >
          <RiLightbulbFlashLine className="light-dark-btn-content" />
        </Title.Button>
      </Title>
      <div className="App" ref={appRef}>
        <Header className={dark ? "dark-border-bottom" : "light-border-bottom"}>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => console.log("Badges button clicked.")}
          >
            Badges
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => console.log("Banners button clicked.")}
          >
            Banners
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => console.log("Cards button clicked.")}
          >
            Cards
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => console.log("Testimonials button clicked.")}
          >
            Testimonials
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => console.log("Tooltips button clicked.")}
          >
            Tooltips
          </Header.Button>
          <Header.Button
            className={dark ? "dark-text" : "light-text"}
            onClick={() => console.log("Toast Popups button clicked.")}
          >
            Toast Popups
          </Header.Button>
        </Header>
        <main>
          <section className="entry-form">
            <p>This is where the entry form will go.</p>
          </section>
          <section className="render-window">
            <p>This is where the rendering window will go.</p>
          </section>
        </main>
      </div>
    </LightDarkContext.Provider>
  );
}

export default App;
