/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// var Game = require('./App/components/game-home');
var Meal = require('./App/components/Meal');

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
        ref = "nav"
        style={styles.container}
        initialRoute = {{
          title: 'Find Food',
          description: 'Start by selecting the type of meal you are interested in',
          component: Meal
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
