import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveLink(id);
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  };
  
  return (
    <header className="header">
      <a href="#" className="logo">E.W.</a>
      <div id="menu-icon" className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} onClick={toggleMenu}></div>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <Link href="#home" className={activeLink === 'home' ? 'active' : ''} aria-label="Home">
          <span className="nav-link"><i className='bx bx-home-alt nav-icon'></i><span>Home</span></span>
        </Link>
        <Link href="#about" className={activeLink === 'about' ? 'active' : ''} aria-label="About">
          <span className="nav-link"><i className='bx bx-user nav-icon'></i><span>About</span></span>
        </Link>
        <Link href="#education" className={activeLink === 'education' ? 'active' : ''} aria-label="Education">
          <span className="nav-link"><i className='bx bx-book-open nav-icon'></i><span>Education</span></span>
        </Link>
        <Link href="#experience" className={activeLink === 'experience' ? 'active' : ''} aria-label="Experience">
          <span className="nav-link"><i className='bx bx-briefcase nav-icon'></i><span>Experience</span></span>
        </Link>
        <Link href="#recommendations" className={activeLink === 'recommendations' ? 'active' : ''} aria-label="Recommendations">
          <span className="nav-link"><i className='bx bx-message-dots nav-icon'></i><span>Recs</span></span>
        </Link>
        <Link href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''} aria-label="Projects">
          <span className="nav-link"><i className='bx bx-code-alt nav-icon'></i><span>Projects</span></span>
        </Link>
        <Link href="#contact" className={activeLink === 'contact' ? 'active' : ''} aria-label="Contact">
          <span className="nav-link"><i className='bx bx-envelope nav-icon'></i><span>Contact</span></span>
        </Link>
      </nav>
    </header>
  );
}