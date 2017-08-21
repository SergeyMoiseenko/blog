import React from "react";
import { connect } from "react-redux";
import { registerFormChange } from "../../actions/UI";
import { registerUser } from "../../actions/user";
import { initWithDefaultString } from "../../utils/strings";
import "./style.css";

const mapStateToProps = state => {
  if (state.UI.registerForm === undefined) {
    return {};
  }

  return state.UI.registerForm;
};

const mapDispatchToProps = dispatch => ({
  formChange: (target, value) => {
    dispatch(registerFormChange(target, value));
  },

  registerUser: (username, email, password) => {
    dispatch(registerUser(username, email, password));
  }
});

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.usernameInputName = "username";
    this.passwordInputName = "password";
    this.passwordConfirmInputName = "confirmpassword";
    this.emailInputName = "email";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.passwordsIsEqual = this.passwordsIsEqual.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(
      this.getUsernameValue(),
      this.getEmailValue(),
      this.getPasswordValue()
    );
  }

  handleFormChange(e) {
    this.props.formChange(e.target.name, e.target.value);
  }

  getUsernameValue() {
    return initWithDefaultString(this.props[this.usernameInputName]);
  }

  getPasswordValue() {
    return initWithDefaultString(this.props[this.passwordInputName]);
  }

  getPasswordConfirmValue() {
    return initWithDefaultString(this.props[this.passwordConfirmInputName]);
  }

  getEmailValue() {
    return initWithDefaultString(this.props[this.emailInputName]);
  }

  passwordsIsEqual() {
    return this.getPasswordConfirmValue() === this.getPasswordValue();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username <br />
            <input
              type="text"
              name={this.usernameInputName}
              placeholder="Enter username"
              value={this.getUsernameValue()}
              onChange={this.handleFormChange}
              required
            />
          </label>
          <br />
          <label>
            Password <br />
            <input
              type="password"
              name={this.passwordInputName}
              placeholder="Enter password"
              value={this.getPasswordValue()}
              onChange={this.handleFormChange}
              required
            />
          </label>
          <br />
          <label>
            Confirm password <br />
            <input
              type="password"
              name={this.passwordConfirmInputName}
              placeholder="Confirm password"
              value={this.getPasswordConfirmValue()}
              onChange={this.handleFormChange}
              required
            />
          </label>
          <br />
          <label>
            Email <br />
            <input
              type="email"
              name={this.emailInputName}
              placeholder="Enter email"
              value={this.getEmailValue()}
              onChange={this.handleFormChange}
              required
            />
          </label>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
