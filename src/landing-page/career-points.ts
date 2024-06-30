export enum PositionType {
  WORK = 'Work',
  EDUCATION = 'Education',
}

export const getAnimProps = (duration: number) => ({
  initial: { x: 0, y: 50, opacity: 0 },
  animate: { x: 0, y: 50, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: false },
  transition: { duration, ease: 'easeOut' },
});

export enum PageSections {
  CAREER = 'Career',
  CONTACT = 'Contact',
}

const careerPoints = [
  {
    id: 1,
    date: '2022 - present',
    employer: 'Westland',
    title: 'Software Engineer',
    description: `Work independently and as part of a small team to develop and maintain internal 
    full-stack applications as well as varied scripts and automations.`,
    type: PositionType.WORK,
  },
  {
    id: 2,
    date: '2020 - present',
    employer: 'Paliza Consulting',
    title: 'Software Engineering Consultant',
    description: `Develop and maintain Python ETL tools for parsing and visualizing power flow 
    data scraped from industry APIs.`,
    type: PositionType.WORK,
  },
  {
    id: 3,
    date: '2021 - 2022',
    employer: 'Synergy Associates',
    title: 'IT Engineer',
    description: `Provided onsite IT support to a primary client in DTLA while occasionally providing remote support 
    to other US clients.`,
    type: PositionType.WORK,
  },
  {
    id: 4,
    date: '2020 - 2021',
    employer: 'Equity Smart',
    title: 'IT Support Coordinator',
    description: 'Provided internal IT support to company employees.',
    type: PositionType.WORK,
  },
  {
    id: 5,
    date: '2024 - present',
    employer: 'University of Colorado Boulder',
    title: 'Student',
    description: 'Master\'s of Science in Computer Science',
    type: PositionType.EDUCATION,
  },
  {
    id: 6,
    date: '2015 - 2018',
    employer: 'Goldsmiths, University of London',
    title: 'Student',
    description: 'Bachelor\'s of Music',
    type: PositionType.EDUCATION,
  },
];

export default careerPoints;
