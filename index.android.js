/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { Container } from 'native-base'

import App from './src/App'
import store from './src/store'

export default class firstReactNativeInit extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <App/>
        </Container>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('firstReactNativeInit', () => firstReactNativeInit);
