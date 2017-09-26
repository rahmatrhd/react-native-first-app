import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import {
  Container,
  Button,
  Text,
  Icon
} from 'native-base'
import {
  StyleSheet
} from 'react-native'


export default class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Container style={styles.container}>
        <Button
          style={styles.button} rounded
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Touch to continue</Text>
          <Icon name='arrow-forward' />
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },

  button: {
    alignSelf: 'center'
  }
})
