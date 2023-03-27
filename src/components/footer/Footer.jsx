import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai"
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        HARIOM
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/hari_om_sharma_/">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/hari-om-sharma-72249b244/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.twitter.com/i_am_hariom_/">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.telegram.com/iamhariom0228/">
          <FaTelegramPlane />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Hariom Sharma. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer