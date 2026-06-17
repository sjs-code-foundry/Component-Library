import "./App.css";

import Header from "./components/Header/index";

function App() {
  document.title = "Component Library";

  return (
    <div className="App">
      <Header>
        <Header.Button>Badges</Header.Button>
        <Header.Button>Banners</Header.Button>
        <Header.Button>Cards</Header.Button>
        <Header.Button>Testimonials</Header.Button>
        <Header.Button>Tooltips</Header.Button>
        <Header.Button>Toast Popups</Header.Button>
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

// <a href="#">This is a link</a>
// <p> | </p>
// <a href="#">This is a second link</a>
// <p> | </p>
// <a href="#">This is a third link</a>
