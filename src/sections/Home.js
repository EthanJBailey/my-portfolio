import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactModal from 'react-modal';
import './Home.css';

ReactModal.setAppElement('#root');

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });

  return (
    <animated.div id="home" className="home" style={props}>
      <div className="hero-content text-center">
        <h1 className="display-4 text-white">Ethan Bailey</h1>
        <p className="lead text-white">Welcome to my Full Stack Developer Portfolio.</p>
        <div className="button-group">
          <a href="#about" className="btn btn-outline-light mx-2">About Me</a>
          <button onClick={() => setModalIsOpen(true)} className="btn btn-outline-light mx-2">Resume</button>
        </div>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Resume"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Resume</h2>
        <p>Here you can put your resume details or a link to download it.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </ReactModal>
    </animated.div>
  );
}

export default Home;
