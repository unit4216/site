import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import careerPoints, { getAnimProps, PageSections, PositionType } from '../career-points';

function CareerSection() {
  return (
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
  );
}

export default CareerSection;
