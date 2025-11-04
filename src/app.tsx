import Router, { Route } from "preact-router";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Registration } from "./pages/Registration";
import { Contact } from "./pages/Contact";
import "./app.css";

export function App() {
  return (
    <div class="app">
      <Navigation />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Registration} />
        <Route path="/contact" component={Contact} />
        <Route default component={Home} />
      </Router>
    </div>
  );
}
