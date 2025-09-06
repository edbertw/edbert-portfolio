import '../styles/global.css'
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize ScrollReveal
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;
      
      ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
      });

      ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
      ScrollReveal().reveal('.skills-section,.skills-grid,.skill-item', { origin: 'bottom' });
      ScrollReveal().reveal('.experience-container,.experience-details', { origin: 'top' });
      ScrollReveal().reveal('.recommendations-container,.recommendation-item', { origin: 'bottom' });
      ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
      ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
      ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
      ScrollReveal().reveal('.education-container,.education-item,.award-item', { origin: 'top' });
    }
  }, []);

  return (
    <>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp