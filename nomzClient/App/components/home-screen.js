var React = require('react-native');

var Play = require('./game-play');

var {
  StyleSheet,
  View,
  Text,
  Image,
  NavigatorIOS,
  TouchableOpacity
} = React;


var Homescreen = React.createClass({
  playGame(mealType) {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Play,
      backButtonTitle: ' '
      // backButtonTitle: 'swipe'
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 65 }}></View>
        <TouchableOpacity style={styles.box} onPress={()=> this.playGame() }>
          <Text>{"Play Nomz!"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=> this.playGame() }>
          <Text>{"Log in with Foursquare"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=> this.playGame() }>
          <Text>{"Upload an Image"}</Text>
        </TouchableOpacity>
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
    flex: 1
  }
})

module.exports = Homescreen;
