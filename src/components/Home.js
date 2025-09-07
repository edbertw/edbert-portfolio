import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Data Science Penultimate @ HKU', 'Prospective Machine Learning Engineer'],
      typeSpeed: 50,
      backSpeed: 50,
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
        <div className="home-image">
          <Image 
            src="/src/self.jpg" 
            alt="Edbert Widjaja" 
            width={200} 
            height={200}
            className="profile-image"
          />
        </div>
        <h1>Edbert W.</h1>
        <h3><span className="multiple-text" ref={typedRef}></span></h3>
        <div className="social-media">
          <a href="https://github.com/edbertw"><i className='bx bxl-github'></i></a>
          <a href="mailto:edbertwid88@gmail.com"><i className='bx bxs-envelope'></i></a>
          <a href="https://www.instagram.com/edbert__wid/"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/edbertwidjaja/"><i className='bx bxl-linkedin-square'></i></a>
        </div>
        <a href="/EdbertWidjaja_CV.pdf" className="btn" download>Download CV</a>
        <a href="/Edbert-AcademicTranscript.pdf" className="btn" download>Download Transcript</a>
      </div>
    </section>
  );
}