import "./Contact.css";

import { useState }
from "react";

import {
FaPhone,
FaEnvelope,
FaLinkedin
}
from "react-icons/fa";

export default function Contact(){

const [form,setForm] =
useState({

name:"",
email:"",
message:""

});

const [error,setError] =
useState("");

const submitHandler = (e)=>{

e.preventDefault();

if(
!form.name ||
!form.email ||
!form.message
){

setError(
"Please fill all fields."
);

return;
}

setError("");

alert(
"Message Submitted Successfully"
);

};

return (

<section id="contact">

<h2 className="section-title">
Contact Me
</h2>

<div className="contact-wrapper">

<div className="contact-info glass">

<div>

<FaPhone />

<p>
+91 6387553114
</p>

</div>

<div>

<FaEnvelope />

<p>
shuklashreya731@gmail.com
</p>

</div>

<div>

<FaLinkedin />

<p>
linkedin.com/in/
shreya-shukla-612894304
</p>

</div>

</div>

<form
className="contact-form glass"
onSubmit={submitHandler}
>

<input
type="text"
placeholder="Your Name"
onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}
/>

<input
type="email"
placeholder="Email"
onChange={(e)=>
setForm({
...form,
email:e.target.value
})
}
/>

<textarea
rows="6"
placeholder="Message"
onChange={(e)=>
setForm({
...form,
message:e.target.value
})
}
/>

{
error &&
<p className="error">
{error}
</p>
}

<button
className="btn btn-primary"
>
Send Message
</button>

</form>

</div>

</section>

);

}