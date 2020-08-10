import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Redirect } from 'react-router';
import Home from "./Home";
import { getAccessToken } from '../../selectors';
import { redirectToAuthorizationPage } from 'services/api';

class HomeContainer extends Component {
    render = () => (
        this.props.accessToken
            ? <Redirect to='/playlists'/>
            : <Home onLoginButtonClicked={e => {e.preventDefault(); redirectToAuthorizationPage();}} />
    );
}

const mapStateToProps = (state, props) => (
    {
        accessToken: getAccessToken(state),
        ...props
    }
);

export default connect(mapStateToProps)(HomeContainer);
