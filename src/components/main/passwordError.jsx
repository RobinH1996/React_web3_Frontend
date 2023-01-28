import React, { Component } from 'react';
import Small_Logo from "../../assets/images/small_logo.png";

class passwordError extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    goTo=(to)=>{
        this.props.history.push(`/${to}`);
    }
    render() {
        return (
            <div className="footer_padding">
                <div className='login' style={{ maxWidth:"465px" }}>
                    <div className='small_logo'>
                        <img src={ Small_Logo } alt="logo" />
                    </div>
                    <p className='welcome'>We are sorry!</p>
                    <p className='error_chance'>This is your first attempt.</p>
                    <p className='signinMessage' style={{ color:"#000A2E" }}>You have entered an invalid email or Password. Please <span className='try_again' onClick={()=>this.goTo("logIn")}>try again.</span></p>
                </div>
            </div>
        );
    }
}

export default passwordError;