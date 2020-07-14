import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bunny from "./scenes/Home/Bunnies/Bunny";
// import {ConnectedRouter} from "connected-react-router";
// import { Route } from 'react-router-dom';
import Home from "./scenes/Home/Home";
import {SpotifyButton} from "./components/buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home onLoginButtonClicked={() => void 0} />
      </header>
    </div>
  );
}

export default App;
