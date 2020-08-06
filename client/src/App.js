import React from 'react';
import './App.css';
import Home from "./scenes/Home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {redirectToAuthorizationPage} from "./app/api";

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/">
                    <Home onLoginButtonClicked={_ => {redirectToAuthorizationPage()}}/>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;
