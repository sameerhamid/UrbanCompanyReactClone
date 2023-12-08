import './networth.css'
import Wrapper from '../../Wrapper'
const Networthy = () => {
    const items = [
        {
            id: 1,
            imgUrl: "/images/networtht1.webp",
            title: 'Native Water Purifier'
        },

        {
            id: 2,
            imgUrl: "/images/networth2.webp",
            title: 'Mixer and Grinder Repair'
        },
        {
            id: 3,
            imgUrl: "/images/networth3.webp",
            title: 'Bathroom and Kitchen Cleaning'
        },
        {
            id: 4,
            imgUrl: "/images/networth4.webp",
            title: 'Home Painting'
        },
        {
            id: 5,
            imgUrl: "/images/networth5.webp",
            title: 'Inverter Services and Repair'
        },
        {
            id: 6,
            imgUrl: "/images/networth6.webp",
            title: 'Laptop Repair at Home'
        },
        {
            id: 7,
            imgUrl: "/images/networth7.webp",
            title: 'Spa Ayurveda'
        },
        {
            id: 8,
            imgUrl: "/images/networth8.webp",
            title: 'Hair Studio for Women'
        },
        {
            id: 9,
            imgUrl: "/images/networth9.webp",
            title: 'Nail Studio for Women'
        },
        {
            id: 10,
            imgUrl: "/images/networth10.webp",
            title: 'Ac Service and Repair'
        },
    ]

    return (
        <div>
            <Wrapper>
                <div className='heading'>New and noteworthy</div>
                <div className="networthWrapper">
                    {items.map(item => <ItemList item={item} key={item.id} />)}
                </div>
            </Wrapper>
        </div>
    )
}
export default Networthy;

const ItemList = ({ item, key }) => {
    return <div key={key} className='itemCont'>
        <div className="imgCont">
            <img src={item.imgUrl} alt="" />
        </div>
        <div className="title">
            {item.title}
        </div>
    </div>
}   