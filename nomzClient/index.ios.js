/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// var Game = require('./App/components/game-play');
var Home = require('./App/components/home-screen');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
} = React;

class nomzClient extends Component{
  render() {
    return (
      <NavigatorIOS
        ref = "nav"
        style={styles.container}
        initialRoute = {{
          title: 'Nomz!',
          // backButtonTitle: 'meal type',
          backButtonTitle: ' ',
          description: 'Nomz! - the best new way to find food',
          component: Home
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
