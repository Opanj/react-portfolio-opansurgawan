// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import forlokers from "../assets/projects/forlokers.png";
import portfolio from "../assets/projects/portfolio.png";
import loanMarket from "../assets/projects/loanmarket.png";
import bajoKomodo from "../assets/projects/bajokomodo.png";

export const HERO_CONTENT = `I am a passionate front-end developer or full stack developer with a knack for crafting robust and scalable web applications. 
With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, 
as well as back-end technologies like Node.js, MySQL, and PostgreSQL. My goal is to leverage my expertise to 
create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Bachelor degree from Nahdlatul Wathan University, Mataram. worked in the retail sector for 1 year, the reason for
changing careers was wanting to work in the information technology sector a strong interest in web development,
currently building a career in programming and also participating in Full-Stack Web Developer bootcamp program
to deepen skills in Web Developer. Has interpersonal time management and sociable, fast learner new things
quickly, and able to work in team, details oriented who want full time opportunities as a Front-end Developer in Web
Development field.`;

export const EXPERIENCES = [
  {
    year: "Okt - Des 2023",
    role: "Frontend Developer",
    company: "Harisenin.com",
    description: `Developed a job vacancy website using ReactJS, TailwindCSS and Javascript with the team, Make the appearance from the landing page to the dashboard follow the team's Figma
design.`,
    technologies: ["Tailwindcss", "Javascript", "React.js", "Vite"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    link: "/",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "Tailwindcss"],
  },
  {
    title: "Job Vacancy Website",
    link: "https://github.com/AnnangBudiS/front-end-kelompok4",
    image: forlokers,
    description: `Developed a job vacancy website using ReactJS, TailwindCSS and Javascript with the team, Make the appearance from the landing page to the dashboard follow the team's Figma
design.`,
    technologies: ["HTML", "CSS", "Javascript", "Tailwindcss", "React.js"],
  },
  {
    title: "Dashboard Loan Market",
    // link: "#",
    image: loanMarket,
    description:
      "build a web dashboard by following the figma design using react js and tailwind and supporting libraries.",
    technologies: ["HTML", "CSS", "Tailwindcss", "React.js"],
  },
  {
    title: "Website Travel Agent",
    // link: "#",
    image: bajoKomodo,
    description:
      "build a travel agent website by following the figma design using Laravel, Bootstrap and supporting libraries.",
    technologies: ["HTML", "Bootstrap", "Laravel", "Vite"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },

  // data project di bagian archive
  {
    year: "2023",
    project: "Website Portfolio",
    madeAt: "Upstatement",
    technologies: ["React", "Tailwindcss", "Framer Motion", "vite.js"],
    link: "#",
    linkName: "opansurgawan.com",
    first: "Website",
    last: "Portfolio",
  },
  {
    year: "2023",
    project: "Corporate Website",
    madeAt: "Upstatement",
    technologies: ["React", "Tailwindcss", "javascript", "Node.js", "MySQL"],
    link: "#",
    linkName: "magnumopus.com",
    first: "Corporate",
    last: "Website",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+62 819 3700 8791",
  linkWa: "https://wa.me/6281937008791",
  email: "m.taopansurgawan@gmail.com",
  linkEmail: "mailto:m.taopansurgawan@gmail.com",
};
