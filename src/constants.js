import htmlLogo from "../src/assets/tech_logo/html.png";
import cssLogo from "../src/assets/tech_logo/css.png";
import sassLogo from "../src/assets/tech_logo/sass.png";
import javascriptLogo from "../src/assets/tech_logo/javascript.png";
import reactjsLogo from "../src/assets/tech_logo/reactjs.png";
import reduxLogo from "../src/assets/tech_logo/redux.png";
import tailwindcssLogo from "../src/assets/tech_logo/tailwindcss.png";
import materialuiLogo from "../src/assets/tech_logo/materialui.png";
import bootstrapLogo from "../src/assets/tech_logo/bootstrap.png";
import nodejsLogo from "../src/assets/tech_logo/nodejs.png";
import mongodbLogo from "../src/assets/tech_logo/mongodb.png";
import gitLogo from "../src/assets/tech_logo/git.png";
import githubLogo from "../src/assets/tech_logo/github.png";
import vscodeLogo from "../src/assets/tech_logo/vscode.png";
import postmanLogo from "../src/assets/tech_logo/postman.png";
import figmaLogo from "../src/assets/tech_logo/figma.png";

// Experience Section Logo's

import spaceLogo from "../src/assets/company_logo/tSe_logo 2.png";
import tcsLogo from "./assets/company_logo/tcs_logo.jpeg";
import crystalLogo from "./assets/company_logo/crystal_logo.png";

// Project Section Logo's
import cardLogo from "../src/assets/work_logo/cardhover.png";
import myntraLogo from "../src/assets/work_logo/Myntra.png";
import dateLogo from "../src/assets/work_logo/Dateflu.png";
import stockLogo from "../src/assets/work_logo/Stock10.png";

import todoLogo from "../src/assets/work_logo/Todo.png";

// Education Section Logo's
import asmaLogo from "../src/assets/education_logo/asmibmr.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      // { name: "Express JS", logo: expressjsLogo },
      // { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      // { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
      // { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },

      { name: "JavaScript", logo: javascriptLogo },
      // { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      // { name: "Vercel", logo: vercelLogo },
      // { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: spaceLogo,
    role: "React Js Developer",
    company: "The Space Element",
    date: "July 2021 - Jan 2023",

    desc: "Developed dynamic and scalable web applications using the React.js,Redux handling frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      " Bootstrap",
      "MongoDb",
      "Redux",
    ],
  },
  {
    id: 1,
    img: tcsLogo,
    role: "Business Associate",
    company: "Tata Consultancy Service",
    date: "Oct 2017 - June 2019",
    desc: "Responsible for maintaining a high level of customer service, gathering required data and providing preliminary assessments on the performance of existing accounts, and providing information on possible new services for high- valued customer.",
    skills: ["communication", "leadership", "adaptability", "Problem solving"],
  },
  {
    id: 2,
    img: crystalLogo,
    role: "Frontend Intern",
    company: "Crystal",
    date: "August 2016 - August 2017",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Card Hover",
    description:
      "The card hover effect on this page appears to be a simple interactive animation that triggers when users hover over card elements",
    image: cardLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/waghmarenikita49/Card-hover",
    webapp: "https://waghmarenikita49.github.io/Card-hover/",
  },
  {
    id: 1,
    title: "Myntra clone",
    description:
      "This project is a Myntra-inspired e-commerce clone built with HTML, CSS, and JavaScript, focusing on front-end functionality.",
    image: myntraLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/waghmarenikita49/myntra-javascript",
    webapp: "https://waghmarenikita49.github.io/myntra-javascript/",
  },

  {
    id: 3,
    title: "DateFlue",
    description:
      "This DateFlue project appears to be a date and time management web application built with HTML, CSS, and JavaScript.",
    image: dateLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/waghmarenikita49/DateFlue-Project",
    webapp: "https://waghmarenikita49.github.io/DateFlue-Project/",
  },
  {
    id: 4,
    title: "Stock10",
    description:
      "This Stock10 project appears to be a stock market or investment tracker web application built with HTML, CSS, and JavaScript, possibly integrating with a financial API.",
    image: stockLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/waghmarenikita49/stock10",
    webapp: "https://waghmarenikita49.github.io/stock10/",
  },

  {
    id: 5,
    title: "TodoApp",
    description:
      "This React Todo App is a task management application built with React.js, providing a clean and interactive way to organize daily tasks. ",
    image: todoLogo,
    tags: ["JavaScript", "React Js", "HTML", "CSS"],
    github: "https://github.com/waghmarenikita49/todo-app",
    webapp: "https://waghmarenikita49.github.io/todo-app/",
  },
];
export const education = [
  {
    id: 0,
    img: asmaLogo,
    school: "ASMIBMR Pune",
    date: "completed - 2016",
    grade: "64.62 %",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Pune University. During my time at ASMIBMR, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  // {
  //   id: 1,
  //   img: bcaLogo,
  //   school: "Kamla Nehru College, Nagpur",
  //   date: "completed - 2013",
  //   grade: "51.48%",
  //   desc: "I completed my Bachelor's degree in Computer Application  (B.C.A) from Kamla Nehru College, Nagpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //   degree: "Bachelor of  - Computer Application",
  // },
];
