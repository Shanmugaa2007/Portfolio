import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiRust,
  SiR,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiAndroidstudio,
  SiJsonwebtokens,
  SiVite,
  SiFramer,
  SiGreensock,
  SiVercel,
  SiRender,
  SiRailway,
  SiJson,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  FaJava,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaBroom,
  FaRobot,
  FaBolt,
  FaPalette,
} from "react-icons/fa";

import { TbCube } from "react-icons/tb";

const ICONS = {
  C: SiC,
  "C++": SiCplusplus,
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Rust: SiRust,
  R: SiR,

  "React.js": SiReact,
  "React Native": FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Three.js": SiThreedotjs,
  "React Three Fiber": TbCube,
  Vite: SiVite,
  "Framer Motion": SiFramer,
  GSAP: SiGreensock,
  Drei: TbCube,
  Lenis: SiJson,
  "React Icons": SiReact,
  "Shadcn UI": TbCube,

  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  FastAPI: SiFastapi,

  MongoDB: SiMongodb,
  "MongoDB Atlas": SiMongodb,
  Mongoose: FaDatabase,
  SQL: FaDatabase,
  "Oracle SQL": FaDatabase,

  "OpenAI API": FaRobot,
  Claude: FaRobot,
  "Claude API": FaRobot,
  "Groq API": FaBolt,

  "Power BI": FaChartBar,
  Excel: FaChartBar,
  "Data Cleaning": FaBroom,
  "Data Visualization": FaChartBar,

  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  "VS Code": VscVscode,
  "Android Studio": SiAndroidstudio,
  Canva: FaPalette,

  "JWT (architecture ready)": SiJsonwebtokens,

  "Vercel (Frontend)": SiVercel,
  "Render / Railway (Backend)": SiRender,
  Railway: SiRailway,
};

export function getIcon(name) {
  return ICONS[name] || TbCube;
}