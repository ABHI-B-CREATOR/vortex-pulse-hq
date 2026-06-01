import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import AboutSkillsSection from '../components/AboutSkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <ProjectsGrid />
        <AboutSkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
