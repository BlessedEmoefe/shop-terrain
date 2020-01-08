import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Hompage';
import { Route,Link } from "react-router-dom"
import ShopPage from "./pages/shoppage/ShopPage";
import Hats from './pages/HatsPage/Hats';

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
      <switch>

      <Route path="/" exact component={Homepage} />
      <Route path="/hats" component={Hats} />
      <Route path="/shopPage" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
