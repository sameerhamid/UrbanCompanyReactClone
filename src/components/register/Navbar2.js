import React from 'react'
import Wrapper from '../../Wrapper'
import './navbar2.css'

function Navbar2() {
    return (
        <div className='navbarContainer'>
            <Wrapper>
                <div className="navbar">
                    <div className="navLogo">
                        <img src="/images/secondNavLogo.png" alt="" />
                    </div>
                    <div className="navLinks">
                        <div>Book a service</div>
                        <div>About us</div>
                        <select name="" id="">
                            <option value="">India</option>
                        </select>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar2
