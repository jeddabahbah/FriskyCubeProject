import React, { Component } from 'react';
import { StyleSheet,Text,View,Image } from 'react-native';




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
      },this.props.duration || 1000)
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
              (
                  <Image source={require('./../../assets/lunch.png')} style={styles.container}>
                  </Image>
              )
    );
  }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:null,
        height:null,
      
  },
    

});

export default SplashScreen;