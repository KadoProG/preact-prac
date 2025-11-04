import Router, { Route } from "preact-router";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Registration } from "./pages/Registration";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <div class="min-h-screen w-full bg-gray-100 box-border">
      <Navigation />
      <Router path={import.meta.env.VITE_APP_PATH}>
        <Route path={`${import.meta.env.VITE_APP_PATH}/`} component={Home} />
        <Route
          path={`${import.meta.env.VITE_APP_PATH}/about`}
          component={About}
        />
        <Route
          path={`${import.meta.env.VITE_APP_PATH}/register`}
          component={Registration}
        />
        <Route
          path={`${import.meta.env.VITE_APP_PATH}/contact`}
          component={Contact}
        />
        <Route default component={Home} />
      </Router>
    </div>
  );
}
