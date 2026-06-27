import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiRedux,
  SiReduxsaga,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiMui,
  SiAxios,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDjango,
  SiJest,
  SiExpress,
} from "react-icons/si";

import {
  TbChartHistogram,
  TbApi,
  TbChartBar,
} from "react-icons/tb";

import {
  FiActivity,
  FiGitPullRequest,
} from "react-icons/fi";

import {
  RiTestTubeLine,
} from "react-icons/ri";

import {
  LuWorkflow,
} from "react-icons/lu";

import {
  GiArtificialHive,
  GiShield,
  GiTreeBranch,
  GiElectric,
} from "react-icons/gi";

import "./Skills.scss";

const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiReduxsaga />, name: "Redux Saga" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiSass />, name: "SCSS" },
      { icon: <SiMui />, name: "Material UI" },
      { icon: <SiAxios />, name: "Axios" },
      { icon: <TbApi />, name: "REST APIs" },
      { icon: <TbChartBar />, name: "Charts" },
      { icon: <TbChartHistogram />, name: "Analytics" },
    ],
  },

  {
    title: "Data & Analytics",
    skills: [
      { icon: <TbChartHistogram />, name: "CubeJS" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <TbApi />, name: "REST APIs" },
      { icon: <TbChartBar />, name: "Data Visualization" },
      { icon: <TbChartBar />, name: "Dashboards" },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },

  {
    title: "Engineering Practices",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiJest />, name: "Jest" },
      { icon: <RiTestTubeLine />, name: "Enzyme" },
      { icon: <LuWorkflow />, name: "Agile" },
      { icon: <FiActivity />, name: "Performance Optimization" },
      { icon: <FiGitPullRequest />, name: "Code Reviews" },
    ],
  },

  {
    title: "Security & Research",
    skills: [
      { icon: <GiShield />, name: "Cyber Security" },
      { icon: <GiArtificialHive />, name: "Machine Learning" },
      { icon: <GiTreeBranch />, name: "Random Forest" },
      { icon: <GiElectric />, name: "Extreme Learning Machine" },
      { icon: <GiShield />, name: "CSRF Analysis" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="skills__content">

          <span className="section-tag">
            Tools & Technologies
          </span>

          <h2 className="section-title">
            Technologies I Work With
          </h2>

          <p className="skills__description">
            Throughout my career, I've worked
            across frontend engineering,
            enterprise analytics, backend
            systems, and cybersecurity
            research while continuously
            expanding my technical expertise.
          </p>

          {skillGroups.map((group) => (
            <div
              className="skill-group"
              key={group.title}
            >

              <h3>
                {group.title}
              </h3>

              <div className="skill-grid">

                {group.skills.map((skill) => (
                  <div
                    className="skill-card"
                    key={skill.name}
                  >

                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <span>
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;