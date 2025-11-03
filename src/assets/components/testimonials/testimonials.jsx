import './testimonials.scss';
import testimonials from '../../data/testimonials.json'

export default function Testimonials() {
    return(
        <section className='testimonials'>
            <h2 className='testimonials__title'>CLIENT TESTIMONIALS</h2>
            <div className='testimonials__gallery'>
                {testimonials.map((t) => (
                    <article className='testimonial' key={t.name}>
                        <img className='testimonial__image' src={t.image} alt="" />
                        <p className='testimonial__text'>{t.text}</p>
                        <p className='testimonial__name'>{t.name}</p>
                        <p className='testimonial__job'>{t.job}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}