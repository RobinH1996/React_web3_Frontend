import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./faqPage.css"
import down_arrow_fill from "../../assets/images/down_arrow_fill.svg"
import multi from "../../assets/images/multi.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class faqPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            faq:0,
            faq_menu:1
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
    handleFaq = (key) =>{
        this.setState({ faq:key })
    }
    handleMenu = (key) =>{
        this.setState({ faq_menu:key })
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="faq_page">
                <div className='mobile_responsive_title' style={{ width:'100%', display:'flex' }}>
                    <p className={this.state.faq_menu===1?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(1)}>About Hedpay</p>
                    <p className={this.state.faq_menu===2?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(2)}>Hedpay Account</p>
                    <p className={this.state.faq_menu===3?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(3)}>Hedpay Fund Package</p>
                    <p className={this.state.faq_menu===4?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(4)}>Hedpay Mc Wallet</p>
                    <p className={this.state.faq_menu===5?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(5)}>Hedpay Fund Transfer</p>
                    <p className={this.state.faq_menu===6?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(6)}>Hedpay Fund Transfer</p>
                    <p className={this.state.faq_menu===7?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(7)}>Access Hedpay APP</p>
                    <p className={this.state.faq_menu===8?'fag_page_title active_fag_page_title':'fag_page_title'} onClick={()=>this.handleMenu(8)} style={{ marginBottom:'14px' }}>Registration</p>
                </div>
                <select className='mobile_faq' name="faq" id="faq">
                    <option value="1">About Hedpay</option>
                    <option value="1">Hedpay Account</option>
                    <option value="1">Hedpay Fund Package</option>
                    <option value="1">Hedpay Mc Wallet</option>
                    <option value="1">Hedpay Fund Transfer</option>
                    <option value="1">Hedpay Fund Transfer</option>
                    <option value="1">Access Hedpay APP</option>
                    <option value="1">Registration</option>
                </select>
                <div className='row faq_each_quez'>
                    <div className='col-md-5'>
                        <div className={this.state.faq===1?'faq_each_title selected_faq_each_title':'faq_each_title'}>
                            <p className='faq_each_letter'>What is Hedpay?</p>
                            {this.state.faq===1?
                                <img className='faq_each_img' onClick={()=>this.handleFaq(0)} width="15px" height="15px" src={multi} alt="multi" />
                                :
                                <img className='faq_each_img' onClick={()=>this.handleFaq(1)} src={down_arrow_fill} alt="down_arrow_fill" />
                            }
                        </div>
                        {this.state.faq===1?
                            <div>
                                <p className='faq_content'>
                                Hedpay is a platform that aims to create a community network effect around purchasing power. Hedpay aims to improve these concepts through the use of its ERC20 token-based e-currency wallet.
                                </p>
                            </div>
                            :
                            <div></div>
                        }
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>Which Blockchain Technology uses Hedpay?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>Will Hedpay have its own blockchain?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>Is the Hedpay token a utility or security token?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>What are the official channels of Hedpay?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-5'>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>Where is Hedpay based?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>How old is Hedpay?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>Who are the people behind Hedpay?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                        <div className='faq_each_title'>
                            <p className='faq_each_letter'>Why should I choose Hedpay over another asset wallet and exchange?</p>
                            <img className='faq_each_img' src={down_arrow_fill} alt="down_arrow_fill" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(faqPage)