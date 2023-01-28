import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SET_AUTH } from '../../../../constants/actionTypes';
import set from  "../../../../assets/images/set.png"
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {crypto_currency} from "../../components/crypto_currency"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }};
  
const mapDispatchToProps = dispatch => ({
    setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class chooseCurrency extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:[
                {
                    key: 'HDP - Hdp.ф',
                    text: 'HDP - Hdp.ф',
                    value: 'HDP - Hdp.ф',
                    image: { avatar: true, src: "currency/HDP.png" },
                }
            ]
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    signIn = () => {
        this.saveSession({email: "aa@aa.comm", psw: "123"});
    }

    saveSession = (data) => {
      sessionStorage.setItem('status','logIn');
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('psw', data.psw);
      const temp = {
        email: data.email,
        psw: data.psw
      }
      this.props.setAuth(temp);
      this.props.history.push('/home');
    }
    render() {
        return (
        <div style={{ marginTop: "170px" }} className="footer_padding">
            <div className='verify'>
                <img className='warning' src={ set } alt="set" />
                <p className='verifyTitle'>Your account has been validated</p>
                <p className='verifyTitle' style={{ color: "#08253E", marginTop:"20px" }}>Welcome to Hedpay</p>
                <p className='greetWord'>Thank you for creating your account</p>
                <div className='verifyBody'>
                    <p style={{ color: "#002554" }}>The USD - Dollar is the default currency of your account.</p>
                    <p style={{ color: "#002554", fontWeight: "500", marginTop:"-13px" }}>You can choose another currency before you continue.</p>
                    <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Default account currency *</p>
                        <Dropdown style={{ marginRight:"0px" }}
                            placeholder='Select Currency'
                            fluid
                            selection
                            options={crypto_currency}
                            defaultValue={this.state.selected}
                        />
                    <button className='singInButton activeButton' onClick={this.signIn} style={{ marginTop: "33px" }}>Explore my account</button>
                </div>
            </div>
        </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(chooseCurrency);
