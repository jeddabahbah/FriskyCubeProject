import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import SplashScreen from './splashScreen/splashScreen';
import MainMenuScreen from './mainMenuScreen/mainMenuScreen';
import FirstItem from './mainMenuScreen/Items/firstItemScreen';
import SecondItem from './mainMenuScreen/Items/secondItemScreen';
import ThirdItem from './mainMenuScreen/Items/thirdItemScreen';
import FourthItem from './mainMenuScreen/Items/fourthItemScreen';
import FifthItem from './mainMenuScreen/Items/fifthItemScreen';



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

    if(route.name == 'thirdItem'){
      return <ThirdItem navigator={navigator} />
    }

    if(route.name == 'fourthItem'){
      return <FourthItem navigator={navigator} />
    }

    if(route.name == 'fifthItem'){
      return <FifthItem navigator={navigator} />
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