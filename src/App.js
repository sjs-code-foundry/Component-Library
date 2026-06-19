import "./App.css";

import { createContext, useRef } from "react";
import useToggle from "./hooks/useToggle";

import Title from "./components/Title/index";
import Header from "./components/Header/index";

const LightDarkContext = createContext();
export { LightDarkContext };

function App() {
  document.title = "Component Library";

  const [dark, toggleDark] = useToggle(false, () =>
    console.log(`Dark Mode: ${dark}`),
  );

  const appRef = useRef(null);
  // const bodyRef = appRef.current.parentNode.parentNode;

  // bodyRef only works when app is initialised

  return (
    <LightDarkContext.Provider value={{ dark, toggleDark }}>
      <Title>
        <h1>Component Library</h1>
        <Title.Button onClick={toggleDark}>Toggle Dark Mode</Title.Button>
      </Title>
      <div className="App" ref={appRef}>
        <Header>
          <Header.Button onClick={() => console.log("Badges button clicked.")}>
            Badges
          </Header.Button>
          <Header.Button onClick={() => console.log("Banners button clicked.")}>
            Banners
          </Header.Button>
          <Header.Button onClick={() => console.log("Cards button clicked.")}>
            Cards
          </Header.Button>
          <Header.Button
            onClick={() => console.log("Testimonials button clicked.")}
          >
            Testimonials
          </Header.Button>
          <Header.Button
            onClick={() => console.log("Tooltips button clicked.")}
          >
            Tooltips
          </Header.Button>
          <Header.Button
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
