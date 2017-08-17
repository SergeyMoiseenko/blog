import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/user";
import NavBar from "../../components/NavBar";
import "./style.css";

const mapStateToProps = ({ user }) => ({ isAuthorized: user.isAuthorized });

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loginButton;
    if (this.props.isAuthorized) {
      loginButton = (
        <button onClick={this.props.logoutUser} type="button">
          Logout
        </button>
      );
    } else {
      loginButton = <Link to="/authorize">Login</Link>;
    }

    return (
      <header styleName="blog-header">
        <NavBar styleName="nav-bar" />
        <div styleName="user-pane">
          {loginButton}
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogHeader);
