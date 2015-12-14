var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  Image,
  Component
} = React;

var { BlurView } = require('react-native-blur');

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparant',
    paddingBottom: 10
  },

  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },

  handle: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },

  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }

})


class Badge extends Component {
  render() {
    console.log('in badge:', this.props.userInfo)
    return (
      <View style={styles.container}>
        <BlurView blurType='light'>
        <Image style={styles.image} source={ {uri: 'https://avatars3.githubusercontent.com/u/12356761?v=3&s=460'} } />
        <Text style={styles.name}> {this.props.username} </Text>
        </BlurView>
      </View>
    )
  }
}


Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
}


module.exports = Badge;