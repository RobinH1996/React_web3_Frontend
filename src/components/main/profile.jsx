import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Select from 'react-select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CountrySelector from "./signup/limitedSignup/countrySelector"
import "./profile.css"
import FileUpload from './fileUpload';
import CurrencySelect from "./components/currencySelect"
import my_saved_bank_accounts from "../../assets/images/my_saved_bank_accounts.svg"
import my_account from "../../assets/images/my_account.svg"
import file_upload_KYC from "../../assets/images/file_upload_KYC.svg"
import fingerprint_my_identity from "../../assets/images/fingerprint_my_identity.svg"
import file_invoice_dollar from "../../assets/images/file_invoice_dollar.svg"
import dash_square from "../../assets/images/dash-square.png"
import arrow from "../../assets/images/arrow.png"
import question from "../../assets/images/quez.svg"
import check_mark from "../../assets/images/check_mark.svg"
import photo from "../../assets/images/camera.png"
import warning from "../../assets/images/warning1.png"
import warning_red from "../../assets/images/warning_red.png"
import check_blue from "../../assets/images/check_blue.png"
import Go from "../../assets/images/go.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            addAcount: false,
            selectedLeftBar: "one",
            kyc: false,
            changePlan: false,
            selectedBank:'',
            mobile_account:0,
            more_details:0
        }
        this.handleBank = this.handleBank.bind(this);
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleAddAcount = () =>{
        this.setState({ addAcount: !this.state.addAcount })
    }
    handleSelectedBar = (key) =>{
        this.setState({ selectedLeftBar:key })
    }
    handleOpenKYC = () =>{
        this.setState({ kyc:!this.state.kyc })
    }
    handleChangPlan = () =>{
        this.setState({ changePlan:!this.state.changePlan })
    }
    handleBank = (e) =>{
        this.setState({ selectedBank:e.value });
    }
    handleAccountDetail = (key) =>{
        this.setState({ mobile_account: key })
    }
    handleAccountBack = () =>{
        this.setState({ mobile_account: 0 })
    }
    handleMoreDetails = (key) =>{
        this.setState({ more_details: key })
    }
    handleMoreDetailBack = () =>{
        this.setState({ more_details: 0 })
    }

    render() {
        const options = [
            { value: 'Mr', label: 'Mr' },
            { value: 'Mrs.', label: 'Mrs.' },
            { value: 'Ms', label: 'Ms' }
        ]
        const bankOption = [
            { value: 'International', label: 'International Bank Transfers' },
            { value: 'SEPA', label: 'SEPA' },
            { value: 'USA', label: 'USA' },
            { value: 'Internal', label: 'Internal  ' },
        ]
        return (
            <div className="profile_div">
                <div className='web_version_profile'>
                    {!this.state.changePlan?
                    <div className='row'>
                        <div className='col-md-3 left_shadow' style={{ paddingLeft: "0px" }}>
                            <div className='profile_left_div'>
                                <p className='left_div_title'>Limited account</p>
                                <div className='left_bar_ele' style={{ marginTop:"75px" }}>
                                    <img className='left_bar_img' src={my_saved_bank_accounts} width="36px" height="36px" alt="my_saved_bank_accounts" />
                                    <p className={this.state.selectedLeftBar==="one"?'left_bar_text selelected_under_bar':"left_bar_text"} onClick={()=>this.handleSelectedBar("one")}>My saved bank accounts</p>
                                </div>
                                <div className='left_bar_ele'>
                                    <img className='left_bar_img' src={my_account} width="36px" height="36px" alt="my_account" />
                                    <p className={this.state.selectedLeftBar==="two"?'left_bar_text selelected_under_bar':"left_bar_text"} onClick={()=>this.handleSelectedBar("two")}>My account</p>
                                </div>
                                <div className='left_bar_ele'>
                                    <img className={this.state.selectedLeftBar==="three"?'left_bar_img':'left_bar_img unactive_img'} src={file_upload_KYC} width="36px" height="36px" alt="file_upload_KYC" />
                                    <div>
                                        <p className={this.state.selectedLeftBar==="three"?'left_bar_text selelected_under_bar':"left_bar_text"} onClick={()=>this.handleSelectedBar("three")}>KYC</p>
                                        {this.state.selectedLeftBar==="three"?
                                            <p></p>
                                            :<p className='not_completed'>Step not completed</p>
                                            
                                        }
                                    </div>
                                </div>
                                <div className='left_bar_ele'>
                                    <img className={this.state.selectedLeftBar==="four"?'left_bar_img':'left_bar_img unactive_img'} src={fingerprint_my_identity} width="36px" height="36px" alt="fingerprint_my_identity" />
                                    <div>
                                        <p className={this.state.selectedLeftBar==="four"?'left_bar_text selelected_under_bar':"left_bar_text"} >My identity</p>
                                        {this.state.selectedLeftBar==="four"?
                                            <p></p>
                                            :<p className='not_completed'>Step not completed</p>
                                        }
                                    </div>
                                </div>
                                <div className='left_bar_ele'>
                                    <img className='left_bar_img' src={file_invoice_dollar} width="36px" height="36px" alt="fingerprint_my_identity" />
                                    <p className={this.state.selectedLeftBar==="five"?'left_bar_text selelected_under_bar':"left_bar_text"} onClick={()=>this.handleSelectedBar("five")}>My plan</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            {this.state.selectedLeftBar==="one"?
                                <div className='profile_right_div'>
                                    <div className='right_div_head'>
                                        <p className='saved_bank_title'>Saved bank accounts</p>
                                        {!this.state.addAcount?
                                        <button className='singInButton activeButton add_account_btn' onClick={this.handleAddAcount} >Add account</button>
                                        :
                                        <div></div>
                                        }
                                    </div>
                                    {!this.state.addAcount?
                                    <div style={{ paddingBottom: "100px" }}>
                                        <div className='show_and_search' style={{ marginTop:"30px" }}>
                                            <div className='selected_div'>
                                                <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                                                <select className='select_ele' name="pageItems">
                                                <option value="6">6</option>
                                                <option value="6">12</option>
                                                <option value="6">18</option>
                                                <option value="6">24</option>
                                                </select>
                                            </div>
                                            <input type="search" name="search" className="search_input" placeholder='Search' />
                                            </div>
                                            <div className='table_responsive'>
                                            <table className='table text-left'>
                                                <thead>
                                                    <tr>
                                                        <th>Bank</th>
                                                        <th>Country</th>
                                                        <th>Account Number</th>
                                                        <th>Save date</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ScotiaBank</td>
                                                        <td>Canada</td>
                                                        <td>1234567</td>
                                                        <td>05/05/2022</td>
                                                        <td><img src={dash_square} alt="dash_square" width="15px" />&nbsp;&nbsp;&nbsp;&nbsp;<img src={arrow} alt="arrow" width="16px" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <Stack spacing={2}>
                                            <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                                        </Stack>
                                    </div>
                                    :
                                    <div style={{ paddingBottom: "100px" }}>
                                        <div className='add_div_all'>
                                            <div className='add_left_div'>
                                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Bank account</p>
                                                <div style={{ position:'relative', zIndex:'4' }}>
                                                    <Select options={bankOption} onChange={this.handleBank} />
                                                </div>
                                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Country</p>
                                                <CountrySelector />
                                                {this.state.selectedBank==="SEPA"?
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"100%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; SWIFT/BIC Code</p>
                                                        <input className='inputStyle' type="text" name="amount" placeholder='NOSCCATTXXX' />
                                                    </div>
                                                </div>
                                                :
                                                this.state.selectedBank==="Internal"?
                                                <div></div>
                                                :
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"45%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; SWIFT/BIC Code</p>
                                                        <input className='inputStyle' type="text" name="amount" placeholder='NOSCCATTXXX' />
                                                    </div>
                                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Routing</p>
                                                        <input className='inputStyle' type="text" name="amount" placeholder='45678' />
                                                    </div>
                                                </div>
                                                }
                                                {this.state.selectedBank==="USA"?
                                                <div>
                                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; ABA</p>
                                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                                </div>
                                                :this.state.selectedBank==="SEPA"?
                                                <div>
                                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; IBAN</p>
                                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                                </div>
                                                :this.state.selectedBank==="Internal"?
                                                <div>
                                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; UID</p>
                                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                                </div>
                                                :
                                                <div></div>
                                                }
                                                <p style={{ color:"#F02D3A", marginTop: "45px", fontWeight:"600", cursor:"pointer" }} onClick={ this.handleAddAcount }><img src={dash_square} alt="dash_square" style={{ marginTop:"-4px" }} width="15px" />&nbsp;&nbsp;&nbsp;&nbsp;Delete account</p>
                                            </div>
                                            <div className='add_right_div'>
                                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Currency</p>
                                                <CurrencySelect bank={this.state.selectedBank} />
                                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Bank</p>
                                                {this.state.selectedBank==='Internal'?
                                                    <input className='inputStyle' defaultValue="Hedpay" type="text" name="nickName" placeholder='Enter your…' />
                                                    :
                                                    <input className='inputStyle' defaultValue="" type="text" name="nickName" placeholder='Enter your…' />
                                                }
                                                {this.state.selectedBank==="Internal" || this.state.selectedBank==="SEPA" ?
                                                <div></div>
                                                :
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"45%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Bank Code</p>
                                                        <input className='inputStyle' type="text" name="amount" placeholder='123' />
                                                    </div>
                                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Account Number</p>
                                                        <input className='inputStyle' type="text" name="amount" placeholder='1234567' />
                                                    </div>
                                                </div>
                                                }
                                                <button className='singInButton activeButton save_account_btn' >Save account</button>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>
                                :
                                this.state.selectedLeftBar==="two"?
                                <div className='profile_right_div'>
                                    <p className='saved_bank_title'>My account</p>
                                    <div style={{ paddingBottom: "100px" }}>
                                        <div className='add_div_all'>
                                            <div className='add_left_div'>
                                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Country of residence *</p>
                                                <CountrySelector />
                                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Nickname *</p>
                                                <input className='inputStyle' type="text" name="name" placeholder='HedpayHedpay' />
                                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Email *</p>
                                                <input className='inputStyle' type="email" name="email" placeholder='Hedpay@test.com' />
                                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Password *</p>
                                                <input className='inputStyle' type="email" name="password" placeholder='password' />
                                                <p style={{ color: "#002554", fontWeight:"600", float:"right", marginTop: "20px", cursor: "pointer", textDecorationLine:"underline" }}>Change password</p>
                                            </div>
                                            <div className='add_right_div'>
                                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Title *</p>
                                                <Select options={options} className="selected_title" />
                                                <p className='loginTitle' style={{ marginTop:"21px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; First name *</p>
                                                <input className='inputStyle' type="text" name="fname" placeholder='Hedpay' />
                                                <p className='loginTitle' style={{ marginTop:"23px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Middle name(s) *</p>
                                                <input className='inputStyle' type="text" name="mname" placeholder='Hedpay' />
                                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Last name *</p>
                                                <input className='inputStyle' type="text" name="lname" placeholder='Hedpay' />
                                                <button className='singInButton activeButton' style={{ marginTop: "100px" }} >Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                this.state.selectedLeftBar==="three"?
                                <div className='profile_right_div'>
                                    {!this.state.kyc?
                                    <div>
                                        <p className='saved_bank_title' style={{ fontSize: "24px" }}>KYC</p>
                                        <p style={{ color:"#737373" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br/> feirmod tempor</p>
                                        <p style={{ color:"#002554", marginTop:"40px" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#696B6C" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#696B6C" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit.</p>
                                        <p style={{ color:"#696B6C" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit.</p>
                                        <button className='singInButton activeButton' style={{ marginTop: "45px", width:"270px" }} onClick={this.handleOpenKYC} >Fill out</button>
                                    </div>
                                    :
                                    <div>
                                        <p className='saved_bank_title'>KYC</p>
                                        <div className='row' style={{ borderBottom: "2px solid #BAC4CE", paddingLeft:'0px', paddingRight:'0px', paddingBottom: "50px" }}>
                                            <div className='col-md-6' style={{ paddingLeft:'0px' }}>
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"35%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>No. *</p>
                                                        <input className='inputStyle' type="number" name="no" placeholder='Enter your…' />
                                                    </div>
                                                    <div style={{ width:"55%", marginLeft:"auto" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Street *</p>
                                                        <input className='inputStyle' type="text" name="street" placeholder='Enter your…' />
                                                    </div>
                                                </div>
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"45%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Nickname *</p>
                                                        <input className='inputStyle' type="text" name="Nickname" placeholder='Enter your…' />
                                                    </div>
                                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>City *</p>
                                                        <input className='inputStyle' type="text" name="City" placeholder='Enter your…' />
                                                    </div>
                                                </div>
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"45%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Postal Code *</p>
                                                        <input className='inputStyle' type="text" name="Postal" placeholder='Enter your…' />
                                                    </div>
                                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Province *</p>
                                                        <input className='inputStyle' type="text" name="Province" placeholder='Enter your…' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6' style={{ paddingRight:'0px' }}>
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"100%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Cell phone number</p>
                                                        <PhoneInput
                                                            country={'ca'}
                                                            value={this.state.phone}
                                                            onChange={phone => this.setState({ phone })}
                                                        />
                                                    </div>
                                                </div>
                                                <div style={{ display:"flex", width:"100%" }}>
                                                    <div style={{ width:"100%" }}>
                                                        <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Date of birth *</p>
                                                        <input className='inputStyle' style={{ width: '30%' }} type="number" name="MM" placeholder='MM' />
                                                        <input className='inputStyle' style={{ width: '30%', marginLeft:'5%'}} type="number" name="DD" placeholder='DD' />
                                                        <input className='inputStyle' style={{ width: '30%', marginLeft:'5%'}} type="number" name="YYYY" placeholder='YYYY' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row' style={{ marginTop:'40px' }}>
                                            <div className='col-md-4'>
                                                <p style={{ color: '#002554', fontWeight: '600' }}><img src={question} alt="question" />&nbsp;&nbsp; Your current picture *</p>
                                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Take a picture <img src={photo} alt="photo" width="18px" height="16px" /> </p>
                                                <FileUpload />
                                            </div>
                                            <div className='col-md-4'>
                                                <p style={{ color: '#002554', fontWeight: '600' }}><img src={question} alt="question" />&nbsp;&nbsp; Your identity document *</p>
                                                <CountrySelector />
                                                <div className='upLoad_id_img'>
                                                    <FileUpload />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <p style={{ color: '#002554', fontWeight: '600' }}><img src={question} alt="question" />&nbsp;&nbsp;Yourself with your identity document *</p>
                                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Take a picture <img src={photo} alt="photo" width="18px" height="16px" /> </p>
                                                <FileUpload />
                                            </div>
                                        </div>
                                        <img src={warning} alt="warning" style={{ marginTop:'55px' }} width='13px' height='13px' />
                                        <p style={{ fontSize:'14px', color:'#999999' }}>Information requested is required by Hedpay UAB according to the Law on the Prevention of Money Laundering and Terrorist Financing of the Republic of Lithuania and all other international standards in order to ensure the « Knowledge of Client’s Activities », as well as for providing you with high quality and secure financial services.</p>
                                        <div style={{ float:"left", width:"100%", marginTop: "35px" }}>
                                            <p style={{ float: "left", cursor: "pointer" }} onClick={this.handleOpenKYC} >Go back</p>
                                            <button style={{ float:"right" }} className='singInButton activeButton QR_copy' >Save</button>
                                        </div>
                                    </div>
                                    }
                                </div>
                                :
                                <div className='profile_right_div'>
                                    <p className='saved_bank_title'>My plan</p>
                                    <div className='row'>
                                        <div className='col-md-5' style={{ paddingLeft:'0px' }}>
                                            <p style={{ color:'#002554', fontWeight:'500', fontSize:'16px', marginTop:'40px' }}>Limited account</p>
                                            <div className='my_plan_ele' style={{ marginTop:'70px' }}>
                                                <p style={{ float:"left" }}>Number of Trades per Day</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>3</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Daily Total Trades Limit</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$500.00</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Monthly Total Trades Limit</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$5,000.00</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Number of Wihdrawals per Day</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>3</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Daily Total Wihdrawals Limit</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$300.00</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Monthly Total Wihdrawals Limit</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$2,500.00</p>
                                            </div>
                                            <button className='singInButton change_plan_btn' onClick={this.handleChangPlan} >Change my plan</button>
                                        </div>
                                        <div className='col-md-2'></div>
                                        <div className='col-md-5'>
                                            <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Default currency</p>
                                            <CurrencySelect />
                                            <div className='my_plan_ele' style={{ marginTop:'40px' }}>
                                                <p style={{ float:"left" }}>Transactions With in Hedpay</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>50</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Incoming Deposits</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$500.00</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Wallet Capacity</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$10,000.00</p>
                                            </div>
                                            <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                                <p style={{ float:"left" }}>Maximum Staking Amount</p>
                                                <p style={{ float: 'right', fontWeight:'700' }}>$100,000.00</p>
                                            </div>
                                            <div style={{ display:'flex', width: '100%', position:'relative', top:'46px' }}>
                                                <img src={warning_red} alt="warning_red" width='13px' height='13px' />
                                                <p style={{ marginLeft: '10px' }}>This is the limit of your account, to increase the limit you must complete the information!</p>
                                            </div>
                                            <button style={{ marginTop:'138px' }} className='singInButton activeButton' >Save</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <div className='signUp row footer_padding' style={{ marginTop:'200px' }}>
                        <p className='accOption'>Account Options</p>
                        <div className='col-md-3 col-sm-3 allUSDDIV' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                            <p className='allUSD'>All USD$ equivelant</p>
                            <p className='number'>Number of Trades per Day</p>
                            <p className='number'>Daily Total Trades Limit</p>
                            <p className='number'>Monthly Total Trades Limit</p><br />
                            <p className='number'>Number of Wihdrawals per Day</p>
                            <p className='number'>Daily Total Wihdrawals Limit</p>
                            <p className='number'>Monthly Total Wihdrawals Limit</p><br />
                            <p className='number'>Transactions With in Hedpay</p>
                            <p className='number'>Incoming Deposits</p>
                            <p className='number'>Wallet Capacity</p>
                            <p className='number'>Maximum Staking Amount</p>
                            <p className='go_back_plan' onClick={this.handleChangPlan}>Go back</p>
                        </div>
                        <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                            <div className='signUpDash current_plan'>
                                <p className='limited'>LIMITED</p>
                                <div className='borderLine'></div>
                                <p className='number non_border_bottom' style={{ marginTop:"10px" }}>No KYC is required</p>
                                <p className='number'>3</p>
                                <p className='number'>$500.00</p>
                                <p className='number'>$5,000.00</p><br />
                                <p className='number'>3</p>
                                <p className='number'>$300.00</p>
                                <p className='number'>$2,500.00</p><br />
                                <p className='number'>50</p>
                                <p className='number'>$500.00</p>
                                <p className='number'>$10,000.00</p>
                                <p className='number'>$100,000.00</p>
                                <span style={{ color:'#002554', fontSize: '17px', fontWeight:'800' }}>My current plan</span>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                            <div className='signUpDash'>
                                <p className='limited'>STANDARD</p>
                                <div className='borderLine'></div>
                                <p className='number non_border_bottom' style={{ marginTop:"10px" }}>Basic KYC screening required</p>
                                <p className='number'>5</p>
                                <p className='number'>$1,000.00</p>
                                <p className='number'>$10,000.00</p><br />
                                <p className='number'>5</p>
                                <p className='number'>$500.00</p>
                                <p className='number'>$5,000.00</p><br />
                                <p className='number'>150</p>
                                <p className='number'>$1,000.00</p>
                                <p className='number'>$50,000.00</p>
                                <p className='number'>Unlimited</p>
                                <button className='nextStep'><span>Choose plan</span></button>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                            <div className='signUpDash'>
                                <p className='limited'>PRO</p>
                                <div className='borderLine'></div>
                                <p className='number non_border_bottom' style={{ marginTop:"10px" }}>KYC Level 2 screening required</p>
                                <p className='number'>10</p>
                                <p className='number'>$5,000.00</p>
                                <p className='number'>$25,000.00</p><br />
                                <p className='number'>10</p>
                                <p className='number'>$1,000.00</p>
                                <p className='number'>$5,000.00</p><br />
                                <p className='number'>500</p>
                                <p className='number'>$10,000.00</p>
                                <p className='number'>$250,000.00</p>
                                <p className='number'>Unlimited</p>
                                <button className='nextStep'><span>Choose plan</span></button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className='mobile_version_profile'>
                    {this.state.mobile_account===0?
                        <div className='mobile_mailBox_title_group'>
                            <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px' }}>Limited account</p>
                            <p style={{ fontSize:'16px', color:'#696B6C', textAlign:'center' }}>Go to my plan to increase the account limit.</p>
                            <div className='left_bar_ele mobile_left_bar_ele' onClick={()=>this.handleAccountDetail(1)}>
                                <img className='left_bar_img' src={my_saved_bank_accounts} width="36px" height="36px" alt="my_saved_bank_accounts" />
                                <p className="left_bar_text mobile_left_bar">My saved bank accounts</p>
                            </div>
                            <div className='left_bar_ele mobile_left_bar_ele' onClick={()=>this.handleAccountDetail(2)} style={{ marginTop:'10px' }}>
                                <img className='left_bar_img' src={my_account} width="36px" height="36px" alt="my_account" />
                                <p className="left_bar_text mobile_left_bar">My account</p>
                            </div>
                            <div className='left_bar_ele mobile_left_bar_ele' onClick={()=>this.handleAccountDetail(3)} style={{ marginTop:'10px' }}>
                                <img className={this.state.selectedLeftBar==="three"?'left_bar_img':'left_bar_img unactive_img'} src={file_upload_KYC} width="36px" height="36px" alt="file_upload_KYC" />
                                <div className='mobile_left_bar' style={{ display:'flex' }}>
                                    <p className="left_bar_text" style={{ position:'relative', top:'6px' }}>KYC</p>
                                    <p className='mobile_red_letter'>Step not completed</p>
                                </div>
                            </div>
                            <div className='left_bar_ele mobile_left_bar_ele' style={{ marginTop:'10px' }}>
                                <img className={this.state.selectedLeftBar==="four"?'left_bar_img':'left_bar_img unactive_img'} src={fingerprint_my_identity} width="36px" height="36px" alt="fingerprint_my_identity" />
                                <div className='mobile_left_bar' style={{ display:'flex' }}>
                                    <p className="left_bar_text" style={{ position:'relative', top:'6px' }}>My identity</p>
                                    <p className='mobile_red_letter'>Step not completed</p>
                                </div>
                            </div>
                            <div className='left_bar_ele mobile_left_bar_ele' onClick={()=>this.handleAccountDetail(4)} style={{ marginTop:'10px' }}>
                                <img className='left_bar_img' src={file_invoice_dollar} width="36px" height="36px" alt="fingerprint_my_identity" />
                                <p className="left_bar_text mobile_left_bar">My plan</p>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===1 && !this.state.addAcount?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p onClick={this.handleAccountBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>My saved bank accounts</p>
                            </div>
                            <div style={{ display:'flex', marginTop:'45px' }}>
                                <p style={{ marginTop:'30px', color:'#002554', fontSize:'16px', fontWeight:'600' }}>Show</p>
                                <button onClick={ this.handleAddAcount } className='singInButton activeButton' style={{ width:'40%', marginLeft:'auto' }}>Add account</button>
                            </div>
                            <div style={{ display:'flex' }}>
                                <select className='select_ele' name="pageItems">
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                </select>
                                <input style={{ marginLeft:'auto', width:'75%' }} type="search" name="search" className="search_input message_search" placeholder='Search' />
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Bank</p>
                                    <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>ScotiaBank</p>
                                </div>
                                <div style={{ display:'flex' }}>
                                    <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Country</p>
                                    <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Canada</p>
                                </div>
                                <div style={{ display:'flex' }}>
                                    <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Account Number</p>
                                    <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>1234567</p>
                                </div>
                                <div style={{ display:'flex' }}>
                                    <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Save date</p>
                                    <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>05/05/2022</p>
                                </div>
                                <div style={{ display:'flex' }}>
                                    <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>See</p>
                                    <img style={{ marginLeft:"auto", marginTop:'4px' }} src={Go} width='18px' height='18px' alt="go" />
                                </div>
                            </div>
                            <div>
                                <Stack spacing={2}>
                                    <Pagination count={1} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                                </Stack>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===1 && this.state.addAcount?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p onClick={this.handleAddAcount} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>See saved account</p>
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Bank account</p>
                                <div style={{ position:'relative', zIndex:'4' }}>
                                    <Select options={bankOption} onChange={this.handleBank} />
                                </div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Currency</p>
                                <CurrencySelect bank={this.state.selectedBank} />
                                <div style={{ display:"flex", width:"100%" }}>
                                    <div style={{ width:"45%" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Country</p>
                                        <CountrySelector />
                                    </div>
                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Bank</p>
                                        {this.state.selectedBank==='Internal'?
                                            <input className='inputStyle' defaultValue="Hedpay" type="text" name="nickName" placeholder='Enter your…' />
                                            :
                                            <input className='inputStyle' defaultValue="" type="text" name="nickName" placeholder='Enter your…' />
                                        }
                                    </div>
                                </div>
                                {this.state.selectedBank==="SEPA"?
                                <div style={{ display:"flex", width:"100%" }}>
                                    <div style={{ width:"100%" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; SWIFT/BIC Code</p>
                                        <input className='inputStyle' type="text" name="amount" placeholder='NOSCCATTXXX' />
                                    </div>
                                </div>
                                :
                                this.state.selectedBank==="Internal"?
                                <div></div>
                                :
                                <div style={{ display:"flex", width:"100%" }}>
                                    <div style={{ width:"45%" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; SWIFT/BIC Code</p>
                                        <input className='inputStyle' type="text" name="amount" placeholder='NOSCCATTXXX' />
                                    </div>
                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Routing</p>
                                        <input className='inputStyle' type="text" name="amount" placeholder='45678' />
                                    </div>
                                </div>
                                }
                                {this.state.selectedBank==="USA"?
                                <div>
                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; ABA</p>
                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                </div>
                                :this.state.selectedBank==="SEPA"?
                                <div>
                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; IBAN</p>
                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                </div>
                                :this.state.selectedBank==="Internal"?
                                <div>
                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; UID</p>
                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                </div>
                                :
                                <div></div>
                                }
                                {this.state.selectedBank==="Internal" || this.state.selectedBank==="SEPA" ?
                                <div></div>
                                :
                                <div style={{ display:"flex", width:"100%" }}>
                                    <div style={{ width:"45%" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Bank Code</p>
                                        <input className='inputStyle' type="text" name="amount" placeholder='123' />
                                    </div>
                                    <div style={{ width:"45%", marginLeft:"auto" }}>
                                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Account Number</p>
                                        <input className='inputStyle' type="text" name="amount" placeholder='1234567' />
                                    </div>
                                </div>
                                }
                                <button className='singInButton activeButton save_account_btn' >Save account</button>
                                
                                <p style={{ color:"#F02D3A", marginTop: "45px", fontWeight:"600", cursor:"pointer" }} onClick={ this.handleAddAcount }><img src={dash_square} alt="dash_square" style={{ marginTop:"-4px" }} width="15px" />&nbsp;&nbsp;&nbsp;&nbsp;Delete account</p>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===2?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p onClick={this.handleAccountBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>My account</p>
                            </div>
                            <div style={{ marginTop:'45px' }}>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Country of residence *</p>
                                <CountrySelector />
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Nickname *</p>
                                <input className='inputStyle' type="text" name="name" placeholder='HedpayHedpay' />
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Email *</p>
                                <input className='inputStyle' type="email" name="email" placeholder='Hedpay@test.com' />
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Password *</p>
                                <input className='inputStyle' type="email" name="password" placeholder='password' />
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Title *</p>
                                <Select options={options} className="selected_title" />
                                <p className='loginTitle' style={{ marginTop:"21px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; First name *</p>
                                <input className='inputStyle' type="text" name="fname" placeholder='Hedpay' />
                                <p className='loginTitle' style={{ marginTop:"23px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Middle name(s) *</p>
                                <input className='inputStyle' type="text" name="mname" placeholder='Hedpay' />
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}> <img src={question} alt="question" />&nbsp;&nbsp; Last name *</p>
                                <input className='inputStyle' type="text" name="lname" placeholder='Hedpay' />
                                <button className='singInButton activeButton' style={{ marginTop: "50px" }} >Save</button>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===3 && !this.state.kyc?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p onClick={this.handleAccountBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>KYC</p>
                            </div>
                            <div style={{ marginTop:'35px' }}>
                                <p style={{ color:"#737373" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br/> feirmod tempor</p>
                                <p style={{ color:"#002554", marginTop:"40px" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#002554" }}><img src={check_mark} alt="check_mark" /> &nbsp;&nbsp; Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#696B6C" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#696B6C" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit.</p>
                                <p style={{ color:"#696B6C" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit.</p>
                                <button className='singInButton activeButton' style={{ marginTop: "35px", width:"100%" }} onClick={this.handleOpenKYC} >Fill out</button>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===3 && this.state.kyc?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p onClick={this.handleAccountBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>KYC</p>
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>No. *</p>
                                <input className='inputStyle' type="number" name="no" placeholder='Enter your…' />
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Street *</p>
                                <input className='inputStyle' type="text" name="street" placeholder='Enter your…' />
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Nickname *</p>
                                <input className='inputStyle' type="text" name="Nickname" placeholder='Enter your…' />
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>City *</p>
                                <input className='inputStyle' type="text" name="City" placeholder='Enter your…' />
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Postal Code *</p>
                                <input className='inputStyle' type="text" name="Postal" placeholder='Enter your…' />
                            </div>
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Province *</p>
                                <input className='inputStyle' type="text" name="Province" placeholder='Enter your…' />
                            </div>
                            <div style={{ width:"100%" }}>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Cell phone number</p>
                                <PhoneInput
                                    country={'ca'}
                                    value={this.state.phone}
                                    onChange={phone => this.setState({ phone })}
                                />
                            </div>
                            <div style={{ display:"flex", width:"100%" }}>
                                <div style={{ width:"100%" }}>
                                    <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Date of birth *</p>
                                    <input className='inputStyle' style={{ width: '30%' }} type="number" name="MM" placeholder='MM' />
                                    <input className='inputStyle' style={{ width: '30%', marginLeft:'5%'}} type="number" name="DD" placeholder='DD' />
                                    <input className='inputStyle' style={{ width: '30%', marginLeft:'5%'}} type="number" name="YYYY" placeholder='YYYY' />
                                </div>
                            </div>
                            <div className='row' style={{ marginTop:'40px' }}>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Upload files</p>
                                <div className='col-md-4'>
                                    <p style={{ color: '#002554', fontWeight: '600' }}><img src={question} alt="question" />&nbsp;&nbsp; Your current picture *</p>
                                    <p className='loginTitle' style={{ marginTop:"15px", color: "#002554" }}>Take a picture <img src={photo} alt="photo" width="18px" height="16px" /> </p>
                                    <FileUpload />
                                </div>
                                <div className='col-md-4' style={{ marginTop:'40px' }}>
                                    <p style={{ color: '#002554', fontWeight: '600' }}><img src={question} alt="question" />&nbsp;&nbsp; Your identity document *</p>
                                    <CountrySelector />
                                    <div className='upLoad_id_img'>
                                        <FileUpload />
                                    </div>
                                </div>
                                <div className='col-md-4' style={{ marginTop:'55px' }}>
                                    <p style={{ color: '#002554', fontWeight: '600' }}><img src={question} alt="question" />&nbsp;&nbsp;Yourself with your identity document *</p>
                                    <p className='loginTitle' style={{ marginTop:"15px", color: "#002554" }}>Take a picture <img src={photo} alt="photo" width="18px" height="16px" /> </p>
                                    <FileUpload />
                                </div>
                            </div>
                            <img src={warning} alt="warning" style={{ marginTop:'25px' }} width='13px' height='13px' />
                            <p style={{ fontSize:'14px', color:'#999999' }}>Information requested is required by Hedpay UAB according to the Law on the Prevention of Money Laundering and Terrorist Financing of the Republic of Lithuania and all other international standards in order to ensure the « Knowledge of Client’s Activities », as well as for providing you with high quality and secure financial services.</p>
                            <div style={{ float:"left", width:"100%", marginTop: "35px" }}>
                                <p style={{ float: "left", cursor: "pointer", marginTop:'20px' }} onClick={this.handleOpenKYC} >Go back</p>
                                <button style={{ float:"right" }} className='singInButton activeButton QR_copy' >Create account</button>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===4 && !this.state.changePlan?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p onClick={this.handleAccountBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>My plan</p>
                            </div>
                            <div>
                                <p style={{ color:'#002554', fontWeight:'600', fontSize:'16px', marginTop:'40px', textAlign:'center' }}>Limited account</p>
                                <div className='my_plan_ele' style={{ marginTop:'40px' }}>
                                    <p style={{ float:"left" }}>Number of Trades per Day</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>3</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Daily Total Trades Limit</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$500.00</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Monthly Total Trades Limit</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$5,000.00</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Number of Wihdrawals per Day</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>3</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Daily Total Wihdrawals Limit</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$300.00</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Monthly Total Wihdrawals Limit</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$2,500.00</p>
                                </div>
                                <button className='singInButton change_plan_btn' onClick={this.handleChangPlan} >Change my plan</button>
                                <p className='loginTitle' style={{ marginTop:"60px", color: "#002554" }}>Default currency</p>
                                <CurrencySelect />
                                <div className='my_plan_ele' style={{ marginTop:'40px' }}>
                                    <p style={{ float:"left" }}>Transactions With in Hedpay</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>50</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Incoming Deposits</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$500.00</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Wallet Capacity</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$10,000.00</p>
                                </div>
                                <div className='my_plan_ele' style={{ marginTop:'15px' }}>
                                    <p style={{ float:"left" }}>Maximum Staking Amount</p>
                                    <p style={{ float: 'right', fontWeight:'700' }}>$100,000.00</p>
                                </div>
                                <div style={{ width: '100%', position:'relative', top:'20px' }}>
                                    <img src={warning_red} alt="warning_red" width='13px' height='13px' /><br />
                                    <p>This is the limit of your account, to increase the limit you must complete the information!</p>
                                </div>
                                <button style={{ marginTop:'70px' }} className='singInButton activeButton' >Save</button>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===4 && this.state.changePlan && this.state.more_details===0?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p  onClick={this.handleChangPlan} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>Change my plan</p>
                            </div>
                            <p style={{ color:'#002554', fontWeight:'600', fontSize:'16px', marginTop:'40px', textAlign:'center' }}>Account Options</p>
                            <div style={{ width:'90%', marginTop:'35px', marginLeft:'auto', marginRight:'auto', paddingTop:'30px', paddingBottom:'40px', backgroundColor:'#FAFCFF', textAlign:'center' }}>
                                <p className='mobile_linited_title'>Limited account</p>
                                <p style={{ color:'#435469', fontSize:'18px', fontWeight:'600', marginTop:'30px' }}>No KYC is required</p>
                                <img style={{ marginTop:'45px' }} src={check_blue} alt="check_blue" width="16px" height="16px" />
                                <p style={{ color:'#2DCCD3', fontSize:'18px', fontWeight:'600', marginTop:'10px' }}>My current plan</p>
                            </div>
                            <div style={{ width:'90%', marginTop:'25px', marginLeft:'auto', marginRight:'auto', paddingTop:'30px', paddingBottom:'40px', backgroundColor:'#FAFCFF', textAlign:'center' }}>
                                <p className='mobile_linited_title' style={{ color:'#002554' }}>Standard account</p>
                                <p style={{ color:'#435469', fontSize:'18px', fontWeight:'600', marginTop:'30px' }}>Basic KYC screening required</p>
                                <p onClick={ ()=>this.handleMoreDetails(1) } style={{ color:'#2DCCD3', fontSize:'18px', fontWeight:'600', marginTop:'70px' }}>See more details</p>
                            </div>
                            <div style={{ width:'90%', marginTop:'25px', marginLeft:'auto', marginRight:'auto', paddingTop:'30px', paddingBottom:'40px', backgroundColor:'#FAFCFF', textAlign:'center' }}>
                                <p className='mobile_linited_title' style={{ color:'#002554' }}>Pro account</p>
                                <p style={{ color:'#435469', fontSize:'18px', fontWeight:'600', marginTop:'30px' }}>KYC Level 2 screening required</p>
                                <p onClick={ ()=>this.handleMoreDetails(2) } style={{ color:'#2DCCD3', fontSize:'18px', fontWeight:'600', marginTop:'70px' }}>See more details</p>
                            </div>
                        </div>
                    :
                    this.state.mobile_account===4 && this.state.changePlan && this.state.more_details===1?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p  onClick={this.handleMoreDetailBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>Standard account</p>
                            </div>
                            <p style={{ fontSize:'18px', color:'#002554', fontWeight:'600', textAlign:'center', marginTop:'35px' }}>Basic KYC screening required</p>
                            <div className='mobile_account_div' style={{ marginTop:'35px' }}>
                                <p style={{ color:'#696B6C' }}>Number of Trades per Day</p>
                                <p style={{ color:'#002554' }}>5</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Daily Total Trades Limit</p>
                                <p style={{ color:'#002554' }}>$1,000.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Monthly Total Trades Limit</p>
                                <p style={{ color:'#002554' }}>$10,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Number of Wihdrawals per Day</p>
                                <p style={{ color:'#002554' }}>5</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Daily Total Wihdrawals Limit</p>
                                <p style={{ color:'#002554' }}>$500.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Monthly Total Wihdrawals Limit</p>
                                <p style={{ color:'#002554' }}>$5,000.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Transactions With in Hedpay</p>
                                <p style={{ color:'#002554' }}>150</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Incoming Deposits</p>
                                <p style={{ color:'#002554' }}>$1,000.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Wallet Capacity</p>
                                <p style={{ color:'#002554' }}>$50,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Maximum Staking Amount</p>
                                <p style={{ color:'#002554' }}>Unlimited</p>
                            </div>
                            <button className='singInButton activeButton' >Apply now</button>
                        </div>
                    :
                    this.state.mobile_account===4 && this.state.changePlan && this.state.more_details===2?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p  onClick={this.handleMoreDetailBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>Pro account</p>
                            </div>
                            <p style={{ fontSize:'18px', color:'#002554', fontWeight:'600', textAlign:'center', marginTop:'35px' }}>Basic KYC screening required</p>
                            <div className='mobile_account_div' style={{ marginTop:'35px' }}>
                                <p style={{ color:'#696B6C' }}>Number of Trades per Day</p>
                                <p style={{ color:'#002554' }}>10</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Daily Total Trades Limit</p>
                                <p style={{ color:'#002554' }}>$5,000.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Monthly Total Trades Limit</p>
                                <p style={{ color:'#002554' }}>$25,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Number of Wihdrawals per Day</p>
                                <p style={{ color:'#002554' }}>10</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Daily Total Wihdrawals Limit</p>
                                <p style={{ color:'#002554' }}>$1,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Monthly Total Wihdrawals Limit</p>
                                <p style={{ color:'#002554' }}>$5,000.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Transactions With in Hedpay</p>
                                <p style={{ color:'#002554' }}>500</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Incoming Deposits</p>
                                <p style={{ color:'#002554' }}>$10,000.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Wallet Capacity</p>
                                <p style={{ color:'#002554' }}>$250,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Maximum Staking Amount</p>
                                <p style={{ color:'#002554' }}>Unlimited</p>
                            </div>
                            <button className='singInButton activeButton' >Apply now</button>
                        </div>
                    :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);