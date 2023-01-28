import React, { Component } from 'react';
import Small_Logo from "../../assets/images/small_logo.png";

class forgotPassword extends Component {
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
                    <p className='welcome'>Reset Password</p>
                    <p className='signinMessage'>To help verify your identity please enter the information below.</p>
                    <div className='forgot_password'>
                        <p className='loginTitle' style={{ marginTop:"30px" }}>Username</p>
                        <input className='emailInput' onChange={this.handleEmail} type="text" name="User Username" placeholder='Enter your Username' />
                        <p className='loginTitle' style={{ marginTop:"20px" }}>Email Address</p>
                        <input className='passwordInput' onChange={this.handlePassword} type="email" name="User Email Address" placeholder='Enter your Email Address' />
                        <div className='forgot_buttons'>
                            <button className='singInButton forgot_back_btn'onClick={()=>this.props.history.push('/logIn')}>Go Back</button>
                            <button className='singInButton activeButton forgot_next_btn' onClick={()=>this.props.history.push("/forgotPasswordError")}>Next</button>
                            <p className='forgot_msg'>You don’t have an account? Sign up now.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default forgotPassword;