import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

function Header() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Order Management | Login</h2>
    </div>
  );
}

function Sidebar() {
  return (
    <div>
      <h2>Homepage | Profile</h2>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Ecommerce</h1>

        <nav>
          <Link to="/">Header</Link> |{" "}
          <Link to="/sidebar">Sidebar</Link> |{" "}
          <Link to="/footer">Footer</Link> |{" "}
          <Link to="/menu">Menu</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;