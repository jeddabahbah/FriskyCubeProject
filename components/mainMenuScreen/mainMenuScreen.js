import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title } from 'native-base';
import { StyleSheet, Image } from 'react-native';

class MainMenuScreen extends Component {

    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        })
    }    

  render() {
    return (
            
        <Image source={require('./../../assets/bg2.png')} style={styles.container}>
           <Container>
            <Header>    
                    <Title>FriskyCube Project</Title>
            </Header>

                <Content>
                    <List>
                        <ListItem onPress={this.navigate.bind(this,'firstItem')} >
                            <Thumbnail square size={80} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </ListItem>
                        

                        <ListItem onPress={this.navigate.bind(this,'secondItem')}>
                            <Thumbnail square size={80} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>1989</Text>
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

    

});
    

export default MainMenuScreen;