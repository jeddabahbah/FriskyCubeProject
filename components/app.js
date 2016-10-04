import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SplashScreen from './splashScreen/splashScreen'
import MainMenuScreen from './mainMenuScreen/mainMenuScreen'

class App extends Component {
  render() {
    return (
      <SplashScreen duration={3000}>
          <MainMenuScreen>
            
          </MainMenuScreen>
      </SplashScreen>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  

});

export default App;