import "./Education.css";

import { motion }
from "framer-motion";

import useScrollReveal
from "../../hooks/useScrollReveal";

const education = [

{
degree:
"Bachelor of Computer Applications",

college:
"Maharishi University of Information Technology",

year:
"2023 - 2026"
},

{
degree:
"Intermediate",

college:
"Cosmopolitan Inter College",

year:
"2023"
},

{
degree:
"High School",

college:
"Shanti Public Higher Secondary School",

year:
"2021"
}

];

export default function Education(){

const [ref, visible] =
useScrollReveal();

return (

<section
id="education"
ref={ref}
>

<h2 className="section-title">
Education
</h2>

<div className="education-grid">

{education.map(
(item,index)=>(

<motion.div

key={index}

className="education-card glass"

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
delay:index*.2
}}
>

<h3>
{item.degree}
</h3>

<p>
{item.college}
</p>

<span>
{item.year}
</span>

</motion.div>

)
)}

</div>

</section>

);

}