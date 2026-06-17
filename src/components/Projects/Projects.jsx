import "./Projects.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built using React with glassmorphism UI.",

    tech: "React, HTML, CSS, JavaScript",

    icon: <FaReact />,
  },

  {
    title: "Blog Post Website (MERN)",

    description: "Role-based authentication, CRUD operations and secure APIs.",

    tech: "MongoDB, Express, React, Node",

    icon: <FaNodeJs />,
  },

  {
    title: "Mental Wellness Health Tracker",

    description: "Mood tracking and daily reflections with intuitive UI.",

    tech: "React, REST API",

    icon: <FaDatabase />,
  },
];

export default function Projects() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
            <motion.div
              key={index}
              className="project-card glass"
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={
                visible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: index * 0.2,
              }}
              whileHover={{
                rotateX: 8,
                rotateY: 8,
                scale: 1.03,
              }}
            >
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
