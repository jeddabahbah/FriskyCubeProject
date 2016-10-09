import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import SplashScreen from './splashScreen/splashScreen';
import MainMenuScreen from './mainMenuScreen/mainMenuScreen';
import FirstItem from './mainMenuScreen/Items/firstItemScreen';
import SecondItem from './mainMenuScreen/Items/secondItemScreen';


class App extends Component {

  renderScene(route, navigator){

    if(route.name == 'main'){
      return <MainMenuScreen navigator={navigator} />
    }

    if(route.name == 'firstItem'){
      return <FirstItem navigator={navigator} />
    }

    if(route.name == 'secondItem'){
      return <SecondItem navigator={navigator} />
    }
  }

  render() {
    return (
      <SplashScreen duration={3000}>
          <Navigator
            initialRoute={{name: 'main'}}
            renderScene={this.renderScene.bind(this)}
          />
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