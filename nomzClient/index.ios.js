/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Game = require('./App/components/game-home')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
  Navigator
} = React;

class nomzClient extends Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: 'Find Food',
          component: Game
        }} />
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('nomzClient', () => nomzClient);
