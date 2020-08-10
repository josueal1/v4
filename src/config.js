module.exports = {
  siteTitle: 'Josue Lopez | Software Engineer',
  siteDescription:
    'Josue Lopez is a software engineer based in Los Angeles, CA who enjoys guiding individuals to their full potential, contributing to communities, and propelling businesses towards growth!',
  siteKeywords:
    'Josue Lopez, Josue, Lopez, josueal1, software engineer, back-end engineer, engineer, backend, api, web developer, flask, UCI, UC Irvine, Irvine, University of California, Target, Vusar',
  siteUrl: 'https://lopezjosue.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-174999151-1',
  googleVerification: 'mI6a26KnGJdL7S8REFaEtpNbE8xF1aUif9FRZNzqg9Q',
  name: 'Josue Lopez',
  location: 'Los Angeles, CA',
  email: 'josueal1@uci.edu',
  github: 'https://github.com/josueal1',
  twitterHandle: '@galvez2j',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/josueal1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/josue-a-lopez',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/joshh__17',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/galvez2j',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
