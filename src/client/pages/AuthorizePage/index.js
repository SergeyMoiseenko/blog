import React from "react";
import { connect } from "react-redux";
import "./style.css";

class AuthorizePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main">
        <p>AuthorizePage</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizePage);
