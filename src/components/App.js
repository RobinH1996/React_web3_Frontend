import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatBot from "./chatBot"
import LogIn from './main/logIn';
import Home from './main/home';
import Detail from './main/detail';
import signUpDash from './main/signUpDash';
import Favorite from './main/favorite';
import Dash from './main/dash';
import limitedSignUp from './main/signup/limitedSignup/limitedSignUp';
import limitedSignUpTerm from './main/signup/limitedSignup/limitedSignUpTerm';
import accountVerify from './main/signup/limitedSignup/accountVerify';
import chooseCurrency from './main/signup/limitedSignup/chooseCurrency';
import standardSignUp from './main/signup/standardSignup/standardSignUp';
import standardSignupDetail from './main/signup/standardSignup/standardSignupDetail';
import standardSignUpTerm from './main/signup/standardSignup/standardSignUpTerm';
import standardSignUpKYC from './main/signup/standardSignup/standardSignUpKYC';
import proSignUp from './main/signup/proSignup/proSignUp';
import proSignUpNote from './main/signup/proSignup/proSignUpNote';
import proSignupDetail from './main/signup/proSignup/proSignUpDetail';
import proSignUpPassport from './main/signup/proSignup/proSignUpPassport';
import proSignUpTerm from './main/signup/proSignup/proSignUpTerm';
import proSignUpKYC from './main/signup/proSignup/proSignUpKYC';
import forgotPassword from './main/forgotPassword';
import forgotPasswordError from './main/forgotPasswordError';
import loginError from './main/loginError';
import passwordError from './main/passwordError';
import wallet from './main/wallet';
import transaction from './main/transaction';
import card from './main/card';
import fundPackage from './main/fundPackage';
import page2FA from './main/page2FA';
import Profile from './main/profile';
import setting from './main/setting';
import exchange from './main/exchange';
import faqPage from './main/faqPage';
import mailBox from './main/mailBox';
import referral from './main/referral';
import contact from './main/contact';
import { store } from '../store';
import { push } from 'react-router-redux';
import { SET_AUTH } from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    psw: state.auth.psw
  }};

const mapDispatchToProps = dispatch => ({
  setAuth: (data) => dispatch({ type: SET_AUTH, data })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = sessionStorage.getItem('status');
    if(token === 'logIn') {
      const email = sessionStorage.getItem('email');
      const psw = sessionStorage.getItem('psw');
      const data = {
        email: email,
        psw: psw
      }
      this.props.setAuth(data);
    }
  }

  render() {
    return (
      <div>
        <Header userName={this.props.email} history={this.props.history}/>
        <ChatBot />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/signUpDash" component={signUpDash} />
            <Route path="/limitedSignUp" component={limitedSignUp} />
            <Route path="/limitedSignUpTerm" component={limitedSignUpTerm} />
            <Route path="/accountVerify" component={accountVerify} />
            <Route path="/chooseCurrency" component={chooseCurrency} />
            <Route path="/standardSignUp" component={standardSignUp} />
            <Route path="/standardSignupDetail" component={standardSignupDetail} />
            <Route path="/standardSignUpTerm" component={standardSignUpTerm} />
            <Route path="/standardSignUpKYC" component={standardSignUpKYC} />
            <Route path="/proSignUpNote" component={proSignUpNote} />
            <Route path="/proSignUp" component={proSignUp} />
            <Route path="/proSignupDetail" component={proSignupDetail} />
            <Route path="/proSignUpPassport" component={proSignUpPassport} />
            <Route path="/proSignUpTerm" component={proSignUpTerm} />
            <Route path="/proSignUpKYC" component={proSignUpKYC} />
            <Route path="/detail" component={Detail} />
            <Route path="/logIn" component={LogIn} history={this.props.history} />
            <Route path="/loginError" component={loginError} />
            <Route path="/passwordError" component={passwordError} />
            <Route path="/forgotPassword" component={forgotPassword} />
            <Route path="/forgotPasswordError" component={forgotPasswordError} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/wallet" component={wallet} />
            <Route path="/transaction" component={transaction} />
            <Route path="/card" component={card} />
            <Route path="/fundPackage" component={fundPackage} />
            <Route path="/page2FA" component={page2FA} />
            <Route path="/profile" component={Profile} />
            <Route path="/setting" component={setting} />
            <Route path="/exchange" component={exchange} />
            <Route path="/faqPage" component={faqPage} />
            <Route path="/mailBox" component={mailBox} />
            <Route path="/referral" component={referral} />
            <Route path="/contact" component={contact} />
            <Route path="/logIn" component={Dash} />
            <Redirect to="/logIn" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
