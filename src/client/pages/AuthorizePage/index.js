import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../../containers/LoginForm";
import RegisterForm from "../../containers/RegisterForm";
import "./style.css";

class AuthorizePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render() {
    const redirect = this.props.isAuthorized
      ? <Redirect exact to="/" />
      : undefined;

    const buttonText = this.state.showLogin
      ? "Go to Registration"
      : "Go to Login";

    const form = this.state.showLogin
      ? <LoginForm styleName="login-form" />
      : <RegisterForm styleName="login-form" />;

    return (
      <div styleName="main">
        {redirect}
        {form}
        <div>
          <button onClick={this.handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isAuthorized: state.user.isAuthorized });

export default connect(mapStateToProps)(AuthorizePage);
