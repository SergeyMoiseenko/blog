import React from "react";
import { connect } from "react-redux";
import LoginForm from "../../containers/LoginForm";
import RegisterForm from "../../containers/RegisterForm";
import "./style.css";

class AuthorizePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main">
        <LoginForm styleName="login-form" />
        <RegisterForm styleName="login-form" />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizePage);
