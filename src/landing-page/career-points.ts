export enum PositionType {
  WORK = 'Work',
  EDUCATION = 'Education',
}

const careerPoints = [
  {
    id: 1,
    date: '2022 - present',
    employer: 'Westland',
    title: 'Software Engineer',
    desc: `Work independently and as part of a small team to develop and maintain internal 
    full-stack applications as well as varied scripts and automations.`,
    type: PositionType.WORK,
  },
  {
    id: 2,
    date: '2020 - present',
    employer: 'Paliza Consulting',
    title: 'Software Engineering Consultant',
    desc: `Develop and maintain Python ETL tools for parsing and visualizing power flow 
    data scraped from industry APIs.`,
    type: PositionType.WORK,
  },
  {
    id: 3,
    date: '2021 - 2022',
    employer: 'Synergy Associates',
    title: 'IT Engineer',
    desc: `Provided onsite IT support to a primary client in DTLA while occasionally providing remote support 
    to other US clients.`,
    type: PositionType.WORK,
  },
  {
    id: 4,
    date: '2020 - 2021',
    employer: 'Equity Smart',
    title: 'IT Support Coordinator',
    desc: 'Provided internal IT support to company employees.',
    type: PositionType.WORK,
  },
  {
    id: 5,
    date: '2024 - present',
    employer: 'University of Colorado Boulder',
    title: 'Student',
    desc: 'Master\'s of Science in Computer Science',
    type: PositionType.EDUCATION,
  },
  {
    id: 6,
    date: '2015 - 2018',
    employer: 'Goldsmiths, University of London',
    title: 'Student',
    desc: 'Bachelor\'s of Music',
    type: PositionType.EDUCATION,
  },
];

export default careerPoints;
