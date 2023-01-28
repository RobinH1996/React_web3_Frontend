import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Small_Logo from "../../../../assets/images/small_logo.png";

export default class proSignUpNote extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
      window.scrollTo({top: 0, behavior: 'smooth'});
  }
  navTo = () => {
    this.props.history.push("/proSignUp");
  }
  render() {
    return (
        <div style={{ marginTop: "170px" }} className="footer_padding">
            <div className='login proSignNote'>
                <div className='small_logo'>
                    <img src={ Small_Logo } alt="logo" />
                </div>
                <p className='welcome'>Where can I get some?</p>
                <p className='signinMessage' style={{ color:"#002554" }}>Why do we use it?</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here.</p>
                <button className='singInButton activeButton' onClick={this.navTo} style={{ width:"50%", marginTop:"50px" }}>Next step</button>
            </div>
            <div style={{ textAlign: "center", marginTop:"50px" }}>
                <Link to="signUpDash" className='goBackPro'>Go back</Link>
            </div>
        </div>
    )
  }
}
