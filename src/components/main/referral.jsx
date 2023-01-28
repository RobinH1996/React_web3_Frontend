import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import "./referral.css"
import hedpay_phone from "../../assets/images/hedpay_phone1.png"
import Groupe_8286 from "../../assets/images/Groupe_8286.png"
import Groupe_8288 from "../../assets/images/Groupe_8288.png"
import Groupe_8290 from "../../assets/images/Groupe_8290.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class referral extends Component {
    constructor(props){
        super(props);
        this.state = {
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

    render() {
        return (
            <div style={{ marginTop: "170px", }}>
                <div className='row referral_div'>
                    <div className='col-md-6'>
                        <p style={{ fontSize:'30px', color:'#002554', fontWeight:'bold' }}>Referral System</p>
                        <p style={{ color:'#002554', fontSize:'16px' }}>Each referral receives 10 Hdp as a new user for the fact of registration on Hedpay. Each referrer receives 5% in Hdp tokens from each purchase of the referral.</p>
                    </div>
                    <div className='col-md-6'>
                        <img src={hedpay_phone} alt="hedpay_phone" style={{ width:"88%" }} />
                    </div>
                </div>
                <div className='referral_link_div'>
                    <div className='row referral_link'>
                        <div className='col-md-6'>
                            <p className='loginTitle' style={{ color: "#002554", fontSize:'16px' }}>You Referral Link</p>
                            <div style={{ float:'left', width:'100%' }}>
                                <input className='inputStyle' style={{ width:'70%', height:'40px' }} type="text" name="amount" defaultValue='main.hedpay.com/?ref=7fbdz67a6a8b4f88' placeholder='Enter...' />
                                <button className='singInButton activeButton' style={{ width:'30%', height:'40px' }}>Copy</button>
                            </div>
                            <p className='loginTitle' style={{ marginTop:"60px", color: "#2DCCD3", fontSize:'16px', cursor:'pointer' }}>Create personalized link</p>
                        </div>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-md-4 text-center'>
                                    <p style={{ fontSize:'30px', color:'#002554', fontWeight:'700', marginBottom:'15px' }}>8</p>
                                    <p style={{ fontSize:'16px', color:'#002554', fontWeight:'500' }}>Personal invites sent</p>
                                </div>
                                <div className='col-md-4 text-center'>
                                    <p style={{ fontSize:'30px', color:'#002554', fontWeight:'700', marginBottom:'15px' }}>20</p>
                                    <p style={{ fontSize:'16px', color:'#002554', fontWeight:'500' }}>My referrals</p>
                                </div>
                                <div className='col-md-4 text-center'>
                                    <p style={{ fontSize:'30px', color:'#002554', fontWeight:'700', marginBottom:'15px' }}>200 Hdp.ф</p>
                                    <p style={{ fontSize:'16px', color:'#002554', fontWeight:'500' }}>My bonuses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row text-center referral_link playing_div'>
                    <p style={{ color:'#002554', fontSize:'24px', fontWeight:'600', paddingBottom:'55px' }}>Playing is easy</p>
                    <div className='col-md-4'>
                        <img src={Groupe_8286} alt="Groupe_8286" />
                        <p style={{ color:'#002554', fontSize:'18px', fontWeight:'600', marginTop:'20px' }}>Invite friends</p>
                        <p style={{ color:'#696B6C', fontSize:'16px' }}>Invite your friends via<br/> email or social media</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={Groupe_8288} alt="Groupe_8288" />
                        <p style={{ color:'#002554', fontSize:'18px', fontWeight:'600', marginTop:'20px' }}>Invite friends</p>
                        <p style={{ color:'#696B6C', fontSize:'16px' }}>Invite your friends via<br/> email or social media</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={Groupe_8290} alt="Groupe_8290" />
                        <p style={{ color:'#002554', fontSize:'18px', fontWeight:'600', marginTop:'20px' }}>Invite friends</p>
                        <p style={{ color:'#696B6C', fontSize:'16px' }}>Invite your friends via<br/> email or social media</p>
                    </div>
                </div>
                <div className='referral_link_div' style={{ marginTop:'65px', paddingBottom:'60px' }}>
                    <div className='row referral_link'>
                        <div className='col-md-5'>
                            <div className='mobile_referral' style={{ width:'80%' }}>
                                <p style={{ fontSize:'24px', fontWeight:'700', color:'#002554' }}>Invite Your Friends</p>
                                <div style={{ display:"flex", marginTop:"-20px" }}>
                                    <div style={{ width:"45%" }}>
                                        <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>First name *</p>
                                        <input className='inputStyle' type="text" name="first_Name" defaultValue='Hedpay' placeholder='Enter ...' />
                                    </div>
                                    <div style={{ width: "45%",marginLeft:"auto", marginTop:"-45px" }}>
                                        <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Last name *</p>
                                        <input className='inputStyle' type="text" name="last_Name" defaultValue='Hedpay' placeholder='Enter ...' />
                                    </div>
                                </div>
                                <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Email *</p>
                                <input className='inputStyle' type="text" defaultValue='Hedpay@test.com' placeholder='Enter ...' />
                                <p className='loginTitle' style={{ marginTop:"21px", color: "#002554" }}>Type in a message</p>
                                <textarea name="message" placeholder='Enter your…' className='message_area' cols="30" rows="7"></textarea>
                                <button className='singInButton activeButton' style={{ marginTop:'29px' }}>Send</button>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='web_last_invitation' style={{ paddingBottom: "100px" }}>
                                <p className='page_title'  style={{ fontSize:'24px', fontWeight:'700', color:'#002554' }}>Last invitations</p>
                                <div className='web_version_invitation'>
                                    <div className='show_and_search' style={{ marginTop:"30px" }}>
                                        <div className='selected_div'>
                                            <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                                            <select className='select_ele' style={{ width:'100px' }} name="pageItems">
                                                <option value="1">Accepted</option>
                                                <option value="0">Referred</option>
                                            </select>
                                        </div>
                                        <input type="search" style={{ marginTop:'-38px' }} name="search" className="search_input" placeholder='Search' />
                                    </div>
                                    <div className='table_responsive'>
                                        <table className='table text-left'>
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>First name</th>
                                                    <th>Last name</th>
                                                    <th>Email</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>05/05/2022</td>
                                                    <td>Hedpay</td>
                                                    <td>Hedpay</td>
                                                    <td>Hedpay@test.com</td>
                                                    <td className='accepted_referral'>Accepted</td>
                                                </tr>
                                                <tr>
                                                    <td>05/05/2022</td>
                                                    <td>hedpaytest</td>
                                                    <td>test</td>
                                                    <td>hedpaytest@test.com</td>
                                                    <td>Referred</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <Stack spacing={2}>
                                    <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                                </Stack>
                            </div>
                            <div className='mobile_last_invitation'>
                                <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'left' }}>Last invitations</p>
                                <p style={{ marginTop:'30px', color:'#002554', fontSize:'16px', fontWeight:'600' }}>Show</p>
                                <select className='select_ele' style={{ width:"100%", textAlign:'left', paddingLeft:'18px' }} name="pageItems">
                                    <option value="1">Accepted</option>
                                    <option value="0">Referred</option>
                                </select>
                                <input style={{ width:'100%', marginTop:'15px' }} type="search" name="search" className="search_input message_search" placeholder='Search' />
                                <div className='mobile_index_content topboder' style={{ marginTop:'70px' }}>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Date</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>05/05/2022</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>First name</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Last name</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Email</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay@test.com</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Status</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Accepted</p>
                                    </div>
                                </div>
                                <div className='mobile_index_content'>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Date</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>05/05/2022</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>First name</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Last name</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Email</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Hedpay@test.com</p>
                                    </div>
                                    <div style={{ display:'flex' }}>
                                        <p style={{ fontSize:'16px', fontWeight:'600', fontColor:'#002554' }}>Status</p>
                                        <p style={{ marginLeft:"auto", fontSize:'16px', fontColor:'#002554' }}>Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(referral)