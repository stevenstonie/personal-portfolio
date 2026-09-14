import { JSX, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './main-sections/Intro/Intro'
import About from './main-sections/About/About'
import Projects from './main-sections/Projects/Projects'
import Contact from './main-sections/Contact/Contact'
import More from './main-sections/More/More'
import "./App.css";

let currentYear: string = new Date().getFullYear().toString();

function App(): JSX.Element {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const minimumDelay = new Promise(resolve => setTimeout(resolve, 800));

    Promise.all([document.fonts.ready, minimumDelay]).then(() => {
      setIsReady(true);
    });

    const failsafeTimeout = setTimeout(() => setIsReady(true), 2000);

    return () => {
      clearTimeout(failsafeTimeout);
    };
  }, []);

  if (!isReady) {
    return (
      <div style={{ height: '100svh', overflowY: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--background-color)' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '2rem', fontWeight: 'bold' }}>
          <span style={{ color: 'var(--primary-color)' }}>[ </span>
          <span className="blinking_cursor" style={{ color: '#ffffff' }}>_</span>
          <span style={{ color: 'var(--primary-color)' }}> ]</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="main-page-container">
        <h1 className='sr-only'>Developer with all-around expertise</h1>
        <section style={{ height: '100svh' }} id="home">
          <Intro />
        </section>
        <section className="centered-x-axis" id="about">
          <About />
        </section>
        <br></br>
        <br></br>
        <section className="centered-x-axis" id="projects">
          <Projects />
        </section>
        <br></br>
        <br></br>
        <section className="centered-x-axis" id="more">
          <More />
        </section>
        <section style={{ margin: '0 var(--navbar-width) 0 var(--navbar-width)' }} className="centered-x-axis" id="contact">
          <Contact />
        </section>
        <section style={{ marginTop: '30vh', marginBottom: '1rem' }} className="centered-x-axis" id="footer">
          <div className="footer">

            <a href="https://http.cat/418" target="_blank" rel="noopener noreferrer">
              <p>☕</p>
            </a>

            <small>&copy; {currentYear} All rights reserved.</small>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
