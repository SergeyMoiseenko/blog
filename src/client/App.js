import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getStore from "./store";
import "./index.css";

const store = getStore({});

class Homepage extends React.Component {
  constructor() {
    super();
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
  constructor() {
    super();
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
  constructor() {
    super();
    this.some = "some";
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>
                      <Link to="/homepage">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Route path="/homepage" component={Homepage} />
            <Route path="/login" />
            <Route path="/about" component={About} />
            <Route path="/resume" />
          </div>
        </Router>
      </Provider>
    );
  }
}
