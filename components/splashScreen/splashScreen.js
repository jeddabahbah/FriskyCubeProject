import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';

class SplashScreen extends Component {

  constructor(props){
      super(props);
      this.state = {
          done: false
      }
  }

  timer(){
      setTimeout(()=>{
          this.setState({
              done: true
          });
      },2000)
  }

  componentDidMount(){
      this.timer();
  }


  render() {
    return (

          this.state.done ?
              //if done -> show all nested
              ({...this.props.children})
              :
              //display splashscreen
              (<View>
                  <Text>
                    I'm SplashScreen.
                  </Text>
              </View>)
    );
  }
}

const styles = StyleSheet.create({
 
});

export default SplashScreen;