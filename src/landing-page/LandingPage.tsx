import React from 'react';

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

  return (
    <div className="bg-sky-950 w-full h-full">
      <div className="text-white flex flex-col items-start">
        {/*  Anchors */}
        <div className="flex gap-x-10 w-full justify-center mt-10 font-thin">
          <div>Home</div>
          <div>Career</div>
          <div>Contact</div>
        </div>
        {/* Name etc */}
        <div className="ml-96 mt-72">
          <div className="text-7xl font-thin">Pablo Paliza-Carre</div>
          <div className="text-2xl font-thin mt-2">Full stack software engineer</div>
        </div>
        {/*  Career */}
        <div className="ml-96 mt-[50vh] mb-20">
          {careerPoints.map((job) => (
            <div className="flex flex-row mb-10">
              <div className="font-thin w-52 text-right">{job.date}</div>
              <div className="flex flex-col ml-12">
                <div className="font-bold">{job.employer}</div>
                <div>{job.title}</div>
                <div className="font-thin">{job.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/*  Contact */}
        <div className="ml-96 mt-72 mb-96 flex flex-col">
          {/* todo change to copy to clipboard? */}
          <a className="text-2xl font-thin mt-2" href="mailto:pf.paliza@gmail.com">pf.paliza@gmail.com</a>
          <a href="https://www.linkedin.com/in/pablo-paliza-carre-029676134/">LinkedIn</a>
          {/* todo add github link */}
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
};
