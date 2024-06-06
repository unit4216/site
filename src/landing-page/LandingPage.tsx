import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';

const particlesOptions = {
  background: { opacity: 0 },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: { value: '#ffffff' },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 150,
    },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

export const LandingPage = function () {
  //    todo make responsive

  const careerPoints = [
    {
      date: '2022 - present', employer: 'Westland', title: 'Software Engineer', desc: 'Did stuff',
    },
    {
      date: '2024 - present', employer: 'University of Colorado Boulder', title: 'Student', desc: 'Master\'s of Science in Computer Science',
    },
    {
      date: '2020 - present', employer: 'Paliza Consulting', title: 'Software Engineering Consultant', desc: 'Write and maintain scripts',
    },
    {
      date: '2021 - 2022', employer: 'Synergy Associates', title: 'IT Engineer', desc: 'Did stuff',
    },
    {
      date: '2020 - 2021', employer: 'Equity Smart', title: 'IT Support Coordinator', desc: 'Did stuff',
    },
    {
      date: '2015 - 2018', employer: 'Goldsmiths, University of London', title: 'Student', desc: 'Bachelor\'s of Music',
    },
  ];

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      // await loadFull(engine);
      await loadSlim(engine);
      // await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => { console.log(container); };

  const options: ISourceOptions = useMemo(() => particlesOptions, []);

  const animProps = {
    initial: { x: 0, y: 50, opacity: 0 },
    animate: { x: 0, y: 50, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: false },
  };

  return (
    <div className="bg-sky-950 w-full h-full">
      <div className="text-white flex flex-col items-start">
        {/*  Anchors */}
        {/* todo make anchors work */}
        {/* todo add some animations? */}
        <div className="flex gap-x-10 w-full justify-center mt-10 font-thin">
          <div>Home</div>
          <div>Career</div>
          <div>Contact</div>
        </div>
        {/* Particles animation */}
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        {/* Name etc */}
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
        <div className="ml-96 mt-[50vh] mb-20">
          {careerPoints.map((job, index) => (
            <div className="flex flex-row mb-10">
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
                <div className="font-thin">{job.desc}</div>
              </motion.div>
            </div>
          ))}
        </div>
        {/*  Contact */}
        <motion.div
          className="ml-96 mt-72 mb-96 flex flex-col"
          {...animProps}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* todo change to copy to clipboard? */}
          <a className="text-2xl font-thin mt-2" href="mailto:pf.paliza@gmail.com">pf.paliza@gmail.com</a>
          <a href="https://www.linkedin.com/in/pablo-paliza-carre-029676134/">LinkedIn</a>
          {/* todo add github link */}
          <div>GitHub</div>
        </motion.div>
      </div>
    </div>
  );
};
