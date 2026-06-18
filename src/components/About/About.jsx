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
              I'm Shreya Shukla, a fresher Full Stack Developer pursuing my BCA at Maharishi
              University. My career objective is simple: build software that's fast,
              accessible, and genuinely useful.
            </p>
            <p>
              I love taking an idea from a Figma sketch to a deployed MERN application —
              writing clean React components on the frontend, designing REST APIs on the
              backend, and shipping with Git/GitHub.
            </p>
            <p>
              <ul class="portfolio-list">
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Passionate about responsive, modern web UI</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Quick learner who enjoys picking up new stacks</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Strong problem-solving and debugging mindset</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Comfortable across MERN, MySQL, and REST APIs</span>
  </li>
</ul>
</p>
              


        </div>

      </motion.div>

    </section>

  );
}