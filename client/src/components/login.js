import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    // console.log(this.props);
      return (
        <div className="background">
      <div className="container h-80">
        <div className="row align-items-center h-100">
          <div className="col-12 mx-auto">
            <div className="login-reg-panel">
              <div className="register-info-box">
                <h1>Welcome Anonymous!</h1>
                <p className="mt-5 text-center ">Welcome to Anonymous's super secret chat we are ready to discuss our next attack</p>
            
              </div>

              <div className="white-panel back">
                <img
                  id="profile-img"
                  className="rounded-circle profile-img-card"
                  src="https://i.imgur.com/6b6psnA.png"
                />
                <p id="profile-name" className="profile-name-card"></p>
                <form >
                  <input
                    type="text"
                    className="form-control form-group "
                    onChange={this.props.handleChange}
                    value={this.props.userName}
                    name="username"
                    placeholder="Your nickname"
                  />
                  <Link to="/chat" >
                    <span
                      className="btn btn-lg btn-secondary btn-block btn-signin mt-5"
                    >
                      Go to Chat
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
              </div>
              </div>
    );
  }
}

export default Login;
