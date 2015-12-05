var React = require('react-native');

var Play = require('./game-play');
var color = require('./colors')
var {
  StyleSheet,
  View,
  Text,
  Image,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity
} = React;


var Meal = React.createClass({
  startPlayingGame(mealType) {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Play,
      // backButtonTitle: 'swipe',
      backButtonTitle: ' ',
      passProps: { mealType: mealType }
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 65 }}></View>
        <View style={styles.aboveButtons}>
          <Text style={styles.instructions}>
            {"Start by selecting the meal you're hankering for..."}
          </Text>
        </View>
        <View style={styles.halfHeight}>
        <View style={styles.topBox}>
          <TouchableOpacity style={styles.box} onPress={() => this.startPlayingGame("breakfast")}>
            <Text style={styles.myText}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.startPlayingGame("lunch")}>
            <Text style={styles.myText}>Lunch</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.halfHeight}>
          <TouchableOpacity style={styles.box} onPress={() => this.startPlayingGame("dinner")}>
            <Text style={styles.myText}>Dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.startPlayingGame("drinks")}>
            <Text style={styles.myText}>Drinks</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: color.secondary1_1
    // justify-content: 'flex-start'
  },
  aboveButtons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  instructions: {
    fontSize: 25,
    flexWrap: 'wrap',
    textAlign: 'center'
  },

  halfHeight: {
    flex: 2,
    flexDirection: 'row',
  },

  topBox: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  box: {
    flex: 1,
    padding: 10,
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: color.secondary2_2,
    borderRadius: 20,
  },

  myText: {
    fontSize: 30,
    textAlign: 'center',
    color: color.primary_3,
    marginTop: 50,
  }
})

module.exports = Meal;
