import "./App.css";

function App() {
  document.title = "Component Library";

  return (
    <div className="App">
      <header>
        <a href="#">This is a link</a>
        <p> | </p>
        <a href="#">This is a second link</a>
        <p> | </p>
        <a href="#">This is a third link</a>
      </header>
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
