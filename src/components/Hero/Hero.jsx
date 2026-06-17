import "./Hero.css";

import { motion } from "framer-motion";

// import Particles from "../Particles/Particles";

import ParticlesBackground from "../Particles/ParticlesBackground";

import BackgroundBlobs from "../BackgroundBlobs/BackgroundBlobs";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <BackgroundBlobs />

     <ParticlesBackground />
      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <span>Full Stack Developer</span>

        <h1>
          Hi, I'm
          <br />
          <span className="gradient-text">Shreya Shukla</span>
        </h1>

        <p>Building Responsive and Scalable Web Applications</p>

        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn btn-primary">
            Download Resume
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
