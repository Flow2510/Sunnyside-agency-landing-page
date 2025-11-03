import './gallery.scss';

export default function Gallery() {
    return(
        <section className='gallery'>
            <picture>
                <source srcSet='/src/assets/images/desktop/image-gallery-milkbottles.jpg' media='(min-width:768px)'/>
                <img className='gallery__image' src="/src/assets/images/mobile/image-gallery-milkbottles.jpg" alt="bottles of milk" />
            </picture>
            <picture>
                <source srcSet='/src/assets/images/desktop/image-gallery-orange.jpg' media='(min-width:768px)'/>
                <img className='gallery__image' src="/src/assets/images/mobile/image-gallery-orange.jpg" alt="orange fruit" />
            </picture>
            <picture>
                <source srcSet='/src/assets/images/desktop/image-gallery-cone.jpg' media='(min-width:768px)'/>
                <img className='gallery__image' src="/src/assets/images/mobile/image-gallery-cone.jpg" alt="ice cream cone" />
            </picture>
            <picture>
                <source srcSet='/src/assets/images/desktop/image-gallery-sugarcubes.jpg' media='(min-width:768px)'/>
                <img className='gallery__image' src="/src/assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="cube of sugar" />
            </picture>
        </section>
    )
}