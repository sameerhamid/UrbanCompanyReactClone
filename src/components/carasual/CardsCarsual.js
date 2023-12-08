import React from 'react'
import './cardsCarsual.css'
import Wrapper from '../../Wrapper'
import AliceCarousel from 'react-alice-carousel'

const CardsCarsual = () => {
    const carsualCards = [
        {
            id: 1,
            imgUrl: "/images/carsoulImg1.webp"
        }, {
            id: 2,
            imgUrl: "/images/carsoulImg2.webp"
        }, {
            id: 3,
            imgUrl: "/images/carsoulImg3.webp"
        }, {
            id: 4,
            imgUrl: "/images/carsoulImg4.webp"
        }, {
            id: 5,
            imgUrl: "/images/carsoulImg5.webp"
        }
    ]
    return (
        <Wrapper>
            <div className='carasoulWrapper'>
                <AliceCarousel items={carsualCards?.map(slide => <Slides slide={slide} key={slide.id} />)} animationDuration={1500} autoPlay responsive={true} infinite autoWidth={true} disableButtonsControls disableDotsControls disableSlideInfo innerWidth={200} />
            </div>
        </Wrapper>
    )
}

export default CardsCarsual


const Slides = ({ slide }) => {
    return <div className='slideContainer'>
        <img src={slide.imgUrl} alt="" />
    </div>

}