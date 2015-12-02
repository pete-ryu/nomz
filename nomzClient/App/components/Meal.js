var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity
} = React;

class Meal extends React.Component {
  clickMe() {
    alert('Clicked');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 65 }}></View>
        <View style={styles.halfHeight}>
          <View style={styles.box} >
            <TouchableOpacity onPress={this.clickMe.bind(this)}>
            <Text style={styles.myText}>Breakfast</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Text style={styles.myText}>Lunch</Text>
          </View>
        </View>
        <View style={styles.halfHeight}>
          <View style={styles.box}>
            <Text style={styles.myText}>Dinner</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.myText}>Drinks</Text>
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'green'
    // justify-content: 'flex-start'
  },

  halfHeight: {
    flex: 1,
    flexDirection: 'row'
  },

  box: {
    flex: 1,
    padding: 10,
    width: 150,
    height: 150,
    // marginTop: 30,
    // marginLeft: 15,
    margin: 20,
    backgroundColor: 'red'
  },

  myText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'blue',
    marginTop: 50,
  }


})

module.exports = Meal;
