var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

class Meal extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myText}> Shabba </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },

  myText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
    marginTop: 50
  }


})

module.exports = Meal;