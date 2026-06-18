import "./Contact.css";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Contact() {
  const [ref, visible] = useScrollReveal();

  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      alert("Message sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message.");
      console.error(error);
    }

    setSending(false);
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="section-label">07 — CONTACT</div>

      <h2 className="section-title">
        Let's <span>Connect</span>
      </h2>

      <div className="contact-container">
        {/* Left Side */}

        <motion.div
          className="contact-info glass"
          initial={{ opacity: 0, x: -60 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
        >
          <h3>Get In Touch</h3>

          <p>
            I'm currently looking for Full Stack Developer opportunities and
            internships. Feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:shuklashreya731@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" />
              shuklashreya731@gmail.com
            </a>

            <a href="tel:+916387553114" className="contact-link">
              <FaPhoneAlt className="contact-icon" />
              +91 6387553114
            </a>

            <a
              href="https://linkedin.com/in/shreya-shukla-612894304"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="contact-icon" />
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/shreyaishere/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub className="contact-icon" />
              GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Form */}

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form glass"
          initial={{ opacity: 0, x: 60 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            value={formData.user_name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            value={formData.user_email}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="primary-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
