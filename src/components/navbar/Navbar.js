
import { Link } from 'react-router-dom'
import Wrapper from '../../Wrapper'
import './navbar.css'
import { useState } from 'react'
import SignUpLogin from '../signupLogin/SignUpLogin'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show);
        console.log('clicked');
    }
    return (
        <div className='navbarContainer1'>
            <Wrapper>
                <div className="navbar1">
                    <div className="navLogo">
                        <Link to={'/'}><img src="/images/logo.png" alt="" /></Link>
                    </div>
                    <div className="navLinks">
                        <div><Link to={'/register'}>Register As A Professional</Link></div>
                        <div ><Link>Help</Link></div>
                        {show ? <SignUpLogin handleShow={handleShow} /> : null}
                        <div onClick={handleShow}><Link >Login/Singup</Link></div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar
