import React from 'react';
import footerLogo from '../assets/images/hdp_footer.svg'
import Send from '../assets/images/send.svg'
import Apple from '../assets/images/apple.svg'
import Google from '../assets/images/google.svg'
import FC from '../assets/images/hedpay-fc-footer.svg'
import TW from '../assets/images/hedpay-tw-footer.svg'
import DE from '../assets/images/group_de.svg'
import INS from '../assets/images/hedpay-ins-footer.svg'
import TEL from '../assets/images/hedpay-tel-footer.svg'
import IN from '../assets/images/hedpay-in-footer.svg'
import YOU from '../assets/images/hedpay-you-footer.svg'
import XT from '../assets/images/hedpay-footer-logo-xt.svg'
import Coinmarketcap from '../assets/images/hedpay-footer-logo-coinmarketcap.svg'
import Coingecko from '../assets/images/hedpay-footer-logo-coingecko.svg'
import Etherscan from '../assets/images/hedpay-footer-logo-etherscan.svg'
import Ethplorer from '../assets/images/hedpay-footer-logo-ethplorer.svg'
import Medium from '../assets/images/hedpay-footer-logo-medium.svg'
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footerUp'>
            <div className='up row'>
                <div className='col-md-4 col-sm-4'>
                    <div className='mobile_under_menu' style={{ width:'80%', display:'flex' }}>
                        <div className='fMenuUpLeft'>
                            <p className='fMenuUpHead'>Menu</p>
                            <p>About Us</p>
                            <p>Invest</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='fMenuUpRight'>
                            <p className='fMenuUpHead'>Account</p>
                            <p>Open Account</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-4'>
                    <div className='mobile_policies_div mobile_under_menu' style={{ width:'80%', display:'flex' }}>
                        <div className='fMenuUpLeft'>
                            <p className='fMenuUpHead'>Policies</p>
                            <p>Privacy Policy</p>
                            <p>Disclaimer</p>
                            <p>Terms of Service</p>
                            <p>Anti-Spam Policy</p>
                        </div>
                        <div className='fMenuUpRight'>
                            <p className='fMenuUpHead'>Imformation</p>
                            <p>News</p>
                            <p>FAQ</p>
                            <p>Usefuk Links</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-4 mobile_policies_div' >
                    <p className='fMenuUpHead'>Subscribe</p>
                    <p className='fPolicyUpLeftP'>Enter your email to receive our monthly newsletter and the periodical promotional offers before they become public.</p>
                    <div style={{ float:'left', width:'100%' }}>
                        <input type="email" name="text" style={{ width:'80%', height:'48px', borderRadius:'4px', float:'left' }} placeholder='Your email' className='sendEmail' />
                        <button className='sendBtn mobile_btn'>
                            <img src={Send} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ display:"flex", marginTop:'70px' }}  className='row'>
                <div className='col-md-4 col-sm-4 mobile_logo_div'>
                    <img alt="img" src={footerLogo} className="footerLogo" width="100%"/>
                </div>
                <div className='col-md-4 col-sm-4 mobile_support_div'>
                    <p className='fMenuUpHead'>Support</p>
                    <p className='fPolicyUpLeftP'>If you experience any problems with your account, please submit a ticket.</p>
                    <div className='mobile_google_apple'>
                        <img src={Google} className="mobile_google" alt="google pay" />
                        <img src={Apple} className="mobile_apple" alt="apple pay" />
                    </div>
                    <p className='fPolicyUpLeftP mobile_store_text' style={{ marginTop:'20px' }}>Available soon</p>
                </div>
                <div className='col-md-4 col-sm-4 mobile_support_div'>
                    <p className='fMenuUpHead'>Follow Us on Social media</p>
                    <p className='fPolicyUpLeftP'>Use your personal referral link to share on your social channels and accumulate HDP.ф tokens.</p>
                    <div className='iconUp'>
                        <img className='mobile_under_img' src={ FC } alt="fc" style={{ marginTop:'10px' }} />
                        <img src={ TW } alt="tw" className='moveLeft mobile_under_img'  />
                        <img src={ DE } alt="DE" className='moveLeft mobile_under_img'  />
                        <img src={ INS } alt="INS" className='moveLeft mobile_under_img'  />
                        <img src={ TEL } alt="TEL" className='moveLeft mobile_under_img'  />
                        <img src={ IN } alt="IN" className='moveLeft mobile_under_img'  />
                        <img src={ YOU } alt="YOU" className='moveLeft mobile_under_img'  />
                    </div>
                    <div className='iconDown'>
                        <img className='mobile_under_img' src={ XT } alt="XT" style={{ marginTop:'10px' }}  />
                        <img src={ Coinmarketcap } alt="Coinmarketcap" className='moveLeft mobile_under_img'  />
                        <img src={ Coingecko } alt="Coingecko" className='moveLeft mobile_under_img'/>
                        <img src={ Etherscan } alt="Etherscan" className='moveLeft mobile_under_img' />
                        <img src={ Ethplorer } alt="Ethplorer" className='moveLeft mobile_under_img' />
                        <img src={ Medium } alt="Medium" className='moveLeft mobile_under_img' />
                    </div>
                </div>
            </div>
        </div>
        <div className='footerDown'>
            <p className='footerDownLeft'>HEdpAY Technologies</p>
            <p className='footerDownRight'>© 2022 Hedpay Technologies. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

