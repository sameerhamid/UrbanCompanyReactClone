import { useState } from 'react';
import './home.css'
import Navbar from '../Navbar';

const Home = () => {
    const findList = ['saloom for men', 'saloon for women', 'bjdjdj dhhd', 'hddh']
    const [show, setShow] = useState(false)
    const [something, setSomething] = useState()
    const handleSearch = (e) => {
        const filteredItem = findList.filter(item => item.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase()))
        console.log(filteredItem);
        setSomething(filteredItem.map(item => item))
        setShow(!show)
    }
    return (

        <>
            <Navbar />
            <div className='homeContainer'>
                <div className="homeContent">
                    <div className="home">Home/Delhi-Ncr</div>
                    <div className="heading">Home services, on demond</div>
                    <div className="locationSerach">
                        <div className="location">
                            <select>
                                <option value="">India</option>
                                <option value="">India</option>
                                <option value="">India</option>
                                <option value="">India</option>
                                <option value="">India</option>
                                <option value="">India</option>
                            </select>
                        </div>
                        <div className="search">
                            <input type="text" placeholder='Search for services' onChange={handleSearch} />
                            <ul>
                                {show ? (<li className="somethig" style={{ width: '550px', height: '100%', backgroundColor: '#fff', color: 'black', marginTop: '10px', position: 'absolute', zIndex: 1 }}>{something}</li>) : null}
                            </ul>
                            <div className="searchEx">Spa for Women,Saloon for Men,Message form
                                Men etc</div>
                        </div>
                    </div>

                </div>

                <div className="homeCards">
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/womenHairSaloon.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Saloon For Women
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/women.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Hair,Skin & Nails
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/spa.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Spa For Men
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/men.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Saloon For Men
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/massage.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Massage For Men
                        </div>
                    </div>
                </div>


                <div className="heading2">Home Services</div>
                <div className="homeServices homeCards">

                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/womenHairSaloon.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Saloon For Women
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/women.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Hair,Skin & Nails
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/spa.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Spa For Men
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/men.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Saloon For Men
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg">
                            <img src="/images/massage.png" alt="" />
                        </div>
                        <div className="cardTitle">
                            Massage For Men
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Home
