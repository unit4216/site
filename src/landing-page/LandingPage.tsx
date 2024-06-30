import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Divider } from '@mui/material';
import catPhoto from '../assets/cat.jpg';
import careerPoints from './career-points';
import particlesOptions from './particles-options';

const animProps = {
  initial: { x: 0, y: 50, opacity: 0 },
  animate: { x: 0, y: 50, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: false },
};

function LandingPage() {
  //    todo make responsive

  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); })
      .catch(err=>console.error(err));
  }, []);


  const scrollElementIntoView = (elementId: string) => document.getElementById(elementId)?.scrollIntoView();


  return (
    <div className="bg-sky-950 w-full h-full">
      <div className="text-white flex flex-col items-start">
        {/*  Anchors */}
        <div
          className="flex gap-x-10 w-full justify-center mt-10 font-light"
        >
          <button
            type="button"
            onClick={() => scrollElementIntoView('career')}
            className="hover:text-gray-300"
          >
            Career
          </button>
          <button
            type="button"
            onClick={() => scrollElementIntoView('contact')}
            className="hover:text-gray-300"
          >
            Contact
          </button>
        </div>
        {/* Particles animation */}
        <Particles
          id="tsparticles"
          particlesLoaded={async () => {}}
          options={particlesOptions}
        />
        {/* Name and title */}
        <div className="ml-96 mt-72">
          <motion.div
            className="text-7xl font-thin"
            {...animProps}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Pablo Paliza-Carre
          </motion.div>
          <motion.div
            className="text-2xl font-thin mt-2"
            {...animProps}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Full stack software engineer
          </motion.div>
        </div>
        {/*  Career */}
        <div id="career" className="ml-96 mt-[50vh] mb-20 py-20">
          {careerPoints.map((job, index) => {

            const firstEducationPoint = job.type === 'education' && careerPoints[index - 1]?.type === 'work';

            return (
              <div key={job.id}>
                {firstEducationPoint && (
                    <div className='flex flex-col items-center my-10'>
                      <Divider color='gray' className='w-1/2 mx-auto'/>
                    </div>
                )}
              <div  className="flex flex-row my-4">
              <motion.div
                className="font-thin w-52 text-right"
                {...animProps}
                transition={{ duration: 0.2 + (index * 0.1), ease: 'easeOut' }}
              >
                {job.date}
              </motion.div>
              <motion.div
                className="flex flex-col ml-12"
                {...animProps}
                transition={{ duration: 0.2 + (index * 0.1), ease: 'easeOut' }}
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
        {/*  Contact */}
        <div id="contact" className="mt-96 mb-72 flex flex-row gap-x-10 justify-center w-full">
          <motion.div
            {...animProps}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="z-0"
          >
            <img src={catPhoto} alt="My cat, Coco" className="h-72 rounded-lg" />
            <div className='text-xs italic mt-2'>Coco, circa 2024</div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center gap-y-4"
            {...animProps}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <a
              className="text-2xl font-thin mt-2 hover:text-gray-300"
              href="mailto:pf.paliza@gmail.com"
            >
              pf.paliza@gmail.com
            </a>
            <Divider flexItem className="bg-gray-300 w-4/5" />
            <div>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pablo-paliza-carre-029676134/"
                rel="noreferrer"
                className="hover:text-gray-300 flex flex-row items-center"
              >
                LinkedIn
                <ArrowOutwardIcon />
              </a>
              {/* todo make sure github is cleaned up */}
              <a
                href="https://github.com/unit4216/"
                target="_blank"
                className="hover:text-gray-300 flex flex-row items-center"
                rel="noreferrer"
              >
                GitHub
                <ArrowOutwardIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
