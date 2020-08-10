import React from 'react';
import Component from 'react';
import './scenes/Home/App.css';
import Home from "./scenes/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleApplicationStarted } from 'actions/app';
import { getLoading } from 'selectors';

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


class AppContainer extends Component {
    componentDidMount = () => {
        this.props.onApplicationStarted();
    }

    render = () => (
        <App {...this.props} />
    )
}

const mapStateToProps = (state, props) => ({
    ...props,
    loading: getLoading(state)
});

const mapDispatchToProps = {
    onApplicationStarted: handleApplicationStarted
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
