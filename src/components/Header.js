import React from 'react';
import { connect } from 'react-redux'
import './global.css';
import "./main/home.css";
import logo from '../assets/images/logo-hedpay-header-top.svg';
import { SET_AUTH } from '../constants/actionTypes';
import phone from "../assets/images/phone@2x.png"
import envelope from "../assets/images/FontAwsome(envelope)@2x.png"
import people from "../assets/images/people@2x.png"
import share from "../assets/images/share@2x.png"
import avatar from "../assets/images/Ellipse25@2x.png"
import sun from "../assets/images/sun.png"
import home from "../assets/images/home@2x.png"
import wallet2 from "../assets/images/wallet2@2x.png"
import transfer from "../assets/images/bx-transfer-alt@2x.png"
import signpost from "../assets/images/signpost-split@2x.png"
import credit from "../assets/images/credit-card-2-back@2x.png"
import Groupe8395 from "../assets/images/Groupe8395@2x.png"
import question from "../assets/images/question-square@2x.png"
import sliders from "../assets/images/sliders.png"
import person from "../assets/images/person.png"
import window from "../assets/images/window.png"
import logout from "../assets/images/logout.png"
import Arrow from "../assets/images/mobile_arrow.png"
import Dropdown from 'react-bootstrap/Dropdown';
import $ from "jquery"

