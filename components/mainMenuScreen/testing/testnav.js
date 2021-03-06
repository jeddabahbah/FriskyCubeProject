 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform, View, Text, TouchableHighlight } from 'react-native';

 class TestNavComponent extends Component {
    onLogin(){
        this.props.navigator.push({
            title:'PageComponent',
            name: 'PageComponent',
            passProps:{}
        });
    }

    onLogin2(){
        this.props.navigator.push({
            title:'PageTwoComponent',
            name: 'PageTwoComponent',
            passProps:{}
        });
    }

    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>This is test nav bar</Text>
                <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.button}>
                    <Text style={styles.textButton}>Go!!</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={(this.onLogin2.bind(this))} style={styles.button}>
                    <Text style={styles.textButton}>Go2!!</Text>
                </TouchableHighlight>
            </View>
         
         );
     }
 }
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        marginTop: 30,
        fontSize: 20,
        color: '#262626'
    },
    button:{
        width:300,
        height:30,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        borderRadius:8,
        borderWidth:1
    },
    textButton:{
        color:'#fff'
    }

});

export default TestNavComponent;