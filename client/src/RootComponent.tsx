// import "./RootComponent.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { Home } from "./components/Home";

const RootComponent: React.FC = () => {
  return (
    <div>
      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="*" element={<Home />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default RootComponent;
