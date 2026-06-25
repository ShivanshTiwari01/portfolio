'use client';

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ExperienceSection from '../components/ExperienceSection';
import TechSection from '../components/TechSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='site-grid min-h-screen text-[var(--foreground)] font-sans'>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <TechSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
