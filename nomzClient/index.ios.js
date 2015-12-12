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
  AsyncStorage
} = React;

class nomzClient extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: null
    }
  }


  componentWillMount() {
    AsyncStorage.getItem('userId').then( val => {
      if (!val) {
        this.setState({
          isLoading: false,
        })
      } else {
        console.log('fetched from storage:', val)
        this.setState({
          isLoading: false,
          user: val
        })
      }
    }).done()
  }


  render() {
    console.log('in index, state.user:', this.state)
    var homepage;
    if (!this.state.isLoading) {
         homepage = (
        <NavigatorIOS
          ref = "nav"
          style={styles.container}
          initialRoute = {{
            title: 'Nomz!',
            backButtonTitle: ' ',
            description: 'Nomz! - the best new way to find food',
            component: Home,
            passProps: { user: this.state.user, test: 'test' }
        }} />
      )
    } else {
      // TODO: Maybe update to an activity indicator...
      homepage = <View></View>
    }
 

    return homepage
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('nomzClient', () => nomzClient);
