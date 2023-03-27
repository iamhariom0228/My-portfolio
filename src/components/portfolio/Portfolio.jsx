import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/unfold.png'
import IMG2 from '../../assets/simon-game.png'
import IMG3 from '../../assets/image_captioning.png'
import IMG4 from '../../assets/portfolio.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Unfold-A Blogging Website",
    github: "https://github.com/ImAnshuJoshi/Un-Fold",
  },
  {
    id: 2,
    image: IMG2,
    title: "Simon Game - An Electronic Game",
    github: "https://github.com/iamhariom0228/SimonGame",
  },
  {
    id: 3,
    image: IMG3,
    title: "Image Caption Generator - A ML Model",
    github: "https://github.com/iamhariom0228/Image-Caption-Generator",
  },
  {
    id: 4,
    image: IMG4,
    title: "Personoholic - A Personal Portfolio Website",
    github: "https://github.com/iamhariom0228/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href= {github} className="btn" target="_blank">
                    Github
                  </a>
                </div>
              </article>
            )
        })}
      </div>
    </section>
  );
}

export default Portfolio