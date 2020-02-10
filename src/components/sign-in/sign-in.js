import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/custom-button";
import {
  signInWithGoogle
  // signInWithGithub
} from "../../firebase/Firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
          {/* <CustomButton onClick={signInWithGithub}>
            Sign in with Github
          </CustomButton> */}
        </form>
      </div>
    );
  }
}

export default SignIn;
