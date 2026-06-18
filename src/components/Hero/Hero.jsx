import "./Hero.css";
import profileImg from "../../assets/profile.jpeg";
import resume from "../../assets/resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <span className="hero-tag">HELLO, WORLD — I'M</span>

        <h1>
          Shreya <span>Shukla</span>
        </h1>

        <h2>&gt; Full Stack Developer</h2>

        <p>
          Fresher Full Stack Developer with knowledge of HTML, CSS, JavaScript,
          React.js, Node.js, Express.js, MongoDB and MySQL. Passionate about
          building responsive web apps, REST APIs, and solving real-world
          problems.
        </p>

        <div className="hero-buttons">
          <a href={resume} download className="primary-btn">
            ↓ Download Resume
          </a>

          <a href="#projects" className="btn secondary">
            View Projects →
          </a>

          <a href="#contact" className="btn text-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="orbit orbit1"></div>
        <div className="orbit orbit2"></div>

        <div className="avatar">
          <img src={profileImg} alt="Shreya Shukla" />
        </div>

        <div className="tech react">React</div>
        <div className="tech mongo">Mongo</div>
        <div className="tech node">Node</div>
        <div className="tech git">Git</div>
        <div className="tech js">JS</div>
      </div>
    </section>
  );
}

// import "./Hero.css";

// import { motion } from "framer-motion";

// // import Particles from "../Particles/Particles";

// import ParticlesBackground from "../Particles/ParticlesBackground";

// import BackgroundBlobs from "../BackgroundBlobs/BackgroundBlobs";

// export default function Hero() {
//   return (
//     <section className="hero" id="hero">
//       <BackgroundBlobs />

//      <ParticlesBackground />
//       <motion.div
//         className="hero-content"
//         initial={{
//           opacity: 0,
//           y: 50,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 1,
//         }}
//       >
//         <span>Full Stack Developer</span>

//         <h1>
//           Hi, I'm
//           <br />
//           <span className="gradient-text">Shreya Shukla</span>
//         </h1>

//         <p>Building Responsive and Scalable Web Applications</p>

//         <div className="hero-buttons">
//           <a href="/resume.pdf" className="btn btn-primary">
//             Download Resume
//           </a>

//           <a href="#contact" className="btn btn-outline">
//             Contact Me
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
