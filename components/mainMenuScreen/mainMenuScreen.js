import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';

class MainMenuScreen extends Component {

  render() {
    return (
      
      //<Image source={require('./../../assets/bg2.png')}>
      /*<View style={styles.container}>
      <Image source={require('./../../assets/bg2.png')}>
        <Text style={styles.welcome}>
          Welcome to FriskyCube
        </Text>
        <Text style={styles.instructions}>
          This file open from MainMenuScreen.
        </Text>
        </Image>
      </View>*/
      //</Image>

           <Container>
                <Content>
                    <List>
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
                        <ListItem>
                            <Thumbnail square size={80} source={require('./../../assets/infiniti-logo.png')} />
                            <Text>Infiniti</Text>
                            <Text note>1989</Text>
                        </ListItem>
                       
                    </List>
                </Content>
            </Container>




    );
  }

}


export default MainMenuScreen;