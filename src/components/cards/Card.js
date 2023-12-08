import React from 'react'
import './card.css'
const Card = () => {
    const cards = [
        {
            id: 0,
            imgUrl: '/images/card1.webp'
        },
        {
            id: 1,
            imgUrl: '/images/card2.webp'
        },
        {
            id: 2,
            imgUrl: '/images/card3.webp'
        },
        {
            id: 3,
            imgUrl: '/images/card4.webp'
        },
    ]

    const Card = ({ card }) => {
        return <div className='cardImg'>
            <img src={card.imgUrl} alt="" />
        </div>
    }
    return (
        <div className='cardsContianer'>
            {cards.map(card => <Card card={card} />)}
        </div>
    )
}

export default Card
