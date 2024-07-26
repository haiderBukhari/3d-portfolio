import {
  javascript, html, css, reactjs, tailwind, nodejs, mongodb, git, threejs,
  hf, bny, headstarter, holopin,
  clg, quantumstech, crm, tiers, tazkiyah, school,
  project1, project3, project4, project5, kipp, project2, oop, yml, crud, dwld, onetomany,
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
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySql",
    icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
  },
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
    name: "OOP Lab",
    description:
      "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "coding",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
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
  {
    name: "Computer Graphics Lab",
    description:
      "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
    tags: [
      {
        name: "computergraphics",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: cg,
    source_link: "https://github.com/shinchancode/Computer-Graphics",
    source_code_link: "https://github.com/shinchancode/Computer-Graphics",
  },

];

export const webProject = [
  {
    name: "3D React Portfolio",
    description:
      "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "3d_react",
        color: "pink-text-gradient",
      },
    ],
    image: port_3d,
    source_link: "https://shinchancode.github.io/3d-react-portfolio/",
    source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
  },
  {
    name: "React portfolio",
    description:
      "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "html css",
        color: "pink-text-gradient",
      },
    ],
    image: react1,
    source_link: "https://shinchancode.github.io/React-Portfolio/",
    source_code_link: "https://github.com/shinchancode/React-Portfolio",
  },
  {
    name: "30 Days of JavaScript",
    description:
      "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "30dayschallenge",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jsp,
    source_link: "https://rathi-30-days-of-javascript.onrender.com/",
    source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
  },
  {
    name: "Chit Chat Application",
    description:
      "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
    tags: [
      {
        name: "Chatting",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: chitchat,
    source_link: "https://chit-chat-app.onrender.com/",
    source_code_link: "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
  },
  {
    name: "Notes Application",
    description:
      "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
    tags: [
      {
        name: "notes",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    source_link: "https://shinchancode.github.io/Notes-App/",
    source_code_link: "https://github.com/shinchancode/Notes-App",
  },
];

export const otherProject = [
  {
    name: "Multilingual Multiple Choice Question Generation",
    description:
      "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "multilingual",
        color: "green-text-gradient",
      },
      {
        name: "BE_Project",
        color: "pink-text-gradient",
      },
    ],
    image: be,
    source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
    source_code_link: "https://github.com/shinchancode/Final-Year-Project",
  },

  {
    name: "DBMS Lab",
    description:
      "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: sql,
    source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
  },
  {
    name: "SQL : Library Management System",
    description:
      "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "miniproject",
        color: "pink-text-gradient",
      },
    ],
    image: mini,
    source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
  },
  {
    name: "Pyhton : Snake and Ladder",
    description:
      "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
    tags: [
      {
        name: "snake and ladder",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: snl,
    source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
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
    title: "DSA Mentor",
    company_name: "GeeksforGeeks (Intern)",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    iconBg: "#E6DEDD",
    date: "May 2022 - Apr 2023",
    link: "",
    points: [
      "Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.",
      "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
    ],
    link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
  },
  {
    title: "Technical Content Writer",
    company_name: "GeeksforGeeks",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    iconBg: "#383E56",
    date: "Dec 2020 - July 2022",
    link: "",
    points: [
      "Creative and experienced content writer with 2+ years of experience.",
      "Attracted over 10000+ visitors to the company website with powerful educational content.",
      "Wrote 100+ articles and improved 300+ articles on topics like Data Structures, Algorithms, Mathematics and related engineering topics",
    ],
    link: "https://auth.geeksforgeeks.org/user/_shinchancode",
  },
  {
    title: "Google Cloud Training",
    company_name: "Google Cloud",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Apr 2021",
    link: "",
    points: [
      "Introduction to GCP and more functionalities with free access to quests, skill badges.",
      "Collaborating with cross-functional technologies.",
      "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
      "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
    ],
    link: "https://www.cloudskillsboost.google/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
  },
  {
    title: "Hacktoberfest",
    company_name: "GitHub",
    icon: hf,
    iconBg: "#E6DEDD",
    date: "Oct (2020 - 2022)",
    link: "",
    points: [
      "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
      "GitHub hosts many open source repositories that contribute to this event.",
    ],
    link: "https://dev.to/shinchancode",
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
