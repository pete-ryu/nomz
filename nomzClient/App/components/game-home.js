var React = require('react-native');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;


class Game extends Component {
  constructor() {
    super();
    this.state = {
      mealSelection: null
    }
  }



  render() {
    console.log("hello")
    return (
      <View
      style={styles.container}>
        <Text
          style={styles.myText}>
          This is the game state
        </Text>
      </View>
    )
  }


}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  myText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green'
  }
})


module.exports = Game;