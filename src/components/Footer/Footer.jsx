import "./Footer.css";

import {
FaGithub,
FaLinkedin,
FaEnvelope
}
from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer">

<div className="footer-icons">

<a href="#">
<FaGithub />
</a>

<a href="https://linkedin.com/in/shreya-shukla-612894304">
<FaLinkedin />
</a>

<a href="mailto:shuklashreya731@gmail.com">
<FaEnvelope />
</a>

</div>

<p>

© 2026 Shreya Shukla

All Rights Reserved

</p>

</footer>

);

}