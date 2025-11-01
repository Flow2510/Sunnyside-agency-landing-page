import './intro.scss';
import arrowDown from '../../images/icon-arrow-down.svg';

export default function Intro() {
    return(
        <section className='intro'>
            <div className='intro__content'>
                <h1 className='intro__content-title'>WE ARE CREATIVES</h1>
                <img className='intro__content-arrow' src={arrowDown} alt="arrow down"/>
            </div>
        </section>
    )
}