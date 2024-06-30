import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import careerPoints from './helpers/career-points';
import { PageSections, PositionType } from './types/section-types';
import getAnimProps from './helpers/motion-helpers';

function CareerSection() {
  return (
    <div id={PageSections.CAREER} className="py-20 h-[100vh]">
      {careerPoints.map((job, index) => {
        const {
          id, description, employer, type, date, title,
        } = job;
        const previousEntry = careerPoints[index - 1];
        // Show divider between education and work section if start of education section.
        // This works assuming that points are ordered as expected.
        const showDivider = type === PositionType.EDUCATION && previousEntry?.type === PositionType.WORK;
        // variable animation duration
        const duration = 0.2 + (index * 0.1);
        return (
          <div key={id}>
            {/* Work/education divider */}
            {showDivider && (
            <motion.div
              className="flex flex-col items-center my-10"
              {...getAnimProps(duration)}
            >
              <Divider color="gray" className="w-1/2 mx-auto" />
            </motion.div>
            )}
            {/* Display work/education event */}
            <div className="flex flex-row my-4">
              <motion.div
                className="font-thin w-52 text-right"
                {...getAnimProps(duration)}
              >
                {date}
              </motion.div>
              <motion.div
                className="flex flex-col ml-12"
                {...getAnimProps(duration)}
              >
                <div className="font-bold">{employer}</div>
                <div>{title}</div>
                <div className="font-thin w-[50rem]">{description}</div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CareerSection;
