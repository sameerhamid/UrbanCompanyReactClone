import './signupLogin.css'
import { RxCross2 } from 'react-icons/rx'
function SignUpLogin({ handleShow }) {
    return (
        <div className='formContainer'>
            <div className="topCont">
                <div className="cross" onClick={handleShow}><RxCross2 /></div>
                <div className="heading">Please Login to continue</div>
            </div>
            <div className="inputs">

                <select name="" id="">
                    <option value="">+91</option>
                </select>
                <input type="number" />

            </div>
            <div className="continueBtn"><span>Continue</span></div>
        </div>
    )
}

export default SignUpLogin
