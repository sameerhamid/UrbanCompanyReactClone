import './bookedServies.css'
import Wrapper from '../../Wrapper'
import AliceCarousel from 'react-alice-carousel'
const BookedServices = () => {
    const items = [
        { id: 1, imgurl: '/images/bookedServices1.webp', title: 'Ac repair (split/ Window)', rating: '4.78 (299k)', price: '₹209' },
        { id: 2, imgurl: '/images/bookedServices2.webp', title: 'Haircut for men', rating: '4.87 (698.8k)', price: '₹128' },
        { id: 3, imgurl: '/images/bookedServices3.webp', title: 'Intense bathroom cleaning', rating: '4.79 (1.1M)', price: '₹523' },
        { id: 4, imgurl: '/images/bookedServices4.webp', title: 'Classic bathroom cleaning', rating: '4.80 (840.9k)', price: '₹773' },
        { id: 5, imgurl: '/images/bookedServices6.webp', title: 'Sofa cleaning', rating: '4.89 (97k)', price: '₹1299' },
        { id: 6, imgurl: '/images/bookedServices7.webp', title: 'Stress relief swedish massage', rating: '4.81 (35.8k)', price: '₹294' },
        { id: 7, imgurl: '/images/bookedServices5.webp', title: 'Bathroom cleaning', rating: '4.99 (105.9k)', price: '₹793' },
    ]
    return (

        <div className='bookedServicesWrapper'>
            <Wrapper>
                <div className="heading">Most booked services</div>
                <div className="bookedServiesContainer">
                    <AliceCarousel items={items?.map(slide => <Slides slide={slide} key={slide.id} />)} animationDuration={1500} autoPlay responsive={true} infinite autoWidth={true} disableButtonsControls disableDotsControls disableSlideInfo innerWidth={100} />
                </div>
            </Wrapper>
        </div>
    )
}

export default BookedServices

const Slides = ({ slide, key }) => {
    return (
        <div className='cardContainer' key={key}>
            <div className="cardImg">
                <img src={slide.imgurl} alt="" />
            </div>
            <div className="cardDetails">
                <div className="title">
                    {slide.title}
                </div>
                <div className="ratting">
                    {slide.rating}
                </div>
                <div className="price">
                    {slide.price}
                </div>
            </div>
        </div>
    )
}