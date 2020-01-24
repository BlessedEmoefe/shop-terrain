import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Hompage';
import { Route,Link } from "react-router-dom"
import ShopPage from "./pages/shoppage/ShopPage";
import Hats from './pages/HatsPage/Hats';
import Header from "./components/header/Header"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"

const Hatspage=()=>{
return(
  <div>
    <h1>Hats Page</h1>
  </div>
)
};

function App() {
  return (
    <div>
      <Header />
      <switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/hats" component={Hats} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
      </switch>
    </div>
  );
}

export default App;
