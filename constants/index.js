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
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
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
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
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
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   // icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   // icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    //image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    //image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    //image: tripguide,
    source_code_link: 'https://github.com/',
  },
]
// services, technologies, experiences, testimonials, projects
export { technologies, experiences, projects }
