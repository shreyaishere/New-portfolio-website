import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {

  return emailjs.sendForm(

    "YOUR_SERVICE_ID",

    "YOUR_TEMPLATE_ID",

    form.current,

    "YOUR_PUBLIC_KEY"

  );
};