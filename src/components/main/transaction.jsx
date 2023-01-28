import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./transaction.css"
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select'
import question from "../../assets/images/quez.svg"
import visa from "../../assets/images/visa.svg"
import master from "../../assets/images/mastercard.svg"
import check from "../../assets/images/set.png"
import HDP from "../../assets/images/current/HDP@2x.png"
import BTC from "../../assets/images/current/BTC@2x.png"
import ETH from "../../assets/images/current/ETH@2x.png"
import USDT from "../../assets/images/current/USDT@2x.png"
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {Card} from 'react-card-number';
import CurrencySelect from "./components/currencySelect"
import {crypto_currency} from "./components/crypto_currency"
import exchange_icon from '../../assets/images/exchange_icon.png'
import 'antd/dist/antd.css';
import { Popconfirm } from 'antd';
import $ from "jquery";
import PrintComponentTransaction from "./PrintComponentTransaction.js";
import CountrySelector from './signup/limitedSignup/countrySelector';
import { Modal } from 'antd';
import QRCode from 'react-google-qrcode';

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class transaction extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedBank:'',
            visible: false,
            wallet_kind_icon:'',
            wallet_address:'',
            wallet_account:'',
            transfer:"funds",
            transfer_option:'',
            transfer_confirm:false,
            transfer_date:'',
            transfer_amount:0,
            transfer_rate: 0.9802,
            transfer_currency:'',
            transfer_currency_from:'',
            transfer_currency_to:'',
            transfer_from:'Wallet',
            transfer_to:'Wallet : 0*12345abc',
            transfer_message:'',
            transfer_email:'',
            transfer_contact:'',
            transfer_wallet:'',
            transfer_uid:'',
            transfer_wallet_net:''
        }
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else{
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
    handleTransfer = (key) =>{
        this.setState({ transfer:key, transfer_option:'', transfer_confirm: false, transfer_option:'', transfer_amount:0, transfer_email:'', transfer_message:'', transfer_date:'', transfer_currency_from:'', transfer_currency:'', visible: false });

    }
    navTo = (to) => {
        this.props.history.push("/" + to);
    }
    handleTransferOption = (event) =>{
        const today = new Date();
        const month = today.toLocaleString('default', { month: 'short' });
        const date = today.getDate();
        const year = today.getFullYear();
        this.setState({ transfer_option: event.value, transfer_date: `${month} ${date}, ${year}` });
    }
    handleConfirm = () =>{
        this.setState({ transfer_confirm: true })
    }
    handleCancel = () =>{
        this.setState({ transfer_confirm: false })
    }
    handleGoBackTransfer = () =>{
        this.setState({ transfer_confirm: false, transfer_option:'', transfer_amount:0, transfer_email:'', transfer_message:'', transfer_date:'', transfer_currency_from:'', transfer_currency:'' })
    }
    handlePrint =() =>{
        $(".print").trigger('click');
    }
    handleCurrentFrom = (event) =>{
        this.setState({ transfer_currency: $(event.target).text(), transfer_currency_from: $(event.target).text().split(" ")[0] });
        if($(event.target).text().split(" ")[0]!=="EUR" && $(event.target).text().split(" ")[0]!=="GBP" && $(event.target).text().split(" ")[0]!=="USD" && $(event.target).text().split(" ")[0]!=="CAD"){
            this.setState({ visible: true });
            this.setState({ wallet_kind_icon: $(event.target).text().split(" ")[0] });
        }
    }
    handleCurrentTo = (event) =>{
        this.setState({ transfer_currency_to: $(event.target).text().split(" ")[0] });
    }
    handleTransferAmount = (event) =>{
        this.setState({ transfer_amount: event.target.value });
    }
    handleWalletFrom = (event) =>{
        this.setState({ transfer_from: event.value });
    }
    handleWalletTo = (event) =>{
        this.setState({ transfer_to: event.value });
    }
    handleTransferMessage = (event) =>{
        this.setState({ transfer_message: event.target.value });
    }
    handleTransferEmail = (event) =>{
        this.setState({ transfer_email: event.target.value });
    }
    handleSendWallet = (event) =>{
        this.setState({ transfer_wallet:event.target.value });
    }
    handleWalletNet = (event) =>{
        this.setState({ transfer_wallet_net: event.value });
    }
    handleUid = (event) =>{
        this.setState({ transfer_uid:event.target.value });
    }
    handleContact = (event) =>{
        this.setState({ transfer_contact:event.target.value });
    }
    handleBank = (key) =>{
        this.setState({ selectedBank:key });
    }
    changeBank = () =>{
        this.setState({ selectedBank:'' });
    }
    handleOk = () => {
        this.setState({ visible: false, wallet_address:$(".wallet_address").text() });
      }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const transferOption = [
          { value: 'Transfer between Accounts', label: 'Transfer between Accounts' },
          { value: 'Transfer within Hedpay', label: 'Transfer within Hedpay' },
          { value: 'Transfer to external.', label: 'Transfer to external' }
        ]
        const sendFrom = [
            { value: 'Account', label: 'Account' },
            { value: 'Cardname1', label: 'Cardname1' },
            { value: 'Cardname2', label: 'Cardname2' },
            { value: 'Wallet', label: 'Wallet' }
        ]
        const sendTo = [
            { value: 'Account : H-ABC1234', label: 'Account : H-ABC1234' },
            { value: 'Cardname1', label: 'Cardname1' },
            { value: 'Cardname2', label: 'Cardname2' },
            { value: 'Wallet : 0*12345abc', label: 'Wallet : 0*12345abc' }
        ]
        const data=[
            {date:this.state.transfer_date},
            {quantity:this.state.transfer_amount*this.state.transfer_rate},
            {currency:this.state.transfer_currency_to},
            {type:this.state.transfer_option},
            {message:this.state.transfer_message},
            {email:this.state.transfer_email},
            {currency_from:this.state.transfer_currency_from},
            {amount: this.state.transfer_amount}
        ]
        const walletNetwork = [
            { value: 'ETH Network', label: 'ETH Network' },
            { value: 'BSC Network', label: 'BSC Network' }
        ]
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding transaction_div">
                {this.state.transfer==="funds"?
                <div className='row'>
                    <div className='col-md-4'>
                        <div style={{ display:'flex' }}>
                            <button className='add_funds_btn active_add_funds_btn' onClick={()=>this.handleTransfer("funds")}>↓ Add funds</button>
                            <button className='add_funds_btn transfer_btn' onClick={()=>this.handleTransfer("transfer")}>↑ Transfer</button>
                        </div>
                        <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Please choose *</p>
                        <Dropdown style={{ marginRight:"0px" }}
                            placeholder='Select Currency'
                            fluid
                            selection
                            options={crypto_currency}
                            onChange={this.handleCurrentFrom}
                        />
                        {this.state.transfer_currency_from===""?
                        <div>
                            <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Wallet Account *</p>
                            <input className='inputStyle' type="text" name="account" placeholder='Please Enter your...' />
                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Wallet address *</p>
                            <input className='inputStyle' type="text" name="wallet" placeholder='Please Enter your...' />
                        </div>
                        :
                        this.state.transfer_currency_from==="HDP" || this.state.transfer_currency_from==="BTC" || this.state.transfer_currency_from==="ETH" || this.state.transfer_currency_from==="USDT"?
                        <div>
                            <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Wallet address *</p>
                            <input className='inputStyle' value={this.state.wallet_address} type="text" name="wallet" placeholder='Please Enter your...' />
                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Wallet Network</p>
                            <Select options={walletNetwork} onChange={this.handleWalletNet} />
                        </div>
                        :
                        <div>
                            <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Wallet Account *</p>
                            <input className='inputStyle' value={this.state.wallet_account} type="text" name="wallet_account" placeholder='Please Enter your...' />
                        </div>
                        }
                        {this.state.transfer_currency_from==="HDP" || this.state.transfer_currency_from==="BTC" || this.state.transfer_currency_from==="ETH" || this.state.transfer_currency_from==="USDT"?
                        <div>
                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Amount *</p>
                            <input className='inputStyle' type="text" name="amount" placeholder='Please Enter your...' />
                        </div>
                        :
                        <div style={{ display:"flex" }}>
                            <div style={{ width:"50%" }}>
                                <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Currency type *</p>
                                <CurrencySelect />
                            </div>
                            <div style={{ width: "40%",marginLeft:"auto", marginTop:"-45px" }}>
                                <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Amount *</p>
                                <input className='inputStyle' type="text" name="amount" placeholder='Please Enter your...' />
                            </div>
                        </div>
                        }
                        <p style={{ color:"#999999", marginTop:"25px" }}><span>Price</span><span style={{ float:"right" }}>1 BTC = 48777.03 USD</span></p>
                        <p style={{ color:"#002554", marginTop:"10px" }}><span>Total price</span><span style={{ float:"right" }}>640 USD</span></p>
                        <p style={{ color:"#002554", marginTop:"10px" }}><span>Receive</span><span style={{ float:"right" }}>0.01344832 BTC</span></p>
                        <Popconfirm
                            title="Are you sure to submit this transaction?"
                            onConfirm={ this.handleConfirm }
                            onCancel={ this.handleCancel }
                            okText="Yes"
                            cancelText="No"
                        >
                            <button className='send_submit_btn'>Submit</button>
                        </Popconfirm>
                        <Modal
                            title="Wallet Address"
                            visible={this.state.visible}
                            okText="Copy"
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <div className='row'>
                                <div className='col-md-6'>
                                    <QRCode
                                        data="https://www.google.com"
                                        size={200}
                                        framed
                                    />
                                </div>
                                <div className='col-md-6' style={{ paddingLeft:'20px' }}>
                                    <div style={{ display:'flex' }}>
                                        <p className="modal_wallet_address_title">Address</p>
                                        {this.state.wallet_kind_icon==="HDP"?
                                        <img style={{ width:'41px', height:'28px' }} src={HDP} alt="HDP" />
                                        :
                                        this.state.wallet_kind_icon==="BTC"?
                                        <img style={{ width:'41px', height:'28px' }} src={BTC} alt="BTC" />
                                        :
                                        this.state.wallet_kind_icon==="ETH"?
                                        <img style={{ width:'41px', height:'28px' }} src={ETH} alt="ETH" />
                                        :
                                        this.state.wallet_kind_icon==="USDT"?
                                        <img style={{ width:'41px', height:'28px' }} src={USDT} alt="USDT" />
                                        :
                                        <div></div>
                                        }
                                    </div>
                                    <p className='wallet_address' style={{ marginTop:'30px' }}>0xAd05A6FfBb06312688Ed817281aEf9d7FAD71215</p>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className='col-md-4'>
                        {this.state.transfer_currency_from==="HDP" || this.state.transfer_currency_from==="BTC" || this.state.transfer_currency_from==="ETH" || this.state.transfer_currency_from==="USDT"?
                        <div>
                        </div>
                        :
                        <div>
                            <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Send to</p>
                            <input className='inputStyle' type="text" name="nickName" defaultValue="Hedpay Inc" placeholder='Enter...' />
                            <p className='loginTitle' style={{ marginTop:"21px", color: "#002554" }}>Reference to</p>
                            <input className='inputStyle' type="text" name="nickName" defaultValue="UID#: H-xyz1234" placeholder='Enter...' disabled />
                            {this.state.selectedBank===""?
                            <div>
                                <button onClick={()=>this.handleBank("International")} className='send_submit_btn'>International</button>
                                <button onClick={()=>this.handleBank("SEPA")} className='send_submit_btn'>SEPA</button>
                                <button onClick={()=>this.handleBank("USA")} className='send_submit_btn'>USA</button>
                                <button onClick={()=>this.handleBank("Card")} className='send_submit_btn'>Card</button>
                            </div>
                            :
                            this.state.selectedBank!=="Card"?
                            <div>
                                <div style={{ display:"flex", marginTop:'22px', position:'relative', zIndex:'1' }}>
                                    <div style={{width: "47.5%"}}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Country</p>
                                        </div>
                                        <CountrySelector />
                                    </div>
                                    <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Bank</p>
                                        </div>
                                        <input className='inputStyle' defaultValue="" type="text" name="nickName" placeholder='Enter your…' />
                                    </div>
                                </div>
                                <div style={{ display:"flex", marginTop:'22px' }}>
                                    <div className={this.state.selectedBank==='SEPA'?'width100': this.state.selectedBank==='Internal'?'hide_div':'width47'}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>SWIFT/BIC Code</p>
                                        </div>
                                        <input className='inputStyle' type="text" name="swift" placeholder='Enter your…' />
                                    </div>
                                    <div className={this.state.selectedBank==='SEPA'?'hide_div':'none_hide'} style={{ width:"47.5%", marginLeft: "5%" }}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Routing</p>
                                        </div>
                                        <input className='inputStyle' type="text" name="routing" placeholder='Enter your…' />
                                    </div>
                                </div>

                                <div className={this.state.selectedBank==='SEPA'?'hide_div':'none_hide'} style={{ display:"flex", marginTop:'22px' }}>
                                    <div style={{width: "47.5%"}}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
                                            <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Bank Code</p>
                                        </div>
                                        <input className='inputStyle' type="text" name="swift" placeholder='Enter your…' />
                                    </div>
                                    <div style={{ width:"47.5%", marginLeft: "5%" }}>
                                        <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px' }}>
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
                                    :
                                    <div></div>
                                }
                                <div style={{ display:'flex', marginLeft:'26px', paddingBottom:'16px', marginTop:'22px' }}>
                                    <p className='loginTitle' style={{ color: "#002554", marginLeft:'5px' }}>Currency</p>
                                </div>
                                <CurrencySelect bank={this.state.selectedBank}/>
                                <p className='change_bank' onClick={this.changeBank}>Change Bank</p>
                            </div>
                            :
                            <div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Card Name *</p>
                                <input className='inputStyle' type="text" name="nickName" placeholder='Enter name as it appears on card' />
                                <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Card Number *</p>
                                <Card
                                    maxLength={19}
                                    splitter=" "
                                    placeholder="0000 0000 0000 0000"
                                />
                                <div className='card_icon'>
                                    <img src={visa} alt="vias" style={{ position:"relative", left: "-10px" }} />
                                    <img src={master} alt="master" />
                                </div>
                                <div style={{ display:"flex", marginTop:"-20px" }}>
                                    <div style={{ width:"45%" }}>
                                        <p className='loginTitle' style={{ marginTop:"23px", color: "#002554" }}>Expiration date *</p>
                                        <input className='inputStyle' type="text" name="nickName" value="640" placeholder='Month / Year' />
                                    </div>
                                    <div style={{ width: "45%",marginLeft:"auto", marginTop:"-45px" }}>
                                        <p className='loginTitle' style={{ marginTop:"68px", color: "#002554" }}>Security code *</p>
                                        <input className='inputStyle' type="text" name="nickName" value="640" placeholder='3 digits' />
                                    </div>
                                </div>
                                <p className='change_bank' onClick={this.changeBank}>Change Bank</p>
                            </div>
                            }
                        </div>
                        }
                    </div>
                    <div className='col-md-4'>
                        {this.state.transfer_currency_from==="HDP" || this.state.transfer_currency_from==="BTC" || this.state.transfer_currency_from==="ETH" || this.state.transfer_currency_from==="USDT"?
                        <div></div>
                        :
                        <div className='funds_letter'>
                            <p style={{ fontSize:"18px", fontWeight:"600" }}>Other methods to add funds</p>
                            <p style={{ fontWeight:"500" }}>Bank wire transfer</p>
                            <p style={{ fontWeight:"500" }}><span><img src={question} alt="question" /> SEPA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src={question} alt="question" />International</span></p>
                            <p>Interac only canadian bank</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p>For more details visit <span onClick={()=>this.navTo('faqPage')} style={{ color:"#2DCCD3", cursor:"pointer" }}>FAQ</span></p>
                        </div>
                        }
                    </div>
                </div>
                :
                !this.state.transfer_confirm?
                    <div className='row'>
                        <div className='col-md-4'>
                            <button className='add_funds_btn' onClick={()=>this.handleTransfer("funds")}>↓ Add funds</button>
                            <button className='add_funds_btn transfer_btn active_add_funds_btn' onClick={()=>this.handleTransfer("transfer")}>↑ Transfer</button>
                            <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Transfer with</p>
                            <Select options={transferOption} onChange={this.handleTransferOption} />
                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Please choose *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select'
                                fluid
                                selection
                                options={crypto_currency}
                                onChange={this.handleCurrentFrom}
                            />
                            {this.state.transfer_option==="Transfer between Accounts"?
                                <div>
                                    <img className='exchange_icon' src={exchange_icon} alt="exchange_icon" />
                                    <p className='loginTitle' style={{ color: "#002554", position:'relative', top:'18px' }}>Please choose *</p>
                                    <Dropdown style={{ marginRight:"0px" }}
                                        placeholder='Select'
                                        fluid
                                        selection
                                        options={crypto_currency}
                                        onChange={this.handleCurrentTo}
                                    />
                                    <div style={{ display:'flex', width:'100%' }}>
                                        <div style={{ width:'46%' }}>
                                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Amount *</p>
                                            <input className='inputStyle' onChange={this.handleTransferAmount} type="text" name="amount" placeholder='Enter the amount' />
                                        </div>
                                        <div style={{ width:'46%', marginLeft:'auto' }}>
                                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Current Rate</p>
                                            <input className='inputStyle' value='0.9802' type="text" name="amount" placeholder='Enter the amount' disabled />
                                        </div>
                                    </div>
                                    <p className='loginTitle' style={{ marginTop:"15px", color: "#002554" }}>Send from my</p>
                                    <div style={{ position:'relative', zIndex:'2' }}>
                                        <Select options={sendFrom}  onChange={this.handleWalletFrom} />
                                    </div>
                                    <p className='loginTitle' style={{ marginTop:"20px", color: "#002554" }}>Send to my</p>
                                    <div style={{ position:'relative', zIndex:'1' }}>
                                        <Select options={sendTo} onChange={this.handleWalletTo} />
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Amount *</p>
                                    <input className='inputStyle' onChange={this.handleTransferAmount} type="text" name="amount" placeholder='Enter the amount' />
                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Send to Wallet</p>
                                    <input className='inputStyle' onChange={this.handleSendWallet} type="text" name="amount" placeholder='Enter ...' />
                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Wallet Network</p>
                                    <Select options={walletNetwork} onChange={this.handleWalletNet} />
                                    <p className='loginTitle' style={{ marginTop:"15px", color: "#002554" }}>Send to contact</p>
                                    <input className='inputStyle' onChange={this.handleContact} type="text" name="contact" placeholder='Enter your ...' />
                                    <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Or UID</p>
                                    <input className='inputStyle' onChange={this.handleUid} type="text" name="UID" placeholder='Enter the UID' />
                                </div>
                            }
                        </div>
                        <div className='col-md-4'>
                            {this.state.transfer_option!=="Transfer between Accounts"?
                                <div>
                                    <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Email *</p>
                                    <input className='inputStyle' onChange={this.handleTransferEmail} type="email" name="email" placeholder='Type the email' />
                                    <p className='loginTitle' style={{ marginTop:"24px", color: "#002554" }}>Message</p>
                                    <textarea name="message" onChange={this.handleTransferMessage} className='message_area' cols="30" rows="5"></textarea>
                                    <div className={this.state.transfer_option==="Transfer between Accounts"?'transfer_top':''}>
                                        <p style={{ marginTop:"40px", color: "#2DCCD3", fontWeight:'600', textAlign:'center', fontSize:'18px' }}>Transaction Information</p>
                                        {this.state.transfer_option===""?
                                            <div></div>
                                        :
                                            <p style={{ color:"#00253E", marginTop:"10px" }}><span>{this.state.transfer_option}</span><span style={{ float:"right" }}>Date: {this.state.transfer_date}</span></p>
                                        }
                                    </div>
                                    {this.state.transfer_wallet!==""?
                                        <p style={{ color:"#0066ff", marginTop:"10px" }}><span>{this.state.transfer_wallet}</span><span style={{ float:"right" }}>{this.state.transfer_amount} {this.state.transfer_currency_from}</span></p>
                                    :
                                        <p></p>
                                    }
                                    <p style={{ color:"#00253E", marginTop:"10px" }}><span>Email</span><span style={{ float:"right" }}>{this.state.transfer_email}</span></p>
                                    <p style={{ color:"#00253E", marginTop:"10px" }}><span>Message</span><span style={{ float:"right" }}>{this.state.transfer_message}</span></p>
                                    {this.state.transfer_wallet_net!==""?
                                        <p style={{ color:"#00253E", marginTop:"10px" }}><span>Wallet Network</span><span style={{ float:"right" }}>{this.state.transfer_wallet_net}</span></p>
                                    :
                                        <p></p>
                                    }
                                    {this.state.transfer_contact!==""?
                                        <p style={{ color:"#00253E", marginTop:"10px" }}><span>Send to contact</span><span style={{ float:"right" }}>{this.state.transfer_contact}</span></p>
                                    :
                                        <p></p>
                                    }
                                    {this.state.transfer_uid!==""?
                                        <p style={{ color:"#00253E", marginTop:"10px" }}><span>UID</span><span style={{ float:"right" }}>{this.state.transfer_uid}</span></p>
                                    :
                                        <p></p>
                                    }
                                </div>
                            :
                                <div>
                                    <div className={this.state.transfer_option==="Transfer between Accounts"?'transfer_top':''}>
                                        <p style={{ marginTop:"68px", color: "#2DCCD3", fontWeight:'600', textAlign:'center', fontSize:'18px' }}>Transaction Information</p>
                                        <p style={{ color:"#00253E", marginTop:"10px" }}><span>{this.state.transfer_option}</span><span style={{ float:"right" }}>Date: {this.state.transfer_date}</span></p>
                                    </div>
                                    <p style={{ color:"#ff0000", marginTop:"10px" }}><span>{this.state.transfer_from}</span><span style={{ float:"right" }}>{this.state.transfer_currency_from}. -{this.state.transfer_amount}</span></p>
                                    <p style={{ color:"#0066ff", marginTop:"10px" }}><span>{this.state.transfer_to}</span><span style={{ float:"right" }}>{this.state.transfer_currency_to}. +{this.state.transfer_amount * this.state.transfer_rate}</span></p>
                                    <p style={{ color:"#00253E", marginTop:"10px" }}><span>Current rate</span><span style={{ float:"right" }}>{this.state.transfer_rate}</span></p>
                                </div>
                            }
                            <p style={{ color:"#00253E", marginTop:"10px" }}><span>Currency</span><span style={{ float:"right" }}>{this.state.transfer_currency}</span></p>
                            <p style={{ color:"#00253E", marginTop:"10px" }}><span>Quantity</span><span style={{ float:"right" }}>{this.state.transfer_amount} {this.state.transfer_currency_from}</span></p>
                            <p style={{ color:"#00253E", marginTop:"10px" }}><span>Balance</span><span style={{ float:"right" }}>0.0000 {this.state.transfer_currency_from}</span></p>
                            <Popconfirm
                                title="Are you sure to submit this transaction?"
                                onConfirm={ this.handleConfirm }
                                onCancel={ this.handleCancel }
                                okText="Yes"
                                cancelText="No"
                            >
                                <button className='send_submit_btn'>Submit</button>
                            </Popconfirm>
                        </div>
                        <div className='col-md-4'>
                        </div>
                    </div>
                :
                    <div className='transfer_confirm'>
                        <img src={check} alt="check" />
                        <h1 style={{ color: "#2DCCD3" }}>Transfer confirmation</h1>
                        <div className='transfer_confirm_div1'>
                            <div className='transfer_confirm_div2 transfer_confirm_div2_borderTop'>
                                <div className='transfer_confirm_div3'>Confirmation number</div>
                                <div className='transfer_confirm_div4'>2165261578469832</div>
                            </div>
                            <div className='transfer_confirm_div2 transfer_confirm_div2_borderTop'>
                                <div className='transfer_confirm_div3'>Transaction Type</div>
                                <div className='transfer_confirm_div4'>{this.state.transfer_option}</div>
                            </div>
                            <div className='transfer_confirm_div2'>
                                <div className='transfer_confirm_div3'>Date of transfer</div>
                                <div className='transfer_confirm_div4'>{this.state.transfer_date}</div>
                            </div>
                            <div className='transfer_confirm_div2'>
                                <div className='transfer_confirm_div3'>Quantity</div>
                                {this.state.transfer_option==="Transfer between Accounts"?
                                    <div className='transfer_confirm_div4'>{this.state.transfer_amount * this.state.transfer_rate} {this.state.transfer_currency_to}</div>
                                :
                                    <div className='transfer_confirm_div4'>{this.state.transfer_amount} {this.state.transfer_currency_from}</div>
                                }
                            </div>
                            <div className='transfer_confirm_div2'>
                                <div className='transfer_confirm_div3'>Balance</div>
                                <div className='transfer_confirm_div4'>710.0000 Hdp.ф</div>
                            </div>
                            {this.state.transfer_option==="Transfer between Accounts"?
                            <div></div>
                            :
                            <div className='transfer_confirm_div2'>
                                <div className='transfer_confirm_div3'>Recipient’s email</div>
                                <div className='transfer_confirm_div4'>{this.state.transfer_email}</div>
                            </div>
                            }
                            <div className='transfer_confirm_div2'>
                                <div className='transfer_confirm_div3'>Sent to wallet address</div>
                                <div className='transfer_confirm_div4'>HDP0xb6CE559DC67268b8c4317577346566788347823479436384834349</div>
                            </div>
                            {this.state.transfer_wallet_net!==""?
                                <div className='transfer_confirm_div2'>
                                    <div className='transfer_confirm_div3'>Wallet Network</div>
                                    <div className='transfer_confirm_div4'>{this.state.transfer_wallet_net}</div>
                                </div>
                            :
                                <div></div>
                            }
                            {this.state.transfer_contact!==""?
                                <div className='transfer_confirm_div2'>
                                    <div className='transfer_confirm_div3'>Send to contact</div>
                                    <div className='transfer_confirm_div4'>{this.state.transfer_contact}</div>
                                </div>
                            :
                                <div></div>
                            }
                            {this.state.transfer_uid!==""?
                                <div className='transfer_confirm_div2'>
                                    <div className='transfer_confirm_div3'>UID</div>
                                    <div className='transfer_confirm_div4'>{this.state.transfer_uid}</div>
                                </div>
                            :
                                <div></div>
                            }
                            {this.state.transfer_option==="Transfer between Accounts"?
                            <div></div>
                            :
                            <div className='transfer_confirm_div2'>
                                <div className='transfer_confirm_div3'>Message</div>
                                <div className='transfer_confirm_div4'>{this.state.transfer_message}</div>
                            </div>
                            }
                        </div>
                        <div style={{ display:'none' }}>
                            <PrintComponentTransaction datas={data} />
                        </div>
                        <p onClick={ this.handleGoBackTransfer } style={{ fontSize:'16px', color:'#002554', cursor:'pointer', marginTop:'40px' }}>Go back</p>
                        <button onClick={this.handlePrint} className='mobile_mail_send_btn'>Save &nbsp;&nbsp;&nbsp;
                            <svg width="17" height="17" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16602 1.66669H19.4041V16.8667H21.666V20C21.666 21.841 20.1736 23.3334 18.3327 23.3334H6.88427C5.38302 23.3334 4.16602 22.1163 4.16602 20.6151V1.66669ZM9.33701 21.6667H18.3327C19.2532 21.6667 19.9993 20.9205 19.9993 20V18.5334H9.60252V20.1C9.60252 20.672 9.51901 21.203 9.33701 21.6667ZM6.88427 21.6667C7.239 21.6667 7.45908 21.5503 7.60792 21.3698C7.77442 21.1679 7.93586 20.781 7.93586 20.1V16.8667H17.7374V3.33335H5.83268V20.6151C5.83268 21.1959 6.30349 21.6667 6.88427 21.6667ZM16.3089 6.53335H7.26125V4.86669H16.3089V6.53335ZM16.3089 10.5334H7.26125V8.86669H16.3089V10.5334ZM16.3089 14.5334H7.26125V12.8667H16.3089V14.5334Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                }
                <div className='operation_div' style={{ marginTop:"90px" }}>
                    <p className='page_title' style={{ fontSize:"16px" }}>Operations history</p>
                    <div className='show_and_search'>
                    <div className='selected_div'>
                        <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                        <select className='select_ele' name="pageItems">
                        <option value="6">6</option>
                        <option value="6">12</option>
                        <option value="6">18</option>
                        <option value="6">24</option>
                        </select>
                    </div>
                    <input type="search" style={{ marginTop:'-38px' }} name="search" className="search_input" placeholder='Search' />
                    </div>
                    <div className='table_responsive'>
                    <table className='table text-center'>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Deposit</th>
                            <th>Coin/token</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>05/05/2022</td>
                            <td>900</td>
                            <td>HDP.Ф</td>
                            <td></td>
                            <td></td>
                            <td>HDP.Ф</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <Stack spacing={2}>
                        <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                    </Stack>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(transaction)