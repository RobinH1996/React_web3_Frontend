import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import {crypto_currency} from "./components/crypto_currency"
import './setting.css'
import check from "../../assets/images/check.png"
import eye from "../../assets/images/eye.png"
import HDP from "../../assets/images/HDP.png"
import BTC from "../../assets/images/BTC.png"
import ETH from "../../assets/images/ETH.png"
import USDT from "../../assets/images/USDT.png"
import USD from "../../assets/images/USD.png"
import EUR from "../../assets/images/EUR.png"
import GBP from "../../assets/images/GBP.png"
import CAD from "../../assets/images/CAD.png"
import small_lock from "../../assets/images/small_lock.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class setting extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSettingBar: 'one',
            selected:[
                {
                    key: 'HDP - Hdp.ф',
                    text: 'HDP - Hdp.ф',
                    value: 'HDP - Hdp.ф',
                    image: { avatar: true, src: "currency/HDP.png" },
                }
            ],
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
    handleSelectedBar = (key) =>{
        this.setState({ selectedSettingBar:key })
    }

    render() {
        return (
            <div className="profile_div">
                <div className='row web_version_setting'>
                    <div className='col-md-3 left_shadow' style={{ paddingLeft: "0px" }}>
                        <div className='profile_left_div'>
                            <p className='left_div_title'>Settings</p>
                            <div className='left_bar_ele' style={{ marginTop:"75px" }}>
                                <img className='left_bar_img' src={check} width="36px" height="36px" alt="check" />
                                <p className={this.state.selectedSettingBar==="one"?'left_bar_text selelected_under_bar':"left_bar_text"} onClick={()=>this.handleSelectedBar("one")}>Default currency</p>
                            </div>
                            <div className='left_bar_ele'>
                                <img className='left_bar_img' src={eye} width="36px" height="36px" alt="eye" />
                                <p className={this.state.selectedSettingBar==="two"?'left_bar_text selelected_under_bar':"left_bar_text"} onClick={()=>this.handleSelectedBar("two")}>Visible accounts</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-9'>
                    {this.state.selectedSettingBar==="one"?
                        <div className='setting_right_div'>
                            <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Default conversion currency *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <button className='singInButton activeButton' style={{ marginTop:'95px' }} >Save</button>
                        </div>
                        :
                        <div className='setting_right_div'>
                            <p style={{ color:'#002554', fontSize:'16px', fontWeight:'600' }}>Select the accounts you want to be visible on your dashboard.</p>
                            <p style={{ paddingLeft:'10px', marginTop:'50px', fontWeight:'600' }}>1 <img src={small_lock} style={{ marginLeft:'50px' }} alt="small_lock" width="13px" height="13px" /> <img src={HDP} style={{ marginLeft:'30px' }} alt="HDP" /> &nbsp;&nbsp;&nbsp; HDP - Hdp.ф </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>2 <input type="checkbox" name="check" style={{ marginLeft:'50px' }} defaultChecked /> <img src={BTC} style={{ marginLeft:'30px' }} alt="BTC" /> &nbsp;&nbsp;&nbsp; BTC - Bitcoin </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>3 <input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={ETH} style={{ marginLeft:'30px' }} alt="ETH" /> &nbsp;&nbsp;&nbsp; ETH - Ethereum </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>4 <input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={USDT} style={{ marginLeft:'30px' }} alt="USDT" /> &nbsp;&nbsp;&nbsp; USDT - Tether </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>5 <img src={small_lock} style={{ marginLeft:'50px' }} alt="small_lock" width="13px" height="13px" /><img src={USD} style={{ marginLeft:'30px' }} alt="USD" /> &nbsp;&nbsp;&nbsp; USD - Dollar </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>6 <input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={EUR} style={{ marginLeft:'30px' }} alt="EUR" /> &nbsp;&nbsp;&nbsp; EUR - Euro </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>7 <input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={GBP} style={{ marginLeft:'30px' }} alt="GBP" /> &nbsp;&nbsp;&nbsp; GBP - British Pound </p>
                            <p style={{ paddingLeft:'10px', marginTop:'30px', fontWeight:'600' }}>8 <input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={CAD} style={{ marginLeft:'30px' }} alt="CAD" /> &nbsp;&nbsp;&nbsp; CAD - Canadian Dollar </p>
                            <button className='singInButton activeButton' style={{ marginTop:'45px' }} >Save</button>
                        </div>
                    }
                    </div>
                </div>
                <div className='mobile_version_setting'>
                    <div style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}>
                        <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center', marginBottom:'0px', marginTop:'50px' }}>Settings</p>
                    </div>
                    <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Default conversion currency *</p>
                    <Dropdown style={{ marginRight:"0px" }}
                        placeholder='Select'
                        fluid
                        selection
                        options={crypto_currency}
                        defaultValue={this.state.selected}
                    />
                    <p style={{ color:'#002554', fontSize:'16px', fontWeight:'600', textAlign:'center', marginTop:'120px' }}>Select the accounts you want to be visible on your dashboard.</p>
                    <div>
                        <p style={{ paddingLeft:'20px', marginTop:'50px', fontWeight:'600' }}><img src={small_lock} style={{ marginLeft:'50px' }} alt="small_lock" width="13px" height="13px" /> <img src={HDP} style={{ marginLeft:'30px' }} alt="HDP" /> &nbsp;&nbsp;&nbsp; HDP - Hdp.ф </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><input type="checkbox" name="check" style={{ marginLeft:'50px' }} defaultChecked /> <img src={BTC} style={{ marginLeft:'30px' }} alt="BTC" /> &nbsp;&nbsp;&nbsp; BTC - Bitcoin </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={ETH} style={{ marginLeft:'30px' }} alt="ETH" /> &nbsp;&nbsp;&nbsp; ETH - Ethereum </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={USDT} style={{ marginLeft:'30px' }} alt="USDT" /> &nbsp;&nbsp;&nbsp; USDT - Tether </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><img src={small_lock} style={{ marginLeft:'50px' }} alt="small_lock" width="13px" height="13px" /><img src={USD} style={{ marginLeft:'30px' }} alt="USD" /> &nbsp;&nbsp;&nbsp; USD - Dollar </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={EUR} style={{ marginLeft:'30px' }} alt="EUR" /> &nbsp;&nbsp;&nbsp; EUR - Euro </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={GBP} style={{ marginLeft:'30px' }} alt="GBP" /> &nbsp;&nbsp;&nbsp; GBP - British Pound </p>
                        <p style={{ paddingLeft:'20px', marginTop:'30px', fontWeight:'600' }}><input type="checkbox" name="check" style={{ marginLeft:'50px' }} /> <img src={CAD} style={{ marginLeft:'30px' }} alt="CAD" /> &nbsp;&nbsp;&nbsp; CAD - Canadian Dollar </p>
                        <button className='singInButton activeButton' style={{ marginTop:'45px' }} >Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(setting);