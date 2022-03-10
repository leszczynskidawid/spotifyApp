import "./App.css";

import Nav from "./components/organisms/Nav";

import { BrowserRouter as Router } from "react-router-dom";

import Pages from "./pages/Pages";
function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Nav />
        </header>
        <main>
          <Pages />
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
