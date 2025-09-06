import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Recommendations from '../components/Recommendations';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>edbertw</title>
        <meta name="description" content="Edbert Widjaja's Portfolio" />
      </Head>

      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Recommendations />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}