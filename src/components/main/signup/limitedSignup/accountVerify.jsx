import React, { Component } from 'react';
import Warning from  "../../../../assets/images/warning.png"
import "../../signUp.css"

class accountVerify extends Component {
    constructor(props){
        super(props);
        this.state = {
            verifyCode:""
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleSignin = () =>{
        this.props.history.push("/chooseCurrency");
    }
    handleVerifyCode = (event) =>{
        this.setState({ verifyCode: event.target.value });
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <div className='verify'>
                    <img className='warning' src={ Warning } alt="warning" />
                    <p className='verifyTitle'>Your account is not yet activated</p>
                    <p className='verifyWord'>An email was sent to jamiedavies@gmail.com, containing a validation code that you must paste here to activate your account.</p>
                    <div className='verifyBody'>
                        <p className='loginTitle' style={{ marginTop:"30px" }}>Code</p>
                        <input className='emailInput' onChange={this.handleVerifyCode} style={{ paddingLeft: "20px" }} type="text" name="Verify code" placeholder='Enter your code' />
                        {this.state.verifyCode!==""?
                            <button className='singInButton activeButton' onClick={this.handleSignin} style={{ marginTop: "33px" }}>Sign in</button>:
                            <button className='singInButton' style={{ marginTop: "33px" }} disabled>Sign in</button>
                        }
                    </div>
                    <p className='verifyWord' style={{ marginTop: "55px" }}>Having trouble?</p>
                    <ul className='verifyUnder'>
                        <li style={{ paddingLeft: "0px" }}>FAQ</li>
                        <li className='note'>Send again</li>
                        <li className='note'>Contact us</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default accountVerify;