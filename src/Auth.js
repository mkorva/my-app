import React, { Component } from "react";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      visitor: {
        username: "",
        password: ""
      }
    };
  }

  updateVisitor(attr, event) {
    console.log(attr + " == " + event - EventTarget.value);
    const updatedVisitor = Object.assign({}, this.state.visitor);
    updatedVisitor[attr] = event.target.value;

    this.setState({
      visitor: updatedVisitor
    });
  }

  register(event) {
    event.preventDefault();
    console.log("REGISTER:" + JSON.stringify(this.state.visitor));
  }

  login(event) {
    event.preventDefault();
    console.log("LOGIN:" + JSON.stringify(this.state.visitor));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Register</h1>
            <form>
              <input
                onChange={this.updateVisitor.bind(this, "username")}
                className="form-control"
                type="text"
                placeholder="Username"
              />
              <input
                input
                onChange={this.updateVisitor.bind(this, "password")}
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <button onClick={this.register.bind(this)}>Register</button>
            </form>

            <h1>Login</h1>
            <form>
              <input
                onChange={this.updateVisitor.bind(this, "username")}
                className="form-control"
                type="text"
                placeholder="Username"
              />
              <input
                input
                onChange={this.updateVisitor.bind(this, "password")}
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <button onClick={this.login.bind(this)}>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
