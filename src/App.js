import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import Resume from './sections/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Technologies />
      <Resume />
    </div>
  );
}

export default App;
