import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Divider } from '@mui/material';
import catPhoto from '../assets/cat.jpg';
import careerPoints, { PositionType } from './career-points';
import particlesOptions from './particles-options';

const getAnimProps = (duration: number) => ({
  initial: { x: 0, y: 50, opacity: 0 },
  animate: { x: 0, y: 50, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: false },
  transition: { duration, ease: 'easeOut' },
});

const links = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/pablo-paliza-carre-029676134/' },
  { name: 'GitHub', link: 'https://github.com/unit4216/' },
];

// todo clean this up
const staticLoadProps = {
  initial: { x: 0, y: 0, opacity: 1 },
  animate: { x: 0, y: 50, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: false },
};

enum PageSections {
  CAREER = 'Career',
  CONTACT = 'Contact',
}

function LandingPage() {
  //    todo make responsive

  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); })
      .catch((err) => console.error(err));
  }, []);

  const scrollElementIntoView = (elementId: string) => document.getElementById(elementId)?.scrollIntoView();

  return (
    <div className="bg-sky-950 w-full h-full">
      <div className="text-white flex flex-col items-center">
        {/* Cover section */}
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
        {/*  Career section */}
        <div id={PageSections.CAREER} className="py-20 h-[100vh]">
          {careerPoints.map((job, index) => {
            // Show divider between education and work section if start of education section
            const showDivider = job.type === PositionType.EDUCATION
                && careerPoints[index - 1]?.type === PositionType.WORK;
            return (
              <div key={job.id}>
                {/* Work/education divider */}
                {showDivider && (
                <div className="flex flex-col items-center my-10">
                  <Divider color="gray" className="w-1/2 mx-auto" />
                </div>
                )}
                {/* Display work/education event */}
                <div className="flex flex-row my-4">
                  <motion.div
                    className="font-thin w-52 text-right"
                    {...getAnimProps(0.2 + (index * 0.1))}
                  >
                    {job.date}
                  </motion.div>
                  <motion.div
                    className="flex flex-col ml-12"
                    {...getAnimProps(0.2 + (index * 0.1))}
                  >
                    <div className="font-bold">{job.employer}</div>
                    <div>{job.title}</div>
                    <div className="font-thin w-[50rem]">{job.desc}</div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        {/*  Contact section */}
        <div id={PageSections.CONTACT} className="h-[100vh] flex flex-row gap-x-10 justify-center w-full">
          <div className="flex flex-row items-center gap-x-10">
            {/* Cat photo */}
            <motion.div
              className="z-0"
              {...getAnimProps(0.4)}
            >
              <img src={catPhoto} alt="My cat, Coco" className="h-72 rounded-lg" />
              <div className="text-xs italic mt-2">Coco, circa 2024</div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center gap-y-4"
              {...getAnimProps(0.5)}
            >
              {/* Contact email */}
              <a
                className="text-2xl font-thin mt-2 hover:text-gray-300"
                href="mailto:pf.paliza@gmail.com"
              >
                pf.paliza@gmail.com
              </a>
              {/* Links */}
              <Divider flexItem className="bg-gray-300 w-4/5" />
              <div>
                {links.map((link) => (
                  <a
                    target="_blank"
                    href={link.link}
                    rel="noreferrer"
                    className="hover:text-gray-300 flex flex-row items-center"
                  >
                    {link.name}
                    <ArrowOutwardIcon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
