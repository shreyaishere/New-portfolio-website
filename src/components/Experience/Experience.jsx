import "./Experience.css";

import { motion }
from "framer-motion";

import useScrollReveal
from "../../hooks/useScrollReveal";

export default function Experience() {

const [ref, visible] =
useScrollReveal();

return (

<section
id="experience"
ref={ref}
>

<h2 className="section-title">
Experience
</h2>

<div className="timeline">

<motion.div

className="timeline-card glass"

initial={{
opacity:0,
x:-80
}}

animate={
visible
?
{
opacity:1,
x:0
}
:
{}
}

transition={{
duration:.8
}}
>

<h3>
Full Stack Developer Intern
</h3>

<h4>
Infoseek Software System
</h4>

<span>
May 2025 - July 2025
</span>

<ul class="portfolio-list">
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Developed full-stack web applications using React.js, Node.js, Express.js and MongoDB.</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Integrated REST APIs across services and the React frontend.</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Improved UI/UX responsiveness across mobile and desktop.</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Worked in an Agile environment with sprint planning and code reviews.</span>
  </li>
  <li>
    <span class="bullet-dot"></span>
    <span class="list-text">Used Git and GitHub for version control and team collaboration.</span>
  </li>
</ul>
</motion.div>

</div>

</section>

);

}