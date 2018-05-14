import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './AppNavigationState'

export default class Root extends Component {
    render() {
        return (
            <App />
        );
    }
}
AppRegistry.registerComponent('NewSuDaSports', () => Root);
