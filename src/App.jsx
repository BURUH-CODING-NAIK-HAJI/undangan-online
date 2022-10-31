import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomeCard from "./components/WelcomeCard";
import Couples from "./pages/Couples";
import Event from "./pages/Event";
import Gift from "./pages/Gift";
import Home from "./pages/Home";
import Wishes from "./pages/Wishes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeCard />} />
        <Route path="/:nama" element={<WelcomeCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/couples" element={<Couples />} />
        <Route path="/event" element={<Event />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </>
  );
}

export default App;
