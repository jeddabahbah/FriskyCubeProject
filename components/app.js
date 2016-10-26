'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

import SplashScreen from './splashScreen/splashScreen';
//import TestComponent from './mainMenuScreen/testing/test';
//import FirstItem from './mainMenuScreen/Items/firstItemScreen';
//import SecondItem from './mainMenuScreen/Items/secondItemScreen';
//import ThirdItem from './mainMenuScreen/Items/thirdItemScreen';
//import FourthItem from './mainMenuScreen/Items/fourthItemScreen';
//import FifthItem from './mainMenuScreen/Items/fifthItemScreen';
import TestNavComponent from './mainMenuScreen/testing/testnav';
import PageComponent from './mainMenuScreen/testing/page';
import PageTwoComponent from './mainMenuScreen/testing/pagetwo';


var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index){
    if(route.name == 'TestNavComponent'){
      return null
    }

    return(
        <TouchableHighlight onPress={() => {
          if(index > 0){
            navigator.pop();
          }
        }}>
            <Text style={{marginTop:10, marginLeft:20, color:'#007AFF'}}>Back</Text>
        </TouchableHighlight>
      )
  },

  RightButton: function(route, navigator, index){
    return null;
  },

  Title: function(route, navigator, index){
    if(route.name == 'TestNavComponent'){
      return null
    }

    return(
        <Text style={{marginTop:10, color: '#007AFF'}}>
          {route.name}
        </Text>
      )
  }

};

class App extends Component {

  renderScene(route, navigator){
      switch(route.name){
          case 'TestNavComponent':
            return(
                <TestNavComponent navigator={navigator} route={route} />
              );
          case 'PageComponent':
            return(
                <PageComponent navigator={navigator} route={route} />
              );
          case 'PageTwoComponent':
            return(
                <PageTwoComponent navigator={navigator} route={route} />
              );
      }
  }

  render() {
    return (
      <SplashScreen duration={3000}>
          <Navigator style={{backgroundColor:'#fff'}}
          initialRoute={{name: 'TestNavComponent'}} 
          renderScene={this.renderScene}
          configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight
          }} 
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigatorBarRouteMapper} />
          } 

          />
      </SplashScreen>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;