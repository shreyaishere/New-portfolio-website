import "./Skills.css";

import { motion }
from "framer-motion";

import useScrollReveal
from "../../hooks/useScrollReveal";

const skillsData = [

{
title:"Frontend",

skills:[
["HTML5",95],
["CSS3",92],
["JavaScript",90],
["React.js",88]
]
},

{
title:"Backend",

skills:[
["Node.js",85],
["Express.js",82]
]
},

{
title:"Database",

skills:[
["MongoDB",85],
["MySQL",80]
]
},

{
title:"Tools",

skills:[
["Git",90],
["GitHub",88],
["VS Code",95],
["Linux",75],
["REST APIs",85]
]
}

];

export default function Skills() {

const [ref, visible] =
useScrollReveal();

return (

<section
id="skills"
ref={ref}
>

<h2 className="section-title">
Skills
</h2>

<div className="skills-grid">

{skillsData.map((group,index)=>(

<motion.div

key={group.title}

className="skill-group glass"

initial={{
opacity:0,
y:50
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
delay:index*.15
}}
>

<h3>
{group.title}
</h3>

{group.skills.map(
([name,level])=>(
<div
className="skill-item"
key={name}
>

<div className="skill-top">

<span>{name}</span>

<span>
{level}%
</span>

</div>

<div className="bar">

<motion.div

className="fill"

initial={{
width:0
}}

animate={
visible
?
{
width:
`${level}%`
}
:
{}
}

transition={{
duration:1.5
}}

></motion.div>

</div>

</div>
)
)}

</motion.div>

))}

</div>

</section>

);

}