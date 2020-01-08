import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Hompage';
import { Route,Link } from "react-router-dom"

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
      <Homepage />
    </div>
  );
}

export default App;
