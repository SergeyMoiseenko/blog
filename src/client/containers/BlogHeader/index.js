import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./index.css";

const mapStateToProps = ({ isAuthorized }) => ({ isAuthorized });

const mapDispatchToProps = dispatch => ({});

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loginButton;
    if (this.props.isAuthorized) {
      loginButton = <button type="button">Logout</button>;
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
