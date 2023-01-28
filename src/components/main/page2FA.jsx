import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./page2FA.css"
import apple_store from "../../assets/images/apple_store.svg"
import google_play from "../../assets/images/google_play.svg"
import lock_closed from "../../assets/images/lock_closed.svg"
import QRCode from 'react-google-qrcode';

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class page2FA extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            google_auth_pass:"",
            google_auth_code:""
        }
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleStep = (key) =>{
        if(key==="+")
            this.setState({ step:this.state.step+1 })
        else if(key==="-")
            this.setState({ step:this.state.step-1 })
    }
    setGooglePass = (event) =>{
        this.setState({ google_auth_pass: event.target.value })
    }
    setGoogleCode = (event) =>{
        this.setState({ google_auth_code: event.target.value })
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding page_2fa">
                <div className='row page_2fa_lines'>
                    <div className='col-md-4 col-sm-4 col-4 lines'>
                        <p className='line_title line_title_active' style={{ left:"-10%" }}>Install the App</p>
                        <p className={this.state.step>1?'line_title line_title_active mobile_qr':'line_title mobile_qr'} style={{ left:"50%" }}>Scan QR code</p>
                    </div>
                    <div className='col-md-4 col-sm-4 col-4 lines'>
                        <p className={this.state.step>2?'line_title line_title_active':'line_title'} style={{ left:"85%" }}>Backup key</p>
                    </div>
                    <div className='col-md-4 col-sm-4 col-4 lines'>
                        <p className={this.state.step>3?'line_title line_title_active':'line_title'} style={{ left:"60%" }}>Enable Google Authenticator</p>
                    </div>
                </div>
                <div className='row page_2fa_lines'>
                    <div className='col-md-4 col-sm-4 col-4 lines'>
                        <p className='line_dot active_dot'></p>
                        <div className={this.state.step>1?'first_line line_active':'first_line'}></div>
                        <p className={this.state.step>1?'line_dot active_dot':'line_dot'}></p>
                    </div>
                    <div className='col-md-4 col-sm-4 col-4 lines'>
                        <div className={this.state.step>2?'second_line line_active':'second_line'}></div>
                        <p className={this.state.step>2?'line_dot active_dot':'line_dot'}></p>
                    </div>
                    <div className='col-md-4 col-sm-4 col-4 lines'>
                        <div className={this.state.step>3?'third_line line_active':'third_line'}></div>
                        <p className={this.state.step>3?'line_dot active_dot':'line_dot'}></p>
                    </div>
                </div>
                {this.state.step===1?
                    <div className='page_2fa_content'>
                        <p className='step_num'>Step 1</p>
                        <p className='step_title'>Install the App</p>
                        <p className='step_num mobile_google_auth_title' style={{ marginTop:"60px" }}>Install the Google Authenticator mobile app</p>
                        <div className='mobile_2fa_img'>
                            <img className='mobile_2fa_google' src={google_play} alt="google_play" />
                            <img className='mobile_2fa_apple' src={apple_store} alt="apple_store" />
                        </div>
                        <button className='singInButton activeButton next_step mobile_2fa_one' onClick={()=>this.handleStep("+")}>Next step</button>
                    </div>
                    :
                this.state.step===2?
                    <div className='step_two_content' style={{ paddingBottom:"100px" }}>
                        <p className='step_num'>Step 2</p>
                        <p className='step_title'>Scan QR code</p>
                        <div className='row' style={{ marginTop: "65px" }}>
                            <div className='col-md-5'>
                                <QRCode
                                    data="https://www.google.com"
                                    size={200}
                                    framed
                                />
                                <p className='step_num' style={{ marginTop:"30px" }}>Scan this QR code with the<br/> <span style={{ fontWeight:"700" }}>Google Authenticator</span></p>
                            </div>
                            <div className='col-md-7'>
                                <div className='QR_code_input'>
                                    <p className='step_num mobile_qr_code' style={{ textAlign: "left" }}>If you can’t scan the QR code, enter this code manually into the app</p>
                                    <div className='mobile_qr_copy' style={{ display:"flex" }}>
                                        <input className='emailInput mobile_qr_code_input' style={{ paddingLeft: "20px", width: "60%" }} type="text" name="QR_code"/>
                                        <button className='singInButton activeButton QR_copy' >Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mobile_qr_next_div' style={{ float:"left", width:"100%", marginTop: "75px" }}>
                            <p className='mobile_qr_back' style={{ float: "left", cursor: "pointer" }} onClick={()=>this.handleStep("-")} >Go back</p>
                            <button style={{ float:"right" }} className='singInButton activeButton QR_copy mobile_qr_next' onClick={()=>this.handleStep("+")} >Next step</button>
                        </div>
                    </div>
                    :
                this.state.step===3?
                    <div className='step_two_content' style={{ paddingBottom:"100px" }}>
                        <p className='step_num'>Step 3</p>
                        <p className='step_title'>Backup key</p>
                        <div className='backup_key_main'>
                            <img src={lock_closed} alt="lock_closed" />
                            <p className='mobile_qr_code' style={{ marginTop:"25px", color:"#002554" }}>Please copy this key into a safe place. It’ll allow you to reset your Google<br/> Authenticator even if you lose your phone</p>
                            <input className='emailInput mobile_qr_code_input' style={{ paddingLeft: "0px", width: "40%", marginTop:"10px", textAlign: "center" }} type="text" name="backup_code"/>
                            <div style={{ marginTop:"20px" }}>
                                <button style={{ width: "30%", height: "38px" }} className='singInButton activeButton mobile_backup_copy_btn' >Copy</button>
                            </div>
                        </div>
                        <div className='backup_bottom_letter'>
                            <p>Resetting your Google Authenticator requires opening a support ticket, and takes at least 7 days to process</p>
                        </div>
                        <div className='mobile_qr_next_div' style={{ float:"left", width:"100%", marginTop: "75px" }}>
                            <p className='mobile_qr_back' style={{ float: "left", cursor: "pointer" }} onClick={()=>this.handleStep("-")} >Go back</p>
                            <button style={{ float:"right" }} className='singInButton activeButton QR_copy mobile_qr_next' onClick={()=>this.handleStep("+")} >Next step</button>
                        </div>
                    </div>
                    :
                    <div className='step_two_content' style={{ paddingBottom:"100px" }}>
                        <p className='step_num'>Step 4</p>
                        <p className='step_title'>Enable Google Authenticator</p>
                        <div className='google_auth_input'>
                            <p className='loginTitle' style={{ color:"#002554" }}>Account password *</p>
                            <input className='emailInput' value={this.state.google_auth_pass} onChange={ this.setGooglePass } style={{ paddingLeft: "20px" }} type="password" name="Google_Authenticator_pass" placeholder='Enter your password' />
                            <p className='loginTitle mobile_google_auth_title' style={{ color:"#002554", marginTop:"35px" }}>Google Authentication Code *</p>
                            <input className='emailInput' value={ this.state.google_auth_code } onChange={ this.setGoogleCode } style={{ paddingLeft: "20px" }} type="text" name="Google_Authenticator_code" placeholder='Enter your code' />
                            <div style={{ marginTop:"50px" }}>
                                {this.state.google_auth_code!=="" && this.state.google_auth_pass!==""?
                                    <button style={{ width: "80%", height: "50px" }} className='singInButton activeButton'>Next step</button>
                                    :
                                    <button style={{ width: "80%", height: "50px" }} className='singInButton' disabled>Next step</button>
                                }
                                <p style={{ marginTop: "50px", cursor: "pointer" }} onClick={()=>this.handleStep("-")} >Go back</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(page2FA)