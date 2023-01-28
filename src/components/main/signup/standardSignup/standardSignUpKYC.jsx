import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class standardSignUpKYC extends Component {
    constructor(props){
      super(props);
      this.state = {
        agree: false,
        fullName:""
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
    handleSignature = (event) =>{
        this.setState({ fullName: event.target.value })
    }
    submitKYC = () =>{
        this.props.history.push("/accountVerify");
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <p className='limitedSignupTitle'>KYC/AML Conditions</p>
                <div className='limitedSignupDiv'>
                    <div className='limitedSignupTermDiv' style={{ padding:"0px", backgroundColor:"#fff" }}>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><p className='acceptLetter' style={{ marginLeft:"20px", marginTop:"-22px" }}>I hereby confirm that I read and agree with the Terms and Conditions of Service, Privacy Policy, and Cookies Policy.</p>
                    </div>
                    <div className='limitedSignupTermDiv' style={{ padding:"0px", backgroundColor:"#fff" }}>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><p className='acceptLetter' style={{ marginLeft:"20px", marginTop:"-22px" }}>I hereby confirm that all information above is true and accurate. I understand that giving false or misleading information will make immediate cancelation of services and may bring on legal proceedings.</p>
                    </div>
                    <div className='limitedSignupTermDiv' style={{ padding:"0px", backgroundColor:"#fff" }}>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><p className='acceptLetter' style={{ marginLeft:"20px", marginTop:"-22px" }}>I undertake to immediately inform Hedpay UAB about any changes in the information above in writing form.</p>
                    </div>
                    <div className='limitedSignupTermDiv' style={{ padding:"0px", backgroundColor:"#fff" }}>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><p className='acceptLetter' style={{ marginLeft:"20px", marginTop:"-22px" }}>I hereby confirm that the funds transferred have legal background. Services offerred by Hedpay UAB will not be used for any illegal purposes, and I will not take part in any operation, which is considered illegal money laundering and terrorism financing.</p>
                    </div>
                    <div className='limitedSignupTermDiv' style={{ padding:"0px", backgroundColor:"#fff" }}>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><p className='acceptLetter' style={{ marginLeft:"20px", marginTop:"-22px" }}>I am informed that my relationship with Hedpay UAB is handled in accordance with the Law on the Prevention of Money Laundering and Terrorist Financing of the Republic of Lithuania and the underlying laws and regulations of EU and EEA, and I am completely aware of my obligations which I undertake by signing below.</p>
                    </div>
                    <div className='limitedSignupTermDiv' style={{ padding:"0px", backgroundColor:"#fff" }}>
                        <input type="checkbox" onChange={this.handleAgree.bind(this)} name="accept" className='checkBox' /><p className='acceptLetter' style={{ marginLeft:"20px", marginTop:"-22px" }}>I hereby agree that the legal relationship establishment between myself and Hedpay UAB allows Hedpay UAB to make use of or share my data with any third party according to the law, including any request for additional information.</p>
                    </div>
                    <p className='loginTitle' style={{ marginTop:"30px", color: "#002554", marginLeft:"18%" }}>Signature *</p>
                    <input className='emailInput' style={{ width:"30%", marginLeft:"15%", paddingLeft: "20px" }} type="text" name="fullName" placeholder='Enter your full name' onChange={this.handleSignature} />
                    <div>
                        <Link to="standardSignUpTerm" className='goBack' style={{ marginLeft: "15%" }}>Go back</Link>
                        {this.state.fullName!==""?
                            <button className='singInButton createAccount activeButton' onClick={this.submitKYC} style={{ width: "25%", marginRight: "15%", marginTop: "45px" }} >Submit</button>
                        :
                            <button className='singInButton createAccount' style={{ width: "25%", marginRight: "15%", marginTop: "45px" }} disabled>Submit</button>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default standardSignUpKYC;