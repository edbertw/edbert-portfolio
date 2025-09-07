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
        <Link href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</Link>
        <Link href="#about" className={activeLink === 'about' ? 'active' : ''}>About</Link>
        <Link href="#education" className={activeLink === 'education' ? 'active' : ''}>Education</Link>
        <Link href="#experience" className={activeLink === 'experience' ? 'active' : ''}>Experience</Link>
        <Link href="#recommendations" className={activeLink === 'recommendations' ? 'active' : ''}>Recommendations</Link>
        <Link href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>Projects</Link>
        <Link href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
}