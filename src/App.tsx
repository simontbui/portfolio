import React from 'react';
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Experience/>
      <Projects/>
      <Education/>
      <Skills/>
      <p>hello</p>
    </>
  );
}

export default App;
