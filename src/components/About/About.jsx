import "./About.css";

import { motion } from "framer-motion";

import useScrollReveal
from "../../hooks/useScrollReveal";

export default function About() {

  const [ref, visible] =
    useScrollReveal();

  return (

    <section
      id="about"
      ref={ref}
      className="about-section"
    >

      <motion.div

        initial={{
          opacity:0,
          y:60
        }}

        animate={
          visible
          ?
          {
            opacity:1,
            y:0
          }
          :
          {}
        }

        transition={{
          duration:.8
        }}
      >

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-card glass">

          <p>

            Fresher Full Stack Developer with
            knowledge of HTML, CSS,
            JavaScript, React.js,
            Node.js and MongoDB.

          </p>

          <p>

            Skilled in building responsive
            web applications and REST APIs
            with strong understanding of
            Git, GitHub and Software
            Development Life Cycle.

          </p>

          <p>

            Quick learner with excellent
            problem-solving abilities and
            passion for modern web
            technologies.

          </p>

        </div>

      </motion.div>

    </section>

  );
}