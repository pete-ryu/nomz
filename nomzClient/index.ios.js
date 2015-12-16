'use strict';

var React = require('react-native');
var Auth = require('./App/components/Auth/auth');
var Colors = require('./App/components/colors');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
  AsyncStorage,
  ActivityIndicatorIOS
} = React;

class nomzClient extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: true,
      user: null
    }
  }

  // On application launched, check if a user 's id is stored
  componentWillMount() {
    AsyncStorage.getItem('userId').then( val => {
      if (!val) {
        this.setState({
          isLoading: false,
        })
        // console.log('No User Session');
      } else {
        this.setState({
          isLoading: false,
          user: val,
          isLoggedIn: true
        })
      }
    }).done()
  }


  render() {
    // console.log('in index, state.user:', this.state)
    var homepage;
    // confirm whether user is logged in based on state and select next view accordingly
    var nextRoute = this.state.isLoggedIn ? require('./App/components/home-screen') : Auth
    if (!this.state.isLoading) {
         homepage = (
        <NavigatorIOS
          ref = "nav"
          style={styles.container}
          barTintColor={Colors.red} 
          tintColor='white'
          titleTextColor='white'
          initialRoute = {{
            title: 'Nomz!',
            backButtonTitle: ' ',
            description: 'Nomz! - the best new way to find food',
            component: nextRoute,
            passProps: { userId: this.state.user }
          }} />
      )
    } else {
<<<<<<< HEAD
=======
      // TODO: Maybe update to an activity indicator...
>>>>>>> 87612cf9d5d1f4fe1580249ffba9649a4a4837ef
      homepage = (<ActivityIndicatorIOS
                    animating={this.state.isLoading}
                    style={styles.centered}
                    size='large'/>
                )
    }
 

    return homepage
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('nomzClient', () => nomzClient);