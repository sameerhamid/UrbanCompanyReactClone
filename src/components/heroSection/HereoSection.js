import Wrapper from '../../Wrapper'

import './herosection.css'

const HereoSection = () => {
    const cardData = [
        {
            id: 1,
            imgUrl: '/images/men.png',
            title: "Woomen's saloon,Spa & Laser Clinic"
        },
        {
            id: 2,
            imgUrl: '/images/spa.png',
            title: "Men's Saloon and Massage"
        },
        {
            id: 3,
            imgUrl: '/images/massage.png',
            title: "Ac and Appliance Repair"
        }, {
            id: 4,
            imgUrl: '/images/women.png',
            title: 'Cleaning and Pest Control'
        }, {
            id: 5,
            imgUrl: '/images/women.png',
            title: 'Electrician, Plumber and Carpenter'
        }, {
            id: 6,
            imgUrl: '/images/womenHairSaloon.png',
            title: 'Painting and Wall Pannels'
        },

    ]
    return (
        <>
            <Wrapper>
                <div className='hereWrapper'>
                    <div className="left">
                        <div className="heading">
                            Home services at your doorstep
                        </div>
                        <div className="card">
                            <div className="cardHeading">
                                What you are looking for?
                            </div>
                            <div className="cardWrapper">
                                {
                                    cardData.map(card => <div className='cardItem' key={card.id}>
                                        <div className="cardImg">
                                            <img src={card.imgUrl} alt="" />
                                        </div>
                                        <div className="cardTitle">
                                            {card.title}
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>

                        <div className="heroFooter">
                            <div className="footerCard">
                                <div className="img">
                                    <img src="/images/star.png" alt="" />
                                </div>
                                <div className="ratings">
                                    <div>4.8</div>
                                    <div>Service Rating</div>
                                </div>
                            </div>

                            <div className="footerCard">
                                <div className="img">
                                    <img src="/images/persons.png
                                    " alt="" />
                                </div>
                                <div className="ratings">
                                    <div>4.8</div>
                                    <div>Service Rating</div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="right">
                        <div className="rightCardImg">
                            <img src="/images/leftCard.webp" alt="" />
                        </div>

                    </div>
                </div>
            </Wrapper>
        </>

    )
}

export default HereoSection
