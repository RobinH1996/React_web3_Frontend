import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { SET_AUTH } from '../../constants/actionTypes';
import './signUp.css';
import { SERVER_URL } from '../../constants/otherConstans';
import Small_Logo from "../../assets/images/small_logo.png";
import User from "../../assets/images/user.png";
import Lock from "../../assets/images/lock.png";
import ErrorState from "./components/errorState";

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    psw: state.auth.psw
  }};

const mapDispatchToProps = dispatch => ({
  setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});
class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        psw: '',
        color:"",        
        error: {
            email: 'none',
            psw: 'none',
        },
        pswErr: 'Password is required'
        }
    }

    componentWillMount = () => {
        if(this.props.email)
          this.props.history.push('/home');
        else
          window.scrollTo({top: 0, behavior: 'smooth'});
    }

    componentWillReceiveProps(newProps) {
    }

    togglePassword = (id) => {        
        let input = window.$("#"+id);
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            window.$("#c_" + id).hide();
            window.$("#o_" + id).show();
        } else {
            input.attr("type", "password");
            window.$("#o_" + id).hide();
            window.$("#c_" + id).show();
        }
    }

    setEmail = (e) => {
        this.setState({email: e.target.value, emailErr: 'Valid email address is required.'});
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(String(e.target.value).toLowerCase());
        var error = this.state.error;
        if(e.target.value !== '' && valid){
            error.email = 'none';
            this.setState({error: error});
        } else if(e.target.value !=='' && !valid) {
            error.email = 'block';
            this.setState({error: error});
        } else{
            this.setState({ emailErr:"Email is required." })
            error.email = 'block';
            this.setState({error: error});
        }
    }
    
    
    setPsw = (e) => {
      const validatePassword = (password) =>{
        // Create an array and push all possible values that you want in password
        var matchedCase = new Array();
        matchedCase.push("[$@$!%*#?&]"); // Special Charector
        matchedCase.push("[A-Z]");      // Uppercase Alpabates
        matchedCase.push("[0-9]");      // Numbers
        matchedCase.push("[a-z]");     // Lowercase Alphabates
        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(password)) {
                ctr++;
            }
        }
        switch (ctr) {
            case 0:
            case 1:
            case 2:
                // strength = "Very Weak";
                // color = "red";
                this.setState({ pswErr: "Your passwrod is very weak!", color:"#FFA07A" })
                break;
            case 3:
                this.setState({ pswErr: "Your passwrod is Medium!", color:"#FFA500" })
                break;
            case 4:
                this.setState({ pswErr: "Your passwrod is Strong!", color:"#7CFC00" })
                break;
        }
      }
        this.setState({psw: e.target.value});
        var password = e.target.value;   
        var error = this.state.error;
        // Do not show anything when the length of password is zero.
        if (password.length === 0) {
          this.setState({pswErr: 'Password is required.', color:"#FFA07A"});
          error.psw = 'block';
          this.setState({error: error});
          return;
        }
        else{
          error.psw = 'block';
          this.setState({error: error});
          validatePassword(password);
        }
    }

    signIn = () => {
        // var state = this.state;
        // var email = state.email === '' ? 'block' : 'none';
        // var psw = state.psw === '' ? 'block' : 'none';
        
        // if(psw === '') {
        //     this.setState({pswErr: 'Password is required'});
        // }

        // var error = {
        //     email: email,
        //     psw: psw,
        // };
        // this.setState({error: {...error}}); 

        // if(email==='none' && psw==='none'){ 
        //     const data = {
        //         email: this.state.email,
        //         psw: this.state.psw
        //     };

        //    axios
        //     .post(SERVER_URL + "/users/logIn", data)
        //     .then((response) => {
        //         if(response.data.result === 'OK'){
        //             this.saveSession({email: state.email, psw: state.psw});
        //         } else if (response.data.result === 'NO_EMAIL'){ alert(response.data.result);
        //             this.setState({emailErr: 'No such a registered email'});
        //             var err = this.state.error;
        //             err.email = "block";
        //             this.setState({error: err});
        //         } else if (response.data.result === 'PSW_ERR'){
        //             this.setState({pswErr: 'Password Error'});
        //             var err = this.state.error;
        //             err.psw = "block";
        //             this.setState({error: err});
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     }); 
        // }
        this.saveSession({email: "aa@aa.comm", psw: "123"});
        // console.log(history);
        // this.props.history.push("/passwordError");
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
    handleEmail = (event) =>{
        this.setState({ email: event.target.value });
    }
    handlePassword = (event) =>{
        this.setState({ psw: event.target.value });
    }

  render() {
    return (
        <div className="footer_padding">
            <div className='login'>
                <div className='small_logo'>
                    <img src={ Small_Logo } alt="logo" />
                </div>
                <p className='welcome'>Welcome to Hedpay</p>
                <p className='signinMessage'>Please, sign in</p>
                <p className='loginTitle' style={{ marginTop:"30px" }}>Email</p>
                <img src={ User } alt="user" className='userIcon' />
                <input className='emailInput' value={this.state.email} onChange={this.setEmail} type="email" name="User Email" placeholder='Enter your email' />
                <ErrorState show={this.state.error.email} name={this.state.emailErr} color="#FFA07A" />
                <p className='loginTitle' style={{ marginTop:"20px" }}>Password</p>
                <img src={ Lock } alt="lock" className='userIcon' />
                <input className='passwordInput' value={this.state.psw} onChange={this.setPsw} type="password" name="User Password" placeholder='Enter your password' />
                <ErrorState show={this.state.error.psw} name={this.state.pswErr} color={this.state.color}/>
                <p className='loginTitle forgot' onClick={()=>this.props.history.push('/forgotPassword')}>Forgot password?</p>
                {this.state.email!=="" && this.state.psw!=="" && this.state.error.email==='none' && this.state.pswErr==='Your passwrod is Strong!'?
                    <button className='singInButton activeButton' onClick={this.signIn}>Sign in</button>:
                    <button className='singInButton' disabled>Sign in</button>
                }
            </div>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