const LoggedOutView = props => {
  
  
  const openRightMenu = () => {
    document.getElementById("rightMenu").style.display = "block";
  }

  const closeRightMenu = () => {
    document.getElementById("rightMenu").style.display = "none";
  }

  const navTo = (to) => {
    this.closeRightMenu();
    props.history.push("/" + to);
  }
  const handleOpenSignUp = (to) =>{
    $(".signBtn").removeClass("open_signBtn");
    $(".signUpBtn").addClass("open_signBtn");
    props.history.push("/" + to);
  }
  const handleOpenSignIn = (to) =>{
    $(".signBtn").removeClass("open_signBtn");
    $(".logInBtn").addClass("open_signBtn");
    props.history.push("/" + to);
  }

  if (!props.userName) {
    return (
    <div className="outer_container" style={{position: 'fixed', top: '0px', zIndex: '1000'}}>
      <div className="main_container">
        <div className="header_container">
          <div className='navHead'>
            <div onClick={()=>navTo("")} className="header_logo" style={{ marginTop:'6px' }}><img alt="img"src={logo} width="100%"/></div>
            <div className='signButton'>
              <div className="header_nav signBtn signUpBtn" onClick={()=>handleOpenSignUp("signUpDash")} >Open an account</div>
              <div onClick={()=>handleOpenSignIn("logIn")} className="header_nav signBtn logInBtn open_signBtn">Sign In</div>
            </div>
          </div>
  
          <button className="w3-button w3-xxlarge w3-right tablet_btn" onClick={openRightMenu} style={{ marginTop:"-45px", height:'50px' }}><span style={{ position:'relative', top:'-14px' }}>&#9776;</span></button>
          <div className="w3-sidebar w3-bar-block w3-card w3-animate-right menuBG" style={{display:'none', right:0, position: 'absolute', top: '0px'}} id="rightMenu">
            <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large" style={{ textAlign:'center', backgroundColor:'#fff' }}>
              <img src={Arrow} alt="arrow" width="20px" />
            </button>
            <a className="w3-bar-item w3-button w3-large" onClick={()=>handleOpenSignIn("logIn")}>Sign In</a>
            <a className="w3-bar-item w3-button w3-large" onClick={()=>handleOpenSignUp("signUpDash")}>Open an account</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
  return null;
};

const LoggedInView = props => {

  const openRightMenu = () => {
    document.getElementById("rightMenu").style.display = "block";
  }

  const closeRightMenu = () => {
    document.getElementById("rightMenu").style.display = "none";
  }

  const navTo = (to) => {
    if(to === 'signOut'){
      sessionStorage.setItem('status',false);
      sessionStorage.setItem('email', false);
      sessionStorage.setItem('psw', false);
      const temp = {
        email: false,
        psw: false
      }
      props.setAuth(temp);
      props.history.push('/logIn');
    }
    props.history.push("/" + to);
  }

  if (props.userName) {
    return (
      <div className="outer_container" style={{position: 'fixed', top: '0px', zIndex: '1000'}}>
        <div className="main_container">
          <div className="header_container">
            <div className='navHead'>
              <div onClick={()=>navTo("")} className="header_logo"><img alt="img"src={logo} width="100%"/></div>
              <div className='signButton'>
                <div onClick={()=>navTo("home")} className="header_nav nonHeader" id="signUp" style={{ marginRight:"25px" }}><img src={sun} alt="sun" width="20px" /></div>
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    Name&nbsp;&nbsp;<img src={avatar} alt="avatar" width="34px" />&nbsp;&nbsp;
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={()=>navTo("setting")}>
                      <img src={sliders} alt="sliders" width="18px" />&nbsp;&nbsp;Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>navTo("profile")}>
                      <img src={person} alt="person" width="16px" />&nbsp;&nbsp;Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>navTo("home")}>
                      <a href='https://hedpay.com/' target="_blank" style={{ color:'#002554' }}><img src={window} alt="window" width="18px" />&nbsp;&nbsp;Go to the website</a> 
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={()=>navTo("signOut")} >
                      <img src={logout} alt="logout" width="18px" />&nbsp;&nbsp;Sign out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div onClick={()=>navTo("referral")} className="header_nav smallHide" id="logIn"><img src={share} alt="share" width="16px" />&nbsp;&nbsp;Referral</div>
                <div onClick={()=>navTo("contact")} className="header_nav smallHide" id="logIn"><img src={people} alt="people" width="21px" />&nbsp;&nbsp;Contacts</div>
                <div onClick={()=>navTo("mailBox")} className="header_nav smallHide" id="logIn"><img src={envelope} alt="envelope" width="19px" />&nbsp;&nbsp;
                  <span className="badge">8</span>
                </div>
                <div onClick={(e)=>navTo("page2FA")} className="header_nav smallHide" id="logIn"><img src={phone} alt="phone" width="13px" />&nbsp;&nbsp;2FA</div>
              </div>
            </div>
            <div className='navHeadUnder'>
              <div className='navList'>
                <ul style={{ marginTop:"-17px" }}>
                  <li className='liMRight' onClick={()=>navTo("home")}><img src={home} alt="home" style={{ marginTop:"-6px" }} width="16px" />&nbsp;&nbsp;Dashboard</li>
                  <li className='liMRight' onClick={()=>navTo("wallet")}><img src={wallet2} alt="wallet2" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Wallet</li>
                  <li className='liMRight' onClick={()=>navTo("transaction")}><img src={transfer} alt="wallet2" style={{ marginTop:"-6px" }} width="15px" />&nbsp;&nbsp;Transactions</li>
                  <li className='liMRight' onClick={()=>navTo("exchange")}><img src={signpost} alt="signpost" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Exchange</li>
                  <li className='liMRight' onClick={()=>navTo("card")}><img src={credit} alt="credit" style={{ marginTop:"-6px" }} width="21px" />&nbsp;&nbsp;Card</li>
                  <li className='liMRight' onClick={()=>navTo("fundPackage")}><img src={Groupe8395} alt="Groupe8395" style={{ marginTop:"-6px" }} width="19px" />&nbsp;&nbsp;Fund Packages</li>
                  <li className='liMRight' onClick={()=>navTo("faqPage")}><img src={question} alt="Groupe8395" style={{ marginTop:"-6px" }} width="18px" />&nbsp;&nbsp;FAQ</li>
                </ul>
              </div>
            </div>
    
            <button className="w3-button w3-xxlarge w3-right tablet_btn tablet_btn2" onClick={openRightMenu} style={{ marginTop:"-50px", height:'50px' }}><span style={{ position:'relative', top:'-14px' }}>&#9776;</span></button>
            <div className="w3-sidebar w3-bar-block w3-card w3-animate-right menuBG" style={{display:'none', right:0, position: 'absolute', top: '0px'}} id="rightMenu">
              <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large" style={{ textAlign:'center', backgroundColor:'#fff' }}>
                <img src={Arrow} alt="arrow" width="20px" />
              </button>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1" onClick={()=>navTo("page2FA")}><div style={{ color:"#000" }} id="logIn"><img src={phone} alt="phone" width="13px" />&nbsp;&nbsp;2FA</div></a>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1" onClick={()=>navTo("mailBox")}>
                <img src={envelope} alt="envelope" width="19px" />&nbsp;&nbsp;
                  <span className="badge">8</span>
                  </a>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1" onClick={()=>navTo("contact")}><img src={people} alt="people" width="21px" />&nbsp;&nbsp;Contacts</a>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1" onClick={()=>navTo("referral")}><img src={share} alt="share" width="16px" />&nbsp;&nbsp;Referral</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("home")}><img src={home} alt="home" style={{ marginTop:"-6px" }} width="16px" />&nbsp;&nbsp;Dashboard</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("wallet")}><img src={wallet2} alt="wallet2" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Wallet</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("transaction")}><img src={transfer} alt="wallet2" style={{ marginTop:"-6px" }} width="15px" />&nbsp;&nbsp;Transactions</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("exchange")}><img src={signpost} alt="signpost" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Exchange</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("card")}><img src={credit} alt="credit" style={{ marginTop:"-6px" }} width="21px" />&nbsp;&nbsp;Card</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("fundPackage")}><img src={Groupe8395} alt="Groupe8395" style={{ marginTop:"-6px" }} width="19px" />&nbsp;&nbsp;Fund Packages</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("faqPage")}><img src={question} alt="Groupe8395" style={{ marginTop:"-6px" }} width="18px" />&nbsp;&nbsp;FAQ</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }};

const mapDispatchToProps = dispatch => ({
  setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class Header extends React.Component {
  render() {
    return (
      <div>
        <LoggedOutView userName={this.props.userName} history={this.props.history}/>
        <LoggedInView userName={this.props.userName} history={this.props.history} setAuth={this.props.setAuth}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
