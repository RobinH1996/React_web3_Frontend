import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom';
import CountrySelector from '../limitedSignup/countrySelector';

export default class proSignUpPassport extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }
    componentWillMount(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    navTo = () => {
      this.props.history.push("/proSignUpTerm");
    }
    render() {
        const employment_options = [
          { value: 'employed', label: 'employed' },
          { value: 'self employed', label: 'self employed' },
          { value: 'unemployed', label: 'unemployed' },
          { value: 'retired', label: 'retired' },
          { value: 'student', label: 'student' }
        ]
        const income_options = [
            { value: '1-25000', label: '1-25000' },
            { value: '25000 -65000', label: '25000 -65000' },
            { value: '65000 - 100000', label: '65000 - 100000' },
            { value: '100 000 +', label: '100 000 +' }
          ]
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <div className='standardSignUpBar'>
                    <p className='limitedSignupTitle standardSignupTitleLeft' style={{ marginLeft:"10%" }}>Passport</p>
                    <p className='limitedSignupTitle standardSignupTitleRight' style={{ marginRight:"9%" }}>Employment</p>
                </div>
                <div className='limitedSignupDiv'>
                    <div className='limitedProcessBar'>
                        <span className='limitedLeftDot'></span>
                        <div className='limitedBarActive'></div>
                        <div className='limitedBar'></div>
                        <span className='limitedRightDot'></span>
                    </div>
                    <div className='row inputDetails'>
                        <div className='col-md-5'>
                            <p className='inputTitle'>Passport / ID number *</p>
                            <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                            <div style={{width: "100%"}}>
                                <p className='inputTitle mobile_limit_title'>Date of expiry *</p>
                                <div style={{ display: "flex", width:"100%" }}>
                                    <input style={{ width:"30%" }} className='inputStyle' type="number" name="nickName" placeholder='MM' />
                                    <input style={{ width:"30%", marginLeft: "5%" }} className='inputStyle' type="number" name="nickName" placeholder='DD' />
                                    <input style={{ width:"30%", marginLeft: "5%" }} className='inputStyle' type="number" name="nickName" placeholder='YYYY' />
                                </div>
                            </div>
                            <p className='inputTitle'>Place of issue *</p>
                            <CountrySelector />
                            <Link to="proSignUpDetail" className='goBack web_limit_go'>Go back</Link>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-5'>
                            <p className='inputTitle unactiveInputTitle mobile_limit_title'>Employment *</p>
                            <Select options={employment_options} className="selectTitle employment" />
                            <p className='inputTitle unactiveInputTitle'>Annual income *</p>
                            <Select options={income_options} className="selectTitle" />
                            <button className='singInButton createAccount mobile_limit_create_account' onClick={this.navTo}>Create account</button>
                            <Link to="proSignUpDetail" className='mobile_limit_go'>Go back</Link>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
