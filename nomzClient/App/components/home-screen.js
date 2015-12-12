var React = require('react-native');

var Button = require('./react-native-button');
var Play = require('./game-play');
var Feed = require('./feed');
var Auth = require('./Auth/auth');

var {
  StyleSheet,
  View,
  Text,
  Image,
  NavigatorIOS,
  TouchableOpacity
} = React;


var Homescreen = React.createClass({
  playGame() {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Play,
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  },

  getFeed() {
  this.props.navigator.push({
      title: 'Review Dishes',
      component: Auth,
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  },

  render() {
    return (
      <View style={styles.container}>
      <Image source={{ uri: "nomz" , isStatic: true }} style={styles.bgImg} />
        <View style={{ marginTop: 65, backgroundColor: 'transparent' }}></View>
        <View style={styles.box}></View>
        <View style={styles.box}>
          <Button
            style={styles.btn}
            onPress={this.playGame}>
            {"Play Nomz!"}
          </Button>
          <Button
            style={styles.btn}
            onPress={this.getFeed}>
            {"Log in with Foursquare"}
          </Button>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  box: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems:'center',

  },

  bgImg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.9
  },

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
  },
})

module.exports = Homescreen;
