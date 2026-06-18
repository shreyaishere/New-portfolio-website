import "./Certifications.css";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";

const certifications = [
  {
    title: "Node.js",
    issuer: "Scaler",
  },
  {
    title: "JavaScript",
    issuer: "Scaler",
  },
  {
    title: "PHP & MySQL",
    issuer: "Spoken Tutorial, IIT Bombay",
  },
];

export default function Certifications() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="certifications" ref={ref}>

      <h2 className="section-title">
        Certifications
      </h2>

      {/* Achievement Card */}

      <motion.div
        className="achievement-card"
        initial={{ opacity: 0, y: 50 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{ duration: 0.6 }}
      >
        <div className="achievement-icon">
          🏆
        </div>

        <div className="achievement-content">
          <span className="achievement-label">
            ACHIEVEMENT
          </span>

          <h3>
            Smart India Hackathon — Top Selected Team
            (Internal Round)
          </h3>

          <p>
            Team Haven Ventures — selected in the
            internal round of Smart India Hackathon
            (SIH).
          </p>
        </div>

        <div className="achievement-rank">
          <h1>1</h1>
          <span>HACKATHON WIN</span>
        </div>
      </motion.div>

      {/* Certificates */}

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{
              opacity: 0,
              y: 40,
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
              delay: index * 0.15,
            }}
          >
            <div className="cert-header">
              <div className="cert-icon">★</div>

              <span className="cert-tag">
                CERTIFICATE
              </span>
            </div>

            <div className="cert-content">
              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// / import "./Certifications.css";

// import { motion }
// from "framer-motion";

// import useScrollReveal
// from "../../hooks/useScrollReveal";

// const certificates = [

// "Node.js - Scaler",

// "JavaScript - Scaler",

// "PHP & MySQL - Spoken Tutorial IIT Bombay"

// ];

// export default function Certifications(){

// const [ref, visible] =
// useScrollReveal();

// return (

// <section
// id="certifications"
// ref={ref}
// >

// <h2 className="section-title">
// Certifications
// </h2>

// <div className="cert-grid">

// {certificates.map(
// (item,index)=>(

// <motion.div

// key={index}

// className="cert-card glass"

// initial={{
// opacity:0,
// scale:.8
// }}

// animate={
// visible
// ?
// {
// opacity:1,
// scale:1
// }
// :
// {}
// }

// transition={{
// delay:index*.2
// }}
// >

// {item}

// </motion.div>

// )
// )}

// </div>

// </section>

// );

// }