import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Settings from "./Setting";
import Profile from "./Profile";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ margin: 100 }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/setting" exact element={<Settings />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/about" exact element={<About />} />
          <Route path="*" exact element={<div>Unknown Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
