import {
  javascript, typescript, html, css, reactjs, nextjs, aws, redis, supabase, tailwind, nodejs, mongodb, git, threejs,
  hf, bny, headstarter, vanar, tiers1, triwebapi, holopin,
  clg, quantumstech, crm, tiers, tazkiyah, school,
  project1, project3, eventdapp, project4, project5, kipp, project2, oop, yml, crud, dwld, onetomany,
  trie, ds, cg,
  port_3d, jsp, chitchat, notes, react1,
  be, sql, mini, snl, fastnuces, fic
} from "../assets";

const profiles = [
  {
    link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
  },
  {
    link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
  },
  {
    link: "https://www.hackerrank.com/_shinchancode",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://dev.to/shinchancode",
    icon: hf,
  },
  {
    link: "https://www.holopin.io/@shinchancode#badges",
    icon: holopin,
  },
];

const achievements = [
  {
    title: "NASCOM'24 Hackathon Winner in which we nailed it by building Full Stack Application in 8 hours among 30 different teams.",
  },
  {
    title: "4th in MetaSchool Hackathon by building Decentralized Applications",
  },
]

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs
  },
  {
    name: "AWS",
    icon: aws
  },
  {
    name: "Redis",
    icon: redis
  },
  {
    name: "Supabase",
    icon: supabase
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  // {
  //   name: "Bootstrap",
  //   icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  // },
  // {
  //   name: "Google Cloud",
  //   icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  // },
  // {
  //   name: "C++ tool",
  //   icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "MySql",
  //   icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
  // },
];

const list = [
  {
    id: "MERN",
    title: "MERN Stack",
  },
  {
    id: "Next",
    title: "Next JS",
  },
  {
    id: "Blockchain",
    title: "Web3 Blockchain",
  },
  {
    id: "C++",
    title: "C++ (Games)",
  }
];

export const mernProjects = [
  {
    name: "Rental Mate",
    description:
      "This project makes it easy to rent products online, with real-time chat using Socket.IO. Vendors can list their products for rent, and users can pay for rentals securely with Stripe.",
    tags: [
      {
        name: "ECommerce",
        color: "blue-text-gradient",
      },
      {
        name: "VendorMarketplace",
        color: "green-text-gradient",
      },
      {
        name: "RealTimeChat",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_link: "https://rental-mate-frontend.vercel.app",
    source_code_link: "https://github.com/haiderBukhari/Rental-Mate-Frontend",
  },
  {
    name: "KZ Travel Site",
    description:
      "This project extensively utilizes Rest API, incorporating Firebase authentication, database, hosting, and storage. The KZ travel site boasts a top-notch UI/UX design created with the React framework, featuring numerous hidden functionalities.",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "aws-s3",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_link: "https://kz-cars.com",
    source_code_link: "https://github.com/haiderBukhari/KZ-CARS",
  },
  {
    name: "Ego",
    description:
      "Ego is a Seamlessly integrate online tools which provide's platforms to enhance your restaurant's visibility, engage with customers, and boost your online reputation. From managing social media profiles to optimizing search presence.",
    tags: [
      {
        name: "aws-s3",
        color: "blue-text-gradient",
      },
      {
        name: "CustomerEngagement",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_link: "https://github.com/shinchancode/CRUD-Operation",
    source_code_link: "https://github.com/shinchancode/CRUD-Operation",
  },
  {
    name: "Scarlett Global",
    description:
      "Scarlett Global is an attractive website with primary focus on providing cutting-edge services in modern technologies. Our platform is dedicated to delivering innovative solutions, keeping you at forefront in tech landscape.",
    tags: [
      {
        name: "CuttingEdgeServices",
        color: "blue-text-gradient",
      },
      {
        name: "FutureTech",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_link: "https://scarlett-global.netlify.app/",
    source_code_link: "https://github.com/haiderBukhari/NextJS-project/",
  },
  {
    name: "QuantumsTech",
    description:
      "QuantumsTech is a top nitch service providing platform with over 15+ developers and more then 50 projects developed included multiple SaaS, Ecommerce Applications and CRM for our customer needs.",
    tags: [
      {
        name: "SaaS",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: quantumstech,
    source_link: "www.quantumstech.com",
    source_code_link: "https://github.com/haiderBukhari/QuantumsTech",
  },
  {
    name: "Swiss Mining",
    description:
      "Swiss Mining is a platform promoting crypto mining simple, with user friendly dashboards and listing and mining of new coins",
    tags: [
      {
        name: "crypto",
        color: "blue-text-gradient",
      },
      {
        name: "coins",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: tiers,
    source_link: "https://tiers-frontend.vercel.app/",
    source_code_link: "https://github.com/haiderBukhari/TiersLTD-1",
  },
  {
    name: "Tazkiyah",
    description:
      "Tazkiyah is an innovative projects which was developed by GDSC Society Members at Rippah which promotes the daily habbits, connect with mentors, organizing meetings, managing shedules and providing great analytics",
    tags: [
      {
        name: "analytics",
        color: "blue-text-gradient",
      },
      {
        name: "meetings",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: tazkiyah,
    source_link: "https://tazkiyah.netlify.app/",
    source_code_link: "https://github.com/haiderBukhari/Tazkiyah-",
  },
  {
    name: "STOREYS CRM",
    description:
      "In tis CRM I have developed multiple functionalities including uploading leads, managing complex leads, maintaining proper hirarchey, creating performance dashboard and analytics dashboard for company employees.",
    tags: [
      {
        name: "crm",
        color: "blue-text-gradient",
      },
      {
        name: "leads",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_link: "http://www.storeysuae.com/",
    source_code_link: "https://github.com/haiderBukhari/STOREYS-Frontend",
  },
];

export const cProject = [
  {
    name: "Spell Checker",
    description:
      "Kipp is Transforming Legal Practices with Custom AI Solutions by providing AI Chatbots, Automations, Workflows and Custom Platforms",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "chatbots",
        color: "green-text-gradient",
      },
      {
        name: "automations",
        color: "pink-text-gradient",
      },
    ],
    image: kipp,
    source_link: "https://kipp-ai.com/",
    source_code_link: "https://github.com/haiderBukhari/Kipp-Ai",
  },
  {
    name: "Transforming Voices",
    description:
      "This dynamic website is built using next js. This Website offers a seamless and user-friendly experience, allowing you to access a world of information, services, and entertainment from the comfort of your own device.",
    tags: [
      {
        name: "Innovation",
        color: "blue-text-gradient",
      },
      {
        name: "UserFriendly",
        color: "green-text-gradient",
      },
      {
        name: "OnlineServices",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_link: "https://next-js-project1-wxmi.vercel.app/",
    source_code_link: "https://github.com/haiderBukhari/NextJS-project/",
  },
];

export const webProject = [
  {
    name: "Tetris Game",
    description:
      "I have created a version of Tetris using SFML graphics in C++ that includes several additional features such as bombs, line destruction, a menu, score display, and a block suggestion feature.",
    tags: [
      {
        name: "tetris",
        color: "blue-text-gradient",
      },
      {
        name: "games",
        color: "green-text-gradient",
      },
      {
        name: "sfml",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    video: "https://res.cloudinary.com/djunaxxv0/video/upload/v1722018990/w9hwadevbfsgn6t4xbqb.mp4",
    source_link: "",
    source_code_link: "https://github.com/haiderBukhari/Space-Shooter-Game",
  },
  {
    name: "Space Shooter Game",
    description:
      "I have developed Space Shooter Game using the SFML library, featuring multiple levels with increasing difficulty, where the player controls a spaceship, battles enemy monsters, and avoids obstacles. ",
    tags: [
      {
        name: "shooter",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
      {
        name: "sfml",
        color: "pink-text-gradient",
      },
    ],
    video: 'https://res.cloudinary.com/djunaxxv0/video/upload/v1722016516/epcgrtjib8z6kmmtfq8q.mp4',
    image: react1,
    source_link: "",
    source_code_link: "https://github.com/haiderBukhari/Tetris-Game-C-",
  },

];

export const otherProject = [
  {
    name: "EventHub",
    description:
      "EventHub is a Decentralized Event Application developed as a part of MetaSchool Hackathon. It is an innovative platform leverages cutting-edge technology to revolutionize the way events are organized and managed.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "smartcontracts",
        color: "green-text-gradient",
      },
      {
        name: "hackathon",
        color: "pink-text-gradient",
      },
    ],
    image: eventdapp,
    source_link: "https://www.linkedin.com/posts/mhaiderbukhari_hey-everyone-hows-it-going-we-are-activity-7160689977675112451-M98e?utm_source=share&utm_medium=member_desktop",
    source_code_link: "https://github.com/haiderBukhari/Metaschool-Event-Application-R2W3",
  },
];

const experiences = [
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter AI",
    icon: headstarter,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    link: "",
    points: [
      "Build this 3d portfolio website as Task for the first week",
      "Create a pantry tracker application using firebase",
      "Develop a customer support AI using openAI",
      "Launch an Al flashcard app with a subscription model",
      "Design an AI rate my professor using pinecones and embeddings"
    ],
  },
  {
    title: "Founder",
    company_name: "QuantumsTech",
    icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
    iconBg: "#383E56",
    date: "September 2023 - Present",
    link: "",
    points: [
      "We are 15+ Developers in our Community where we are building multiple SaaS Applications and products as per clients needs.",
      "Scaled and improved the performance of multiple MERN applications.",
      "Successfully completed nearly 50 Freelance Projects.",
    ],
    link: "www.quantumstech.com",
  },
  {
    title: "Web3 Builder",
    company_name: "Vanar",
    icon: vanar,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    link: "",
    points: [
      "Building NFT Marketplace and deploying to vanar chain.",
    ],
    link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
  },
  {
    title: "Full Stack Developer",
    company_name: "Tiers Limited",
    icon: tiers1,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    link: "",
    points: [
      "Building Roboust MERN Stack Applications.",
      "Working with NextJS, MERN to build Coin Mining Platform.",
    ],
    link: "https://auth.geeksforgeeks.org/user/_shinchancode",
  },
  {
    title: "MERN Stack Intern",
    company_name: "TriwebAPI",
    icon: triwebapi,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Nov 2023",
    link: "",
    points: [
      "Worked on MERN STACK, Typescript, SQL, and Agile Project Management tools like jira for efficiency and productivity.",
      "Attending daily scrum meeting for progress of tasks"
    ],
    link: "https://www.cloudskillsboost.google/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
  },

];

const educations = [
  {
    degree: "BS Computer Science",
    branch:
      "MERN, Blockchain",
    name: "National University of Computer & Emerging Sciences FAST",
    year: "(2022 - Ownwards)",
    image: fastnuces,
  },
  {
    degree:
      "FSC",
    branch: "Pre Engieering",
    marks:
      "Percentage : 95%",
    name: "Fazaia Inter College Minhas, Kamra",
    year: "2022",
    image: fic,
  },
  {
    degree:
      "Matric",
    branch: "SSC",
    marks:
      "Percentage : 88%",
    name: "Fazaia Inter College Minhas, Kamra",
    year: "2020",
    image: fic,
  },
];

export { list, profiles, technologies, experiences, educations, achievements };
