import './footer.scss';
import logo2 from '../../images/logo2.svg';

export default function Footer() {
    return(
        <footer className='footer'>
            <img className='footer__logo' src={logo2} alt="" />
            <nav className='footer__nav'>
                <a className='footer__nav-link' href="#about">About</a>
                <a className='footer__nav-link' href="#services">Services</a>
                <a className='footer__nav-link' href="#projects">Projects</a>
            </nav>
            <div className='footer__social'>
                <a className='footer__social-link' href=""><img src="/src/assets/images/icon-facebook.svg" alt="" /></a>
                <a className='footer__social-link' href=""><img src="/src/assets/images/icon-instagram.svg" alt="" /></a>
                <a className='footer__social-link' href=""><img src="/src/assets/images/icon-twitter.svg" alt="" /></a>
                <a className='footer__social-link' href=""><img src="/src/assets/images/icon-pinterest.svg" alt="" /></a>
            </div>
        </footer>
    )
}