import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getStore from "./store";
import Header from "./containers/BlogHeader";
import AuthorizePage from "./pages/AuthorizePage";
import "./index.css";

const store = getStore({});

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.name = "This is homepage for Sergey Moiseenko";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.name}
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.info = "This is about page. This inf is secret.";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.info}
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.some = "some";
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route component={Header} />
            <Route exact path="/" component={Homepage} />
            <Route path="/authorize" component={AuthorizePage} />
            <Route path="/about" component={About} />
            <Route path="/resume" />
          </div>
        </Router>
      </Provider>
    );
  }
}
