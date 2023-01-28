import React, { Component } from 'react';
import Small_Logo from "../../assets/images/small_logo.png";

class forgotPasswordError extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() {
        return (
            <div className="footer_padding">
                <div className='login' style={{ maxWidth:"458px" }}>
                    <div className='small_logo'>
                        <img src={ Small_Logo } alt="logo" />
                    </div>
                    <p className='welcome'>Sorry!</p>
                    <p className='signinMessage'>We are unable to verify your identity at this time. Please contact us via email at</p>
                    <a href="mailTo: support@hedpay.com" style={{ color:"#402DD3", fontWeight:"600" }}>support@hedpay.com</a>
                </div>
            </div>
        );
    }
}

export default forgotPasswordError;