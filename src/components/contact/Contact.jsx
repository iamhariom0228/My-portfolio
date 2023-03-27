import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from "react-icons/md";
import {BsLinkedin} from 'react-icons/bs'
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from "react"
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm(
      "service_fvrue32",
      "template_zu0gg0d",
      form.current,
      "9gBcsG1usKSNeeiRb"
    );
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact_option">
            <MdMarkEmailRead className="contact_option-icon" />
            <h4>Email</h4>
            <h5>iamhariom@gmail.com</h5>
            <a href="mailto:iamhariom@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Hari Om Sharma</h5>
            <a
              href="https://www.linkedin.com/in/hari-om-sharma-72249b244/"
              target="_blank"
            >
              Connect On LinkedIn
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-62XXX-XXX83</h5>
            <a
              href="https://wa.me/+916206965483?text=Hi,Hariom!"
              target="_blank"
            >
              Connect on WhatsApp
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact