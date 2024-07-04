import { motion } from 'framer-motion';
import { Divider } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react';
import catPhoto from '../../assets/cat.jpg';
import { PageSections } from './types/section-types';
import getAnimProps from './helpers/motion-helpers';

// Info used to render relevant links
const links = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/pablo-paliza-carre-029676134/' },
  { name: 'GitHub', link: 'https://github.com/unit4216/' },
];

/**
 * Landing page section containing contact info.
 * @constructor
 */
function ContactSection() {
  return (
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
            {links.map(({ link, name }) => (
              <a
                target="_blank"
                href={link}
                rel="noreferrer"
                className="hover:text-gray-300 flex flex-row items-center"
              >
                {name}
                <ArrowOutwardIcon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactSection;
