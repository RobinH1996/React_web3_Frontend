import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class signUpDash extends Component {
    constructor(props){
        super(props);
        this.state = {
            more_detail:0
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleMoreDetail = (key) =>{
        this.setState({ more_detail: key })
    }
    handleMoreDetailBack = () =>{
        this.setState({ more_detail: 0 })
    }
    render() {
        return (
            <div style={{ marginTop: "100px" }}>
                <div className='web_signUp_dash'>
                    <div className='signUp row footer_padding'>
                        <p className='accOption'>Account Options</p>
                        <div className='col-md-3 col-sm-3 allUSDDIV' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                            <p className='allUSD' style={{ paddingLeft:'20px' }}>All USD$ equivelant</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Number of Trades per Day</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Daily Total Trades Limit</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Monthly Total Trades Limit</p><br />
                            <p className='number' style={{ paddingLeft:'20px' }}>Number of Wihdrawals per Day</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Daily Total Wihdrawals Limit</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Monthly Total Wihdrawals Limit</p><br />
                            <p className='number' style={{ paddingLeft:'20px' }}>Transactions With in Hedpay</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Incoming Deposits</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Wallet Capacity</p>
                            <p className='number' style={{ paddingLeft:'20px' }}>Maximum Staking Amount</p>
                        </div>
                        <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                            <div className='signUpDash'>
                                <p className='limited'>LIMITED</p>
                                <div className='borderLine'></div>
                                <p className='number non_border_bottom' style={{ marginTop:"10px" }}>KYC is required</p>
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
                                <button className='nextStep'><Link to="limitedSignUp" className='nextLink'><span>Next step</span></Link></button>
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
                                <button className='nextStep'><Link to="standardSignUp" className='nextLink'><span>Next step</span></Link></button>
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
                                <button className='nextStep'><Link to="proSignUpNote" className='nextLink'><span>Next step</span></Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile_signUp_dash'>
                    {this.state.more_detail===0?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <div className='mobile_account_title' style={{ border:'0px' }}>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>Account Options</p>
                            </div>
                            <div style={{ width:'90%', marginTop:'35px', marginLeft:'auto', marginRight:'auto', paddingTop:'30px', paddingBottom:'40px', backgroundColor:'#FAFCFF', textAlign:'center', border:'1px solid #DBE3EB' }}>
                                <p className='mobile_linited_title' style={{ color:'#002554' }}>Limited account</p>
                                <p style={{ color:'#435469', fontSize:'18px', fontWeight:'600', marginTop:'30px' }}>KYC is required</p>
                                <p onClick={ ()=>this.handleMoreDetail(1) } style={{ color:'#2DCCD3', fontSize:'18px', fontWeight:'600', marginTop:'70px' }}>See more details</p>
                            </div>
                            <div style={{ width:'90%', marginTop:'25px', marginLeft:'auto', marginRight:'auto', paddingTop:'30px', paddingBottom:'40px', backgroundColor:'#FAFCFF', textAlign:'center', border:'1px solid #DBE3EB' }}>
                                <p className='mobile_linited_title' style={{ color:'#002554' }}>Standard account</p>
                                <p style={{ color:'#435469', fontSize:'18px', fontWeight:'600', marginTop:'30px' }}>Basic KYC screening required</p>
                                <p onClick={ ()=>this.handleMoreDetail(2) } style={{ color:'#2DCCD3', fontSize:'18px', fontWeight:'600', marginTop:'70px' }}>See more details</p>
                            </div>
                            <div style={{ width:'90%', marginTop:'25px', marginLeft:'auto', marginRight:'auto', paddingTop:'30px', paddingBottom:'40px', backgroundColor:'#FAFCFF', textAlign:'center', border:'1px solid #DBE3EB' }}>
                                <p className='mobile_linited_title' style={{ color:'#002554' }}>Pro account</p>
                                <p style={{ color:'#435469', fontSize:'18px', fontWeight:'600', marginTop:'30px' }}>KYC Level 2 screening required</p>
                                <p onClick={ ()=>this.handleMoreDetail(3) } style={{ color:'#2DCCD3', fontSize:'18px', fontWeight:'600', marginTop:'70px' }}>See more details</p>
                            </div>
                        </div>
                    :
                    this.state.more_detail===1?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p  onClick={this.handleMoreDetailBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title' style={{ width:'fit-content' }}>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>Limited account</p>
                            </div>
                            <p style={{ fontSize:'18px', color:'#002554', fontWeight:'600', textAlign:'center', marginTop:'35px' }}>No KYC is required</p>
                            <div className='mobile_account_div' style={{ marginTop:'35px' }}>
                                <p style={{ color:'#696B6C' }}>Number of Trades per Day</p>
                                <p style={{ color:'#002554' }}>3</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Daily Total Trades Limit</p>
                                <p style={{ color:'#002554' }}>$500.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Monthly Total Trades Limit</p>
                                <p style={{ color:'#002554' }}>$5,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Number of Wihdrawals per Day</p>
                                <p style={{ color:'#002554' }}>3</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Daily Total Wihdrawals Limit</p>
                                <p style={{ color:'#002554' }}>$300.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Monthly Total Wihdrawals Limit</p>
                                <p style={{ color:'#002554' }}>$2,500.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Transactions With in Hedpay</p>
                                <p style={{ color:'#002554' }}>50</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Incoming Deposits</p>
                                <p style={{ color:'#002554' }}>$500.00</p>
                            </div>
                            <div className='mobile_account_div'>
                                <p style={{ color:'#696B6C' }}>Wallet Capacity</p>
                                <p style={{ color:'#002554' }}>$10,000.00</p>
                            </div>
                            <div className='mobile_account_div mobile_account_white_div'>
                                <p style={{ color:'#696B6C' }}>Maximum Staking Amount</p>
                                <p style={{ color:'#002554' }}>$100,000.00</p>
                            </div>
                            <button className='singInButton activeButton' ><Link to="limitedSignUp" className='nextLink'><span>Next step</span></Link></button>
                        </div>
                    :
                    this.state.more_detail===2?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p  onClick={this.handleMoreDetailBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title' style={{ width:'fit-content' }}>
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
                            <button className='singInButton activeButton' ><Link to="standardSignUp" className='nextLink'><span>Next step</span></Link></button>
                        </div>
                    :
                    this.state.more_detail===3?
                        <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                            <p  onClick={this.handleMoreDetailBack} style={{ textAlign:'center', fontSize:'16px', color:'#002554', cursor:'pointer' }}>Go back</p>
                            <div className='mobile_account_title' style={{ width:'fit-content' }}>
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
                            <button className='singInButton activeButton' ><Link to="proSignUpNote" className='nextLink'><span>Next step</span></Link></button>
                        </div>
                    :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default signUpDash;