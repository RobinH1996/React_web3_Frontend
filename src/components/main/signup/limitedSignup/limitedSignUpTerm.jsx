import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class limitedSignUpTerm extends Component {
    constructor(props){
      super(props);
      this.state = {
        agree: false
      }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleAgree = (event) =>{
        this.setState({ agree: event.target.checked })
    }
    handleTerm = () =>{
        this.props.history.push("/accountVerify");
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <p className='limitedSignupTitle'>Terms and conditions</p>
                <div className='limitedSignupDiv'>
                    <div className='limitedSignupTermDiv'>
                        <p className='changes'>CHANGES</p>
                        <p className='changes changesWord'>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the service.
                        </p>
                        <p className='changes' style={{ marginTop:"30px" }}>PRIVACY POLICY AND COOKIE POLICY </p>
                        <p className='changes changesWord'>
                            Please refer to our Privacy Policy and Cookies Policy. You agree that they constitute part of these terms. You must read our Privacy Policy and Cookies Policy before you use the Service.
                        </p>
                        <p className='changes'>CONTACT US</p>
                        <p className='changes changesWord'>
                            If you have any questions about these Terms, please contact us compliance@hedpay.com
                        </p>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><span className='acceptLetter'>I accept</span>
                    </div>
                    <Link to="limitedSignUp" className='goBack' style={{ marginLeft: "15%" }}>Go back</Link>
                    {this.state.agree?
                        <button className='singInButton createAccount activeButton' onClick={this.handleTerm} style={{ width: "25%", marginRight: "15%", marginTop: "45px" }}>Create account</button>
                    :
                        <button className='singInButton createAccount' style={{ width: "25%", marginRight: "15%", marginTop: "45px" }} disabled>Create account</button>
                    }
                </div>

            </div>
        );
    }
}

export default limitedSignUpTerm;