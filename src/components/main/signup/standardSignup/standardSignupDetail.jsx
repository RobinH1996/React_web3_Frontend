import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from "jquery"
import PhoneInput from 'react-phone-input-2'
import Select from 'react-select'
import photo from "../../../../assets/images/photo.png"
import question from "../../../../assets/images/question.png"
import warning from "../../../../assets/images/warning1.png"
import "../../signUp.css";

export default class standardSignupDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
      }
      componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      componentDidMount(){
          $('.dropify').dropify();
      }
      navTo = () => {
        this.props.history.push("/standardSignUpTerm");
      }
      render() {
          const options = [
            { value: 'Mr', label: 'Mr' },
            { value: 'Mrs.', label: 'Mrs.' },
            { value: 'Ms', label: 'Ms' }
          ]
          return (
              <div style={{ marginTop: "170px" }} className="footer_padding">
                  <div className='standardSignUpBar'>
                      <p className='limitedSignupTitle standardSignupTitleLeft mobile_your_detail'>Your details</p>
                      <p className='limitedSignupTitle standardSignupTitleRight pro_sign_detail'>Upload files</p>
                  </div>
                  <div className='limitedSignupDiv'>
                      <div className='limitedProcessBar'>
                          <span className='limitedLeftDot'></span>
                          <div className='limitedBarActive'></div>
                          <div className='limitedBar'></div>
                          <span className='limitedRightDot'></span>
                      </div>
                      <div className='row inputDetails'>
                          <div className='col-md-5'>
                              <div style={{width: "100%", marginTop:'15px'}}>
                                  <p className='inputTitle'>Resident Country</p>
                                  <input className='inputStyle' type="text" name="resident_country" defaultValue="Canada" disabled/>
                              </div>
                              <div style={{ display:"flex", marginTop:'15px' }}>
                                  <div style={{width: "35%"}}>
                                      <p className='inputTitle'>No. *</p>
                                      <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                                  </div>
                                  <div style={{ width:"60%", marginLeft: "5%" }}>
                                      <p className='inputTitle'>Street *</p>
                                      <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                                  </div>
                              </div>
                              <div style={{ display:"flex", marginTop:'15px' }}>
                                  <div style={{width: "47.5%"}}>
                                      <p className='inputTitle'>Nickname *</p>
                                      <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                                  </div>
                                  <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                      <p className='inputTitle'>Street *</p>
                                      <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                                  </div>
                              </div>
                              <div style={{ display:"flex", marginTop:'15px' }}>
                                  <div style={{width: "47.5%"}}>
                                      <p className='inputTitle'>Postal Code *</p>
                                      <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                                  </div>
                                  <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                      <p className='inputTitle'>Province *</p>
                                      <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                                  </div>
                              </div>
                              <div style={{width: "100%", marginTop:'15px'}}>
                                  <p className='inputTitle'>Cell phone number</p>
                                  <PhoneInput
                                      country={'ca'}
                                      value={this.state.phone}
                                      onChange={phone => this.setState({ phone })}
                                  />
                              </div>
                              <div style={{width: "100%", marginTop:'15px'}}>
                                  <p className='inputTitle'>Date of birth *</p>
                                  <div style={{ display: "flex", width:"100%" }}>
                                      <input style={{ width:"30%" }} className='inputStyle' type="number" name="nickName" placeholder='MM' />
                                      <input style={{ width:"30%", marginLeft: "5%" }} className='inputStyle' type="number" name="nickName" placeholder='DD' />
                                      <input style={{ width:"30%", marginLeft: "5%" }} className='inputStyle' type="number" name="nickName" placeholder='YYYY' />
                                  </div>
                              </div>
                          </div>
                          <div className='col-md-2'></div>
                          <div className='col-md-5'>
                              <p className='limitedSignupTitle mobile_upload_title'>Upload files</p>
                              <div style={{ display:"flex" }}>
                                  <img style={{ width: "12px", height:"12px", marginTop:"21px", marginLeft: "10px" }} src={question} alt="question" />
                                  <p className='inputTitle' style={{ marginLeft:"5px" }}>Your current picture *</p>
                              </div>
                              <div style={{ display:"flex" }}>
                                  <p className='inputTitle unactiveInputTitle' style={{ marginTop: "0px" }}>Take a picture</p>
                                  <img src={photo} style={{ width:"18px", height: "16px", marginLeft:"12px", marginTop: "4px" }} alt="photo" />
                              </div>
                              <input name="file1" type="file" className="dropify" data-height="100" />
                              <div style={{ display:"flex", paddingBottom:'10px' }}>
                                  <img style={{ width: "12px", height:"12px", marginTop:"22px", marginLeft: "10px" }} src={question} alt="question" />
                                  <p className='inputTitle' style={{ marginLeft:"5px" }}>Your identity document *</p>
                              </div>
                              <Select options={options} className="selectTitle" />
                              <div style={{ display:"flex" }}>
                                  <img style={{ width: "12px", height:"12px", marginTop:"20px", marginLeft: "10px" }} src={question} alt="question" />
                                  <p className='inputTitle' style={{ marginLeft:"5px" }}>Yourself with your identity document *</p>
                              </div>
                              <div style={{ display:"flex" }}>
                                  <p className='inputTitle unactiveInputTitle' style={{ marginTop: "0px" }}>Take a picture</p>
                                  <img src={photo} style={{ width:"18px", height: "16px", marginLeft:"12px", marginTop: "4px" }} alt="photo" />
                              </div>
                              <input name="file1" type="file" class="dropify" data-height="100" />
                          </div>
                      </div>  
                      <img src={ warning } alt="warning" style={{ width:"13px", marginTop:'25px' }} />
                      <p style={{ color:"#999999", fontSize: "14px" }}>Information requested is required by Hedpay UAB according to the Law on the Prevention of Money Laundering and Terrorist Financing of the Republic of Lithuania and all other international standards in order to ensure the « Knowledge of Client’s Activities », as well as for providing you with high quality and secure financial services.</p>
                      <Link to="standardSignUp" className='goBack'>Go back</Link>
                      <button className='singInButton createAccount standardCreateButton' onClick={this.navTo} >Create account</button>
                  </div>
              </div>
          )
      }
  }
