var React = require('react-native');

var Button = require('./react-native-button');
var Play = require('./game-play');
var Feed = require('./feed');
var Auth = require('./Auth/auth');

// var { LoginButton } = require('./Auth/AuthButtons');

var {
  StyleSheet,
  View,
  Text,
  Image,
  NavigatorIOS,
  TouchableOpacity,
  AsyncStorage
} = React;


var Homescreen = React.createClass({
  // getInitialState() {
  //   return {
  //     isLoading: true,
  //     isLoggedIn: false
  //   }
  // },

  // componentWillMount() {
  //   AsyncStorage.getItem('userId').then( val => {
  //     if (!val) {
  //       this.setState({
  //         isLoading: false,
  //         isLoggedIn: false
  //       })
  //     } else {
  //       this.setState({
  //         isLoading: false,
  //         isLoggedIn: true
  //       })
  //     }
  //   })
  // },


  playGame() {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Play,
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  },

  goToLogin() {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Auth,
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  },

  logout() {
    AsyncStorage.removeItem('userId')
      .then( () => {
        console.log('removing item from storage')
         console.log(this.props)
         this.props.user = null;
         // this.forceUpdate()
         console.log(this.props)
       }).done()
   
  },

  render() {
    console.log('rendering home screen:',this.props)
    var authButton;
    if (!this.props.user) {
      // authButton = <authButton onPress={this.goToLogin} />
      authButton = (
        <Button
          style={styles.btn}
          onPress={this.goToLogin}>
          {"Log in with Foursquare"}
        </Button>
      )
    } else {
        authButton = (
          <Button
            style={styles.btn}
            onPress={this.logout}>
            {"Log Out"}
          </Button>
      )
    }
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
          { authButton }
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
