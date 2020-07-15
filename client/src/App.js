import React from 'react';
import './App.css';
import Home from "./scenes/Home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// function App(history) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Home onLoginButtonClicked={() => void 0} />
//       </header>
//     </div>
//   );
// }

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;
