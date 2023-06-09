import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header-container">
            <h5>Hello I'm</h5>
            <h1>Hari Om Sharma</h1>
            <h5 className='text-light'>FullStack Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <div className="me">
                <img src={ME} alt="ME" />
            </div>

            <a href='#contact' className='scroll_down'>
                Scroll Down
            </a>

        </div>
    </header>
  )
}

export default Header