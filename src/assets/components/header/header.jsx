import './header.scss';
import logo from '../../images/logo.svg';
import menuLogo from '../../images/icon-hamburger.svg'
import { useState } from 'react';

export default function Header(){
    const [showMenu, setShowMenu] = useState(false)

    return(
        <header className='header'>
            <div className='header__wrapper'>
                <img src={logo} alt="" className='header__logo'/>
                <nav className={`header__nav${showMenu ? " header__nav--active" : ""}`}>
                    <div className='header__nav-wrapper'>
                        <a className='header__nav-link' href="#about">About</a>
                        <a className='header__nav-link' href="#services">Services</a>
                        <a className='header__nav-link' href="#projects">Projects</a>
                        <a className='header__nav-link--contact' href="#contact">CONTACT</a>
                    </div>
                </nav>
                <button onClick={() => setShowMenu(prev => !prev)} className='header__button'>
                    <img className={`header__button-image${showMenu ? " header__button-image--active" : ""}`} src={menuLogo} alt="" />
                </button>
            </div>
        </header>
    )
}