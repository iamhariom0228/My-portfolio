import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { RiFolderOpenFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="AboutMeImage" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>
            <article className="about_card">
              <RiFolderOpenFill className="about_icon" />
              <h5>Projects</h5>
              <small>5 Projects</small>
            </article>
          </div>

          <p>
            Hey, I'm a Full Stack Developer who has a keen interest in data
            structures, algorithms, and machine learning. I love building web
            applications and experimenting with different programming languages.
            As a machine learning enthusiast, I am constantly exploring new
            models and techniques to improve my skills and stay up-to-date with
            the trends. I am also fascinated by the problem-solving aspect of
            DSA. With a computer science background and a desire to learn, I am
            always eager to take on new challenges and grow as a developer and
            problem solver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
