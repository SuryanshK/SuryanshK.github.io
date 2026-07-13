'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AboutSection from '@/components/about';
import ProjectsSection from '@/components/projects';
import EducationSection from '@/components/education';
import ContactSection from '@/components/contact';
import HeroSection from '@/components/hero';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}