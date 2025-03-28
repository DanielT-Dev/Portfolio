import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PostTemplate from "./posts/PostTemplate";

const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:post_id" element={<PostTemplate />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
