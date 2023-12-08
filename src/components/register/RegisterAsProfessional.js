import React from 'react'
import Navbar2 from './Navbar2';
import './registerAsProffesional.css'
import Wrapper from '../../Wrapper';

const RegisterAsProfessional = () => {
    return (
        <div className='registContianer'>
            <Navbar2 />
            <Wrapper>
                <div className="registerWrapper">
                    <div className="leftWrapper">
                        <div className="heading">
                            Earn More. Earn Respect.
                            <span>Safty Ensured</span>
                        </div>
                        <div className="secHeading">
                            Join 40000+partners across india, USA , Singapore,
                            UAE and many more
                        </div>
                    </div>
                    <div className="rightWrapper">
                        <img src="/images/partner_hero_india_cover.png" alt="" />
                    </div>
                </div>

                <div className="formBanner">
                    <div className="formHeading">Share your Whatsapp number and we'll reach out via our Whatsapp Bussiness Account</div>
                    <div className="formInputs">
                        <input type="text" placeholder='Enter your Whatsapp Number' />
                        <button>Join Us</button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default RegisterAsProfessional;
