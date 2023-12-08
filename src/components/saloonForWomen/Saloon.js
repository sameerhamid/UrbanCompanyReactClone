import './saloon.css'
import Wrapper from '../../Wrapper'
const Saloon = () => {
    const items = [
        { id: '1', imgUrl: '/images/saloonForWomen.webp', title: 'Waxing' },
        { id: '2', imgUrl: '/images/saloonForWomen2.webp', title: 'Pedicure' },
        { id: '3', imgUrl: '/images/saloonForWomen3.webp', title: 'Facial & cleaning' },
        { id: '4', imgUrl: '/images/saloonForWomen4.webp', title: 'Manicure' },
        { id: '5', imgUrl: '/images/saloonForWomen5.webp', title: 'Threading & face wax' },
    ]
    return (
        <div>
            <Wrapper>
                <div className="heading">Saloon for women</div>
                <div className="saloonWrapper">
                    {items.map(item => <ItemList item={item} key={item.id} />)}
                </div>

                <div className="saloonBanner">
                    <img src="/images/saloonForWomenBanner.webp" alt="" />
                </div>
            </Wrapper>
        </div>
    )
}

export default Saloon

const ItemList = ({ item, key }) => {
    return (
        <div className="itemContainer" key={key}>
            <div className="itemImg">
                <img src={item.imgUrl} alt="" />
            </div>
            <div className="title">
                {item.title}
            </div>
        </div>
    )
}
