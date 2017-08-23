import React from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { logoutUser } from "../../actions/user";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import "./style.css";

const mapStateToProps = ({ user }) => ({ isAuthorized: user.isAuthorized });

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    this.goToAuthorizePage = this.goToAuthorizePage.bind(this);
  }

  goToAuthorizePage(e) {
    this.props.history.push("/authorize");
  }

  render() {
    const auth = this.props.isAuthorized;
    return (
      <header styleName="blog-header">
        <NavBar styleName="nav-bar" />
        <div styleName="user-pane">
          <Button
            onClick={auth ? this.props.logoutUser : this.goToAuthorizePage}
            type="button"
          >
            {auth ? "Logout" : "Login"}
          </Button>
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogHeader);
