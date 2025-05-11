import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PostTemplate from "./posts/PostTemplate";

// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';


const App = () => {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:post_id" element={<PostTemplate />} />
        </Routes>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
