import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/hari-om-sharma-72249b244/" target='_blank'> <BsLinkedin/> </a>
      <a href="https://github.com/iamhariom0228" target='_blank'> <FaGithub/> </a>
      <a href="https://www.instagram.com/hari_om_sharma_/" target='_blank'> <FaInstagram/> </a>
    </div>
  );
}

export default HeaderSocials