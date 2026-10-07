import React, { useState } from "react";
import Sidebar from "./component/Layout/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experiance";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#35364a] font-sans antialiased">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <Hero />
        <About />
        <Experience/>
      </main>
    </div>
  );
}

export default App;
