import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Hompage";
import { Route, Link, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Hats from "./pages/HatsPage/Hats";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {
  auth,
  // firestore,
  createUserProfileDocument
} from "./firebase/Firebase.utils";

class App extends Component {
  state = {
    currrentUser: null
  };

  unsubscribeFromAuth = () => null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currrentUser: user });
      createUserProfileDocument(user);
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currrentUser} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
