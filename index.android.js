/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *Android System
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/app';

class FriskyCubeProject extends Component {

	

  render() {
    return (

      <App/>
      
    );
  }
}


AppRegistry.registerComponent('FriskyCubeProject', () => FriskyCubeProject);
