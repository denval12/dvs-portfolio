import project1 from "../projects/project1.png";
import project2 from "../projects/project2.png";
import project3 from "../projects/project3.png";
import project4 from "../projects/project4.png";

export const HERO_CONTENT = `I am a dedicated Software Engineer, I am able to adapt to different environments when necessary. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I have 2 years of professional experience, I have worked with a variety of technologies, including React, Javascript, MySQL, Preventing Cross Site Scripting in PHP. I enjoy staying active, exploring new technologies, and I have a skill of quick learning.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Aplication Developer",
    company: "IBM",
    description: `I've been helping my team to develop a software with React and Node. Maintenance other projects and remediating security issues such as Cross Site Scripting with php.`,
    technologies: ["Javascript", "React.js", "MySQL", "PHP"],
  },
  {
    year: "2021 - 2022",
    role: "Java Developer",
    company: "IBM",
    description: `Blue Journey member in which I built a case study Employment-System with Spring MVC, MySQL and Java.`,
    technologies: ["SPRING MVC", "Java", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "TODO APP LIST",
    image: project1,
    link: "https://dvs-todo.netlify.app/",
    description:
      "A Todo App website with features like create a new task and delete.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
  {
    title: "Portfolio As a Student ",
    image: project2,
    link: "https://portfolio-dvs.netlify.app",
    description:
      "An application for showing my experience like student, skills, and contact information.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Employment System",
    image: project3,
    link: "https://github.com/Denise-code/employmentSystem",
    description:
      "As student I develop a CRUD project with the employes managment like Create, Read ,Update and Delete the employee.",
    technologies: ["Java", "Spring MVC", "MySQL"],
  },
  {
    title: "Tic Tac Toe",
    link: "https://dvs-tic-tac-toe.netlify.app/",
    image: project4,
    description: "Tic Tac Toe Game to practice the React development.",
    technologies: ["Javascript", "React", "CSS"],
  },
];

export const CONTACT = {
  address: "Ciudad Guzmán, Jalisco",
  phoneNo: "+52 453 132 51 28",
  email: "denisevalencia29@gmail.com",
};
