import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Select from 'react-select'
import { Dropdown } from 'semantic-ui-react'
import CountrySelector from './signup/limitedSignup/countrySelector';
import PhoneInput from 'react-phone-input-2'
import CurrencySelect from "./components/currencySelect"
import {crypto_currency} from "./components/crypto_currency"
import 'react-phone-input-2/lib/style.css'
import "./contact.css"
import Go from "../../assets/images/go.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw,
      phone:''
    }
};
const mapDispatchToProps = dispatch => ({
});

class contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            new_contact:false,
            step:1,
            add_account:0,
            phone_number:'',
            selectedBank:'',
            mobile_contact:0
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
    handleNewContact = () =>{
        this.setState({ new_contact: !this.state.new_contact })
    }
    handleRemoveAccount = () =>{
        this.setState({ add_account: --this.state.add_account })
    }
    handleAddAccount = () =>{
        // this.setState({ add_account: ++this.state.add_account })
        this.setState({ add_account: 1 })
    }
    handleOnChange = (value) =>{
        this.setState({ phone: value })
    }
    handleBank = (e) =>{
        this.setState({ selectedBank:e.value });
    }
    handleMobileContact = () =>{
        this.setState({ mobile_contact: ++this.state.mobile_contact})
    }
    handleMobileContactGoBack = () =>{
        this.setState({ mobile_contact:--this.state.mobile_contact })
    }

    render() {
        const options = [
          { value: 'phone', label: 'Phone' },
          { value: 'email.', label: 'Email' }
        ]
        const bankOption = [
            { value: 'International', label: 'International Bank Transfers' },
            { value: 'SEPA', label: 'SEPA' },
            { value: 'USA', label: 'USA' },
            { value: 'Internal', label: 'Internal  ' },
        ]
        return (
            <div style={{ marginTop: "170px", paddingBottom:'100px' }}>
                <div className='web_version_contact'>
                    {!this.state.new_contact?
                    <div className='contact_div' style={{ paddingBottom: "100px" }}>
                        <div className='add_contact_div'>
                            <button className='singInButton activeButton contact_add_btn' onClick={this.handleNewContact}>Add new contact</button>
                        </div>
                        <div>
                            <p className='page_title'  style={{ fontSize:'16px', fontWeight:'600', color:'#002554' }}>Saved contacts</p>
                            <div className='show_and_search' style={{ marginTop:"30px" }}>
                                <div className='selected_div'>
                                    <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                                    <select className='select_ele' style={{ width:'100px' }} name="pageItems">
                                        <option value="6">Accepted</option>
                                        <option value="6">Accepted</option>
                                    </select>
                                </div>
                                <input type="search" name="search" className="search_input" placeholder='Search' />
                            </div>
                        </div>
                        <div className='table_responsive'>
                            <table className='table text-left'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Registered wallet accounts</th>
                                        <th>Registered bank account</th>
                                        <th>See</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hedpay Hedpay</td>
                                        <td>Hedpay@test.com</td>
                                        <td>3 registered accounts</td>
                                        <td>ScotiaBank</td>
                                        <td><img src={Go} width='18px' alt="go" onClick={this.handleNewContact} /></td>
                                    </tr>
                                    <tr>
                                        <td>Hedpay Hedpay</td>
                                        <td>Hedpay@test.com</td>
                                        <td>3 registered accounts</td>
                                        <td>ScotiaBank</td>
                                        <td><img src={Go} width='18px' alt="go" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Stack spacing={2}>
                            <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                        </Stack>
                    </div>
                    :
                    <div className='contact_div' style={{ paddingBottom: "100px" }}>
                        <div className='row contact_step_line'>
                            <div className='col-md-6 col-sm-6 col-6 lines'>
                                <p className='line_title line_title_active' style={{ left:"-13%" }}>Contact information</p>
                                <p className={this.state.step>1?'line_title line_title_active':'line_title'} style={{ left:"50%" }}>Wallet information</p>
                            </div>
                            <div className='col-md-6 col-sm-6 col-6 lines'>
                                <p className={this.state.step>3?'line_title line_title_active':'line_title'} style={{ left:"84%" }}>Bank information</p>
                            </div>
                        </div>
                        <div className='row contact_step_line'>
                            <div className='col-md-6 col-sm-6 col-6 lines'>
                                <p className='line_dot active_dot'></p>
                                <div className={this.state.step>1?'first_line line_active':'first_line'}></div>
                                <p className={this.state.step>1?'line_dot active_dot':'line_dot'}></p>
                            </div>
                            <div className='col-md-6 col-sm-6 col-6 lines'>
                                <div className={this.state.step>3?'third_line line_active':'third_line'}></div>
                                <p className={this.state.step>3?'line_dot active_dot':'line_dot'}></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div style={{ width:'80%' }}>
                                    <p className='inputTitle'>First name *</p>
                                    <input className='inputStyle' type="text" name="firstName" placeholder='Enter your…' />
                                    <p className='inputTitle'>Last name *</p>
                                    <input className='inputStyle' type="text" name="lastName" placeholder='Enter your…' />
                                    <p className='inputTitle'>Email *</p>
                                    <input className='inputStyle' type="email" name="email" placeholder='Enter your…' />
                                    <div style={{width: "100%", marginTop:'22px'}}>
                                        <p className='inputTitle'>Cell phone number</p>
                                        <div>
                                            <PhoneInput
                                                country={'ca'}
                                                value={this.state.phone}
                                                onChange={phone => this.setState({ phone })}
                                            />
                                        </div>
                                    </div>
                                    <p className='inputTitle'>Send notification *</p>
                                    <Select options={options} className="selectTitle" />
                                    <p className='goBack go_message' onClick={ this.handleNewContact }>Go back</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div style={{ width:'80%', marginLeft:'auto', marginRight:'auto' }}>
                                    <div style={{ minHeight:'416px' }}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                            <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                            </svg>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Currency type</p>
                                        </div>
                                        <Dropdown style={{ marginRight:"0px" }}
                                            placeholder='Select Currency'
                                            fluid
                                            selection
                                            options={crypto_currency}
                                            defaultValue={this.state.selected}
                                        />
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'50px' }}>
                                            <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                            </svg>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Network</p>
                                        </div>
                                        <input className='inputStyle' type="text" name="wallet_address" placeholder='Enter your…' />
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'20px' }}>
                                            <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                            </svg>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Wallet Address</p>
                                        </div>
                                        <input className='inputStyle' type="text" name="network" placeholder='Enter your…' />
                                        {this.state.add_account===1?
                                        <div style={{ marginTop:'22px' }}>
                                            <div style={{ display:'flex', marginLeft:'26px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Currency type</p>
                                                <p style={{ marginLeft:'auto', color:'#2DCCD3', cursor:'pointer' }} onClick={ this.handleRemoveAccount }>&#215;&nbsp;&nbsp;Remove</p>
                                            </div>
                                            <Dropdown style={{ marginRight:"0px" }}
                                                placeholder='Select Currency'
                                                fluid
                                                selection
                                                options={crypto_currency}
                                                defaultValue={this.state.selected}
                                            />
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'50px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Network</p>
                                            </div>
                                            <input className='inputStyle' type="text" name="network" placeholder='Enter your…' />
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'20px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Wallet Address</p>
                                            </div>
                                            <input className='inputStyle' type="text" name="wallet_address" placeholder='Enter your…' />
                                        </div>
                                        :
                                        <div></div>
                                        }
                                        <p className='add_more' onClick={ this.handleAddAccount }>Add one more account</p>
                                    </div>
                                    <p className='skip_step'>Skip this step</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div style={{ width:'80%', marginLeft:'auto' }}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Bank account</p>
                                    </div>
                                    <Select options={bankOption} style={{ position:'relative', zIndex:'10' }} onChange={this.handleBank} />
                                    <div style={{ display:"flex", marginTop:'22px', position:'relative', zIndex:'1' }}>
                                        <div style={{width: "47.5%"}}>
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Country</p>
                                            </div>
                                            <CountrySelector />
                                        </div>
                                        <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Bank</p>
                                            </div>
                                            {this.state.selectedBank==='Internal'?
                                                <input className='inputStyle' defaultValue="Hedpay" type="text" name="nickName" placeholder='Enter your…' />
                                                :
                                                <input className='inputStyle' defaultValue="" type="text" name="nickName" placeholder='Enter your…' />
                                            }
                                        </div>
                                    </div>
                                    <div style={{ display:"flex", marginTop:'22px' }}>
                                        <div className={this.state.selectedBank==='SEPA'?'width100': this.state.selectedBank==='Internal'?'hide_div':'width47'}>
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>SWIFT/BIC Code</p>
                                            </div>
                                            <input className='inputStyle' type="text" name="swift" placeholder='Enter your…' />
                                        </div>
                                        <div className={this.state.selectedBank==='Internal' || this.state.selectedBank==='SEPA'?'hide_div':'none_hide'} style={{ width:"47.5%", marginLeft: "5%" }}>
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Routing</p>
                                            </div>
                                            <input className='inputStyle' type="text" name="routing" placeholder='Enter your…' />
                                        </div>
                                    </div>

                                    <div className={this.state.selectedBank==='Internal' || this.state.selectedBank==='SEPA'?'hide_div':'none_hide'} style={{ display:"flex", marginTop:'22px' }}>
                                        <div style={{width: "47.5%"}}>
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Bank Code</p>
                                            </div>
                                            <input className='inputStyle' type="text" name="swift" placeholder='Enter your…' />
                                        </div>
                                        <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                                </svg>
                                                <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Account Number</p>
                                            </div>
                                            <input className='inputStyle' type="text" name="routing" placeholder='Enter your…' />
                                        </div>
                                    </div>
                                    {this.state.selectedBank==="USA"?
                                        <div>
                                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>ABA</p>
                                            <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                        </div>
                                        :this.state.selectedBank==="SEPA"?
                                        <div>
                                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>IBAN</p>
                                            <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                        </div>
                                        :this.state.selectedBank==="Internal"?
                                        <div>
                                            <p className='loginTitle' style={{ color: "#002554" }}>UID</p>
                                            <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                        </div>
                                        :
                                        <div></div>
                                    }
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'22px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Currency</p>
                                    </div>
                                    <CurrencySelect bank={this.state.selectedBank}/>
                                    <p className='add_more'>Add one more account</p>
                                    <div className='row' style={{ marginTop:'35px' }}>
                                        <div className='col-md-5' style={{ paddingLeft:'0px' }}>
                                            <p className='skip_this_step'>Skip this step</p>
                                        </div>
                                        <div className='col-md-2'></div>
                                        <div className='col-md-5' style={{ paddingRight:'0px' }}>
                                            <button className='singInButton'>Create contact</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                </div>
                <div className='mobile_version_contact'>
                    {this.state.mobile_contact===0?
                    <div>
                        <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Mailbox</p>
                        <p onClick={ this.handleMobileContact } style={{ fontSize:'16px', color:'#2DCCD3', fontWeight:'600', textAlign:'right' }}>Add new contact</p>
                        <p style={{ marginTop:'30px', color:'#002554', fontSize:'16px', fontWeight:'600' }}>Show</p>
                        <div style={{ display:'flex' }}>
                            <select className='select_ele' name="pageItems">
                                <option value="6">4</option>
                                <option value="6">8</option>
                                <option value="6">12</option>
                                <option value="6">16</option>
                            </select>
                            <input style={{ marginLeft:'auto', width:'75%' }} type="search" name="search" className="search_input message_search" placeholder='Search' />
                        </div>
                        <div className='mobile_index_content topboder'>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Name</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay Hedpay</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Email</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay@test.com</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Registered wallet accounts</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>3</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Registered bank account</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>1</p>
                            </div>
                            <div style={{ textAlign:'right' }}>
                                <img src={Go} width='18px' alt="go" />
                            </div>
                        </div>
                        <div className='mobile_index_content'>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Name</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay Hedpay</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Email</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay@test.com</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Registered wallet accounts</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>3</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Registered bank account</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>1</p>
                            </div>
                            <div style={{ textAlign:'right' }}>
                                <img src={Go} width='18px' alt="go" />
                            </div>
                        </div>
                        <div className='mobile_index_content'>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Name</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay Hedpay</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Email</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay@test.com</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Registered wallet accounts</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>3</p>
                            </div>
                            <div style={{ display:'flex' }}>
                                <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Registered bank account</p>
                                <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>1</p>
                            </div>
                            <div style={{ textAlign:'right' }}>
                                <img src={Go} width='18px' alt="go" />
                            </div>
                        </div>
                        <div>
                            <Stack spacing={2}>
                                <Pagination count={1} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                            </Stack>
                        </div>
                    </div>
                    :
                    this.state.mobile_contact===1?
                    <div>
                        <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Contact information</p>
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p className='inputTitle'>First name *</p>
                            <input className='inputStyle' type="text" name="firstName" placeholder='Enter your…' />
                            <p className='inputTitle'>Last name *</p>
                            <input className='inputStyle' type="text" name="lastName" placeholder='Enter your…' />
                            <p className='inputTitle'>Email *</p>
                            <input className='inputStyle' type="email" name="email" placeholder='Enter your…' />
                            <div style={{width: "100%", marginTop:'22px'}}>
                                <p className='inputTitle'>Cell phone number</p>
                                <PhoneInput
                                    country={'ca'}
                                    value={this.state.phone}
                                    onChange={phone => this.setState({ phone })}
                                />
                            </div>
                            <p className='inputTitle'>Send notification *</p>
                            <Select options={options} className="selectTitle" />
                            <button onClick={ this.handleMobileContact } className='singInButton activeButton' style={{ marginTop:'40px' }}>Next step</button>
                            <p className='goBack go_message' style={{ textAlign:'center', marginTop:'50px' }} onClick={ this.handleMobileContactGoBack }>Go back</p>
                        </div>
                    </div>
                    :
                    this.state.mobile_contact===2?
                    <div>
                        <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Wallet information</p>
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <div style={{ minHeight:'305px' }}>
                                <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                    <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                        <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                    </svg>
                                    <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Currency type</p>
                                </div>
                                <Dropdown style={{ marginRight:"0px" }}
                                    placeholder='Select Currency'
                                    fluid
                                    selection
                                    options={crypto_currency}
                                    defaultValue={this.state.selected}
                                />
                                <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'50px' }}>
                                    <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                        <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                    </svg>
                                    <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Network</p>
                                </div>
                                <input className='inputStyle' type="text" name="wallet_address" placeholder='Enter your…' />
                                <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'20px' }}>
                                    <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                        <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                    </svg>
                                    <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Wallet Address</p>
                                </div>
                                <input className='inputStyle' type="text" name="network" placeholder='Enter your…' />
                                {this.state.add_account===1?
                                <div style={{ marginTop:'22px' }}>
                                    <div style={{ display:'flex', marginLeft:'26px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Currency type</p>
                                        <p style={{ marginLeft:'auto', color:'#2DCCD3', cursor:'pointer' }} onClick={ this.handleRemoveAccount }>&#215;&nbsp;&nbsp;Remove</p>
                                    </div>
                                    <Dropdown style={{ marginRight:"0px" }}
                                        placeholder='Select Currency'
                                        fluid
                                        selection
                                        options={crypto_currency}
                                        defaultValue={this.state.selected}
                                    />
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'50px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Network</p>
                                    </div>
                                    <input className='inputStyle' type="text" name="network" placeholder='Enter your…' />
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'20px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Wallet Address</p>
                                    </div>
                                    <input className='inputStyle' type="text" name="wallet_address" placeholder='Enter your…' />
                                </div>
                                :
                                <div></div>
                                }
                                <p className='add_more' onClick={ this.handleAddAccount }>Add one more account</p>
                            </div>
                            <button onClick={ this.handleMobileContact } className='singInButton activeButton' style={{ marginTop:'40px' }}>Next step</button>
                            <div style={{ display:'flex', marginTop:'50px' }}>
                                <p style={{ fontSize:'16px', color:'#002554', fontWeight:'600', cursor:'pointer' }} onClick={ this.handleMobileContactGoBack }>Go back</p>
                                <p style={{ fontSize:'16px', color:'#696B6C', cursor:'pointer', marginLeft:'auto' }}>Skip this step</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Bank information</p>
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                </svg>
                                <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Bank account</p>
                            </div>
                            <Select options={bankOption} style={{ position:'relative', zIndex:'10' }} onChange={this.handleBank} />
                            <div style={{ display:"flex", marginTop:'22px', position:'relative', zIndex:'1' }}>
                                <div style={{width: "47.5%"}}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Country</p>
                                    </div>
                                    <CountrySelector />
                                </div>
                                <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Bank</p>
                                    </div>
                                    {this.state.selectedBank==='Internal'?
                                        <input className='inputStyle' defaultValue="Hedpay" type="text" name="nickName" placeholder='Enter your…' />
                                        :
                                        <input className='inputStyle' defaultValue="" type="text" name="nickName" placeholder='Enter your…' />
                                    }
                                </div>
                            </div>
                            <div style={{ display:"flex", marginTop:'22px' }}>
                                <div className={this.state.selectedBank==='SEPA'?'width100': this.state.selectedBank==='Internal'?'hide_div':'width47'}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>SWIFT/BIC Code</p>
                                    </div>
                                    <input className='inputStyle' type="text" name="swift" placeholder='Enter your…' />
                                </div>
                                <div className={this.state.selectedBank==='Internal' || this.state.selectedBank==='SEPA'?'hide_div':'none_hide'} style={{ width:"47.5%", marginLeft: "5%" }}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Routing</p>
                                    </div>
                                    <input className='inputStyle' type="text" name="routing" placeholder='Enter your…' />
                                </div>
                            </div>

                            <div className={this.state.selectedBank==='Internal' || this.state.selectedBank==='SEPA'?'hide_div':'none_hide'} style={{ display:"flex", marginTop:'22px' }}>
                                <div style={{width: "47.5%"}}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Bank Code</p>
                                    </div>
                                    <input className='inputStyle' type="text" name="swift" placeholder='Enter your…' />
                                </div>
                                <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                    <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                        <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                            <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                        </svg>
                                        <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Account Number</p>
                                    </div>
                                    <input className='inputStyle' type="text" name="routing" placeholder='Enter your…' />
                                </div>
                            </div>
                            {this.state.selectedBank==="USA"?
                                <div>
                                    <p className='loginTitle mobile_version_title' style={{ marginTop:"25px", color: "#002554" }}>ABA</p>
                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                </div>
                                :this.state.selectedBank==="SEPA"?
                                <div>
                                    <p className='loginTitle mobile_version_title' style={{ marginTop:"25px", color: "#002554" }}>IBAN</p>
                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                </div>
                                :this.state.selectedBank==="Internal"?
                                <div>
                                    <p className='loginTitle mobile_version_title' style={{ color: "#002554" }}>UID</p>
                                    <input className='inputStyle' type="text" name="amount" placeholder='Enter your...' />
                                </div>
                                :
                                <div></div>
                            }
                            <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'22px' }}>
                                <svg style={{ marginTop:'6px' }} xmlns="http://www.w3.org/2000/svg" width="11.733" height="11.733" viewBox="0 0 11.733 11.733">
                                    <path id="FontAwsome_question-circle_" data-name="FontAwsome (question-circle)" d="M19.733,13.867A5.867,5.867,0,1,1,13.867,8,5.866,5.866,0,0,1,19.733,13.867ZM14.024,9.94a3.064,3.064,0,0,0-2.757,1.508.284.284,0,0,0,.064.385l.821.622a.284.284,0,0,0,.394-.05c.423-.536.712-.847,1.356-.847.483,0,1.081.311,1.081.78,0,.354-.292.536-.77.8-.556.312-1.293.7-1.293,1.672v.095a.284.284,0,0,0,.284.284h1.325a.284.284,0,0,0,.284-.284v-.032c0-.673,1.968-.7,1.968-2.523A2.7,2.7,0,0,0,14.024,9.94Zm-.157,5.867a1.088,1.088,0,1,0,1.088,1.088A1.089,1.089,0,0,0,13.867,15.806Z" transform="translate(-8 -8)" fill="#2dccd3"/>
                                </svg>
                                <p className='loginTitle mobile_version_title' style={{ color: "#002554", marginLeft:'5px' }}>Currency</p>
                            </div>
                            <CurrencySelect bank={this.state.selectedBank}/>
                            <p className='add_more'>Add one more account</p>
                            <button className='singInButton'>Create contact</button>
                            <div style={{ display:'flex', marginTop:'50px' }}>
                                <p style={{ fontSize:'16px', color:'#002554', fontWeight:'600', cursor:'pointer' }} onClick={ this.handleMobileContactGoBack }>Go back</p>
                                <p style={{ fontSize:'16px', color:'#696B6C', cursor:'pointer', marginLeft:'auto' }}>Skip this step</p>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(contact)