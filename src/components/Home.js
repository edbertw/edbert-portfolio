import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Data Science Student @ HKU', 'Prospective Data Scientist'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, My name is</h3>
        <h1>Edbert</h1>
        <h3>And I&apos;m a <span className="multiple-text" ref={typedRef}></span></h3>
        <div className="social-media">
          <a href="https://github.com/edbertw"><i className='bx bxl-github'></i></a>
          <a href="mailto:edbertwid88@gmail.com"><i className='bx bxs-envelope'></i></a>
          <a href="https://www.instagram.com/edbert__wid/"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/edbertwidjaja/"><i className='bx bxl-linkedin-square'></i></a>
        </div>
        <a href="/EdbertWidjaja_CV.pdf" className="btn" download>Download CV</a>
      </div>
    </section>
  );
}