import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
const Store = lazy(() => import("./components/Store"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h1> Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
