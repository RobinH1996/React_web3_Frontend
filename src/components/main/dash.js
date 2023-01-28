import React from 'react';
import { connect } from 'react-redux';
import SignIn from "./logIn";

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }};  

const mapDispatchToProps = dispatch => ({
  
});

class Dash extends React.Component {
  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="row">
        <SignIn />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
