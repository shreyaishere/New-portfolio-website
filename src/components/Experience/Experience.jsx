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

<ul>

<li>
Developed Full Stack
Applications using MERN.
</li>

<li>
Integrated REST APIs.
</li>

<li>
Improved UI/UX.
</li>

<li>
Worked in Agile Teams.
</li>

<li>
Version control using
Git and GitHub.
</li>

</ul>

</motion.div>

</div>

</section>

);

}