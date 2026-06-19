import "./App.css";

import Header from "./components/Header/index";

function App() {
  document.title = "Component Library";

  return (
    <div className="App">
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
        <Header.Button onClick={() => console.log("Tooltips button clicked.")}>
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
  );
}

export default App;
