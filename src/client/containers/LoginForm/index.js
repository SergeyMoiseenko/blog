import React from "react";
import { connect } from "react-redux";
import { loginFormChange } from "../../actions/UI";
import * as UserActions from "../../actions/user";
import * as status from "../../utils/StatusTypes";
import { initWithDefaultString } from "../../utils/strings";
import "./style.css";

const mapStateToProps = state => {
  if (state.UI.loginForm === undefined) {
    return {
      loginStatus: status.LOGIN_UNDEFINED,
      inputs: {}
    };
  }

  return state.UI.loginForm;
};

const mapDispatchToProps = dispatch => ({
  formChange: (target, value) => {
    dispatch(loginFormChange(target, value));
  },

  loginUser: (username, password) => {
    dispatch(UserActions.loginUser(username, password));
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.usernameInputName = "username";
    this.passwordInputName = "password";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  getUsernameValue() {
    return initWithDefaultString(this.props.inputs[this.usernameInputName]);
  }

  getPasswordValue() {
    return initWithDefaultString(this.props.inputs[this.passwordInputName]);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.getUsernameValue(), this.getPasswordValue());
  }

  handleFormChange(e) {
    this.props.formChange(e.target.name, e.target.value);
  }

  renderErrorMessage() {
    if (this.props.loginStatus === status.LOGIN_FAILED) {
      return (
        <p styleName="error-message">
          Invalid username and/or password. Please try again.
        </p>
      );
    }
    return undefined;
  }

  render() {
    return (
      <div className={this.props.className}>
        <form styleName="form-style" onSubmit={this.handleSubmit}>
          <label>
            <p>Username</p>
            <input
              type="text"
              name={this.usernameInputName}
              placeholder="Enter Username"
              value={this.getUsernameValue()}
              onChange={this.handleFormChange}
              required
            />
          </label>
          <br />
          <label>
            <p>Password</p>
            <input
              type="password"
              name={this.passwordInputName}
              placeholder="Enter Password"
              value={this.getPasswordValue()}
              onChange={this.handleFormChange}
              required
            />
          </label>
          {this.renderErrorMessage()}
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
