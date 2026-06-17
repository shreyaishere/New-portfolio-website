import "./Certifications.css";

import { motion }
from "framer-motion";

import useScrollReveal
from "../../hooks/useScrollReveal";

const certificates = [

"Node.js - Scaler",

"JavaScript - Scaler",

"PHP & MySQL - Spoken Tutorial IIT Bombay"

];

export default function Certifications(){

const [ref, visible] =
useScrollReveal();

return (

<section
id="certifications"
ref={ref}
>

<h2 className="section-title">
Certifications
</h2>

<div className="cert-grid">

{certificates.map(
(item,index)=>(

<motion.div

key={index}

className="cert-card glass"

initial={{
opacity:0,
scale:.8
}}

animate={
visible
?
{
opacity:1,
scale:1
}
:
{}
}

transition={{
delay:index*.2
}}
>

{item}

</motion.div>

)
)}

</div>

</section>

);

}