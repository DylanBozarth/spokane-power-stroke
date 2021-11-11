import Image from 'next/image'
import Carousel from 'react-elastic-carousel';
import Engine from '../../public/images/gasengine.jpg'
import brake from '../../public/images/brakenice.jpg'
import rotor from '../../public/images/rotor.jpg'
export const Gallery = () => {
    return(
        <div className="gallery">
        <Carousel itemsToShow={3}>
            <Image src={Engine} alt="spokane-power-stroke" className="galleryImage" />
            <Image src={brake} alt="power stroke" className="galleryImage" />
            <Image src={rotor} alt="power stroke" className="galleryImage" />
            </Carousel></div>
    )
}
// photos of repairs with little tooltips 
