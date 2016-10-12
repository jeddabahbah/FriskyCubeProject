import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title, Button, Icon } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';

class MainMenuScreen extends Component {

    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        })
    }    

  render() {
    return (
            
        <Image source={require('./../../assets/bgblur.png')} style={styles.container}>
           <Container>
            <Header style={styles.headernavbar}>  
                <Button transparent>
                <Thumbnail style={styles.buttonHowto} size={30} source={require('./../../assets/icon_howto.png')} />
                </Button>
                    <Title>กลุ่มดาว</Title>

                <Button transparent>
                <Thumbnail style={styles.buttonHowto} size={30} source={require('./../../assets/icon_bt.png')} />
                </Button>

            
            </Header>
                <Content>
                    <List>
                        <ListItem onPress={this.navigate.bind(this,'firstItem')} >
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </ListItem>
                        
                        <ListItem onPress={this.navigate.bind(this,'secondItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>1989</Text>
                        </ListItem>

                        <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>

                        <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>

                        <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>

                        <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>


                         <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>
                         <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>
                         <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>
                         <ListItem onPress={this.navigate.bind(this,'testItem')}>
                            <Thumbnail square size={90} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Test Blur Screen</Text>
                            <Text note>test test test test test</Text>
                        </ListItem>
                    </List> 
                </Content>
            </Container>
        </Image>



    );
  }

}

const styles = StyleSheet.create({
    container: {   
        flex: 10,
        justifyContent: 'center',
        width:null,
        height:null,
        
    },
    headernavbar: {
        backgroundColor:'#090123',
    },
    buttonHowto:{
        backgroundColor:'#090123',
        padding:10,
    },

});
    

export default MainMenuScreen;