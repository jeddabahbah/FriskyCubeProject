import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';
import { StyleSheet,Image } from 'react-native';

class MainMenuScreen extends Component {

  render() {
    return (
            
        <Image source={require('./../../assets/bg2.png')} style={styles.container}>
           <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>1989</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>1989</Text>
                        </ListItem>
                        <ListItem>
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