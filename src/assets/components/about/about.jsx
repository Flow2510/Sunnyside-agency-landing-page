import './about.scss';
import infos from '../../data/infos.json'

export default function About() {

    return(
        <section className='about' id='about'>
            {infos.map((info) => (
                <article key={info.title} className={`article--${info.class}`}>
                    <picture>
                        <source srcSet={info.imageDesktop} media='(min-width: 768px)' />
                        <img className={`article--${info.class}__image`} src={info.imageMobile} alt="" />
                    </picture>
                    <div className={`article--${info.class}__content`} style={info.buttonText ? { } : {color: info.color}}>
                        <h2 className={`article--${info.class}__content-title`}>{info.title}</h2>
                        <p className={`article--${info.class}__content-text`}>{info.text}</p>
                        {info.buttonText &&
                            <button className={`article--${info.class}__content-button`}>{info.buttonText}</button>
                        }
                    </div>
                </article>
            ))}
        </section>
    )
}