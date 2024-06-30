import Particles from '@tsparticles/react';
import { motion } from 'framer-motion';
import React from 'react';
import particlesOptions from '../particles-options';
import { PageSections } from '../career-points';

// todo clean this up
const staticLoadProps = {
  initial: { x: 0, y: 0, opacity: 1 },
  animate: { x: 0, y: 50, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: false },
};

function CoverSection() {
  const scrollElementIntoView = (elementId: string) => document.getElementById(elementId)?.scrollIntoView();

  return (
    <div className="h-[100vh]">
      {/* Particles animation */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
      />
      {/*  Anchors */}
      <div className="flex gap-x-10 w-full justify-center mt-10 font-light">
        {Object.values(PageSections).map((section) => (
          <button
            type="button"
            key={section}
            onClick={() => scrollElementIntoView(section)}
            className="hover:text-gray-300"
          >
            {section}
          </button>
        ))}
      </div>
      {/* Name and title */}
      <div className="w-[70rem] mt-[40vh] font-thin">
        <motion.div
          className="text-7xl"
          {...staticLoadProps}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Pablo Paliza-Carre
        </motion.div>
        <motion.div
          className="text-2xl mt-2"
          {...staticLoadProps}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Full stack software engineer
        </motion.div>
      </div>
    </div>
  );
}

export default CoverSection;
