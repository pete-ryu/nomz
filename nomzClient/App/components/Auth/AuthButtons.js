'use strict';

var React = require('react-native');
var Button = require('../react-native-button');

var {
  Component,
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableOpacity
} = React;

class LoginButton extends Component {

  constructor(props) {
    super(props);
    // this.propTypes = {
    //   ...TouchableOpacity.propTypes
    // }
  }


  goToLogin() {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Auth,
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  }

  render() {
    return (
      <Button
        style={styles.btn}
        // onPress={this.goToLogin.bind(this)}
        >
        {"Log in with Foursquare"}
      </Button>
    )
  }
}

LoginButton.propTypes = {
  ...TouchableOpacity.propTypes
}

var styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    width: 300,
    fontSize: 20,
    color: 'white',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#007aff'
  }
})

module.exports = {
  LoginButton: LoginButton
}