import { JSX } from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './main-sections/Intro/Intro'
import About from './main-sections/About/About'
import Projects from './main-sections/Projects/Projects'
import Contact from './main-sections/Contact/Contact'
import More from './main-sections/More/More'
import "./App.css";

let currentYear: string = new Date().getFullYear().toString();

function App(): JSX.Element {
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
