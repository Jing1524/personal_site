// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
// } from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

// const services = [
//   {
//     title: 'Web Developer',
//     icon: '/public/icons/web.svg',
//   },
//   {
//     title: 'React Native Developer',
//     icon: mobile,
//   },
//   {
//     title: 'Backend Developer',
//     icon: backend,
//   },
//   {
//     title: 'Content Creator',
//     icon: creator,
//   },
// ]

const technologies = [
  {
    name: 'HTML 5',
    icon: './icons/html-5.png',
  },
  {
    name: 'CSS 3',
    icon: './icons/css-3.png',
  },
  {
    name: 'JavaScript',
    icon: './icons/java-script.png',
  },
  {
    name: 'TypeScript',
    icon: './icons/typescript.png',
  },
  {
    name: 'React JS',
    icon: './icons/reactjs.png',
  },

  {
    name: 'Tailwind CSS',
    icon: './icons/tailwindCSS.png',
  },
  {
    name: 'Node JS',
    icon: './icons/node-js.svg',
  },
  {
    name: 'MongoDB',
    icon: './icons/mongodb.png',
  },
  {
    name: 'Three JS',
    icon: './icons/threeJS.svg',
  },
  {
    name: 'git',
    icon: './icons/github.png',
  },
  {
    name: 'Illustrator',
    icon: './icons/illustrator.png',
  },
  {
    name: 'docker',
    icon: './icons/docker.png',
  },
]

const experiences = [
  {
    title: 'FrontEnd Engineer',
    company_name: 'Pineapple Workshop',
    icon: './icons/pineapple.png',
    iconBg: '#240c74',
    date: 'October 2021 - Present',
    points: [
      'Led the project to develop a responsive, user-friendly website, coordinating directly with the founder/CEO and collaborating with the design team to successfully meet the needs and goals of Pineapple Workshop.',
      'Built a stand-alone utility engine web widget with componentized reusable code, allowing the client to integrate the widget into any existing website.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'FullStack Engineer',
    company_name: 'FullStack Acadamy',
    icon: './icons/fullstack.png',
    iconBg: '#f3f3f3',
    date: 'April 2021 - September 2021',
    points: [
      'Developed fullstack e-commerce applications using React.js and other related technologies.',
      'Implementing responsive design and writing tests with teammates to ensure the quality of the code',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Designer',
    company_name: 'Adjmi Group',
    icon: './icons/adjmi.png',
    iconBg: '#4389c4',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Worked closely with the Director of Design, creating collection concepts and adapting final products for clients.',
      'Conducted market research, including trends, themes, colors, raw materials, styling, and trims.',
      'Worked with technical designers to ensure product samples met specifications.',
      'Coordinated with vendors and clients to ensure successful delivery and client satisfaction.',
    ],
  },
]

const projects = [
  {
    name: 'Translator(Micro web app)',
    description:
      'Micro web app that allows users to search, filter, and choose their nativ language and translate to a language that they prefer, a google translator on a smaller scale',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'chakra-ui',
        color: 'pink-text-gradient',
      },
    ],
    src: './video/translator.mp4',
    source_code_link: 'https://github.com/Jing1524/Translator',
    githubIcon: './icons/github.svg',
  },
  // {
  //   name: 'Job IT',
  //   description:
  //     'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   //image: jobit,
  //   source_code_link: 'https://github.com/',
  // },
  // {
  //   name: 'Trip Guide',
  //   description:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   //image: tripguide,
  //   source_code_link: 'https://github.com/',
  // },
]
// services, technologies, experiences, testimonials, projects
export { technologies, experiences, projects }
