var React = require('react-native');

var Button = require('./react-native-button');
var Play = require('./game-play');
var Feed = require('./feed');
var api = require('./utils/api');
var {
  StyleSheet,
  View,
  Text,
  Image,
  NavigatorIOS,
  TouchableOpacity,
  AsyncStorage,
  TabBarIOS
} = React;


var Homescreen = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      isLoggedIn: false,
      selectedTab: 'nomz',
      user: null,
    }
  },

  // On mount, check for user in Async Storage and update state accordingly
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
  //         isLoggedIn: true,
  //         user: val
  //       })
  //     }
  //   })
  // },

  componentWillMount() {
    console.log('mounting component...')
    let userId = this.props.userId;
    console.log('api call for user:', userId)
    api.fetchUser(userId)
      .then( (user) => {
        console.log('fetched user from api call:', user);
        this.setState({
          user: user,
          isLoggedIn: true,
          isLoading: false
        })
      })
  },

  renderFeed() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title: 'Feed',
          component: Feed,
          passProps: {user: this.state.user}
        }} />
    )
  },


  playGame() {
    this.props.navigator.push({
      title: 'Review Dishes',
      component: Play,
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  },

  goToLogin() {
    this.props.navigator.replace({
      title: 'Login',
      component: require('./Auth/auth'),
      backButtonTitle: ' '
      // backButtonTitle: 'Main Menu'
    });
  },

  goToFeed() {
    this.props.navigator.push({
      title: 'My Feed',
      component: require('./feed'),
      backButtonTitle: 'Home',
      passProps: { user: this.state.user }
    })
  },

  goToProfile() {
    this.props.navigator.push({
      title: 'Profile',
      component: require('./profile/profile'),
      backButtonTitle: 'Home',
      passProps: { user: this.state.user }
    })
  },

  logout() {
    // send logout request
    api.logout().then( res => {
      if (res.status === 200) {
        return AsyncStorage.removeItem('userId')
      }
    }).then( () => {
       // update the state to reflect logged out user
       this.props.user = null;
       this.setState({isLoggedIn: false, user: null});
       this.goToLogin()
     }).done()
  },

    setTab(tabId) {
    this.setState({ selectedTab: tabId })
  },

  render() {
    console.log('homepage Props:', this.props)
    console.log('homepage State:', this.state)
    var authButton;
    var feedButton;
    var profileButton;
    // if user logged in (according to state, render login button)
    if (!this.state.isLoggedIn) {
      authButton = (
        <Button
          style={styles.btn}
          onPress={this.goToLogin}>
          {"Log in"}
        </Button>
      );
      feedButton = <View></View>
      profileButton = <View></View>

    } else { // otherwise, render logout button
        authButton = (
          <Button
            style={styles.btn}
            onPress={this.logout}>
            {"Log Out"}
          </Button>
      ),
        // feedButton = <View></View>
      feedButton = (
        <Button
          style={styles.btn}
          onPress={this.goToFeed}>
          {"My Feed"}
        </Button>
      ),

      profileButton = (
        <Button
          style={styles.btn}
          onPress={this.goToProfile}>
          {'Profile'}
        </Button>
      )

    }
    return (

          <TabBarIOS tintColor='red' >
            <TabBarIOS.Item
              systemIcon='history'
              selected={ this.state.selectedTab === 'feed'}
              onPress={ () => this.setTab('feed') }>
              {this.renderFeed()}
            </TabBarIOS.Item>

            <TabBarIOS.Item
              systemIcon='search'
              selected={ this.state.selectedTab === 'nomz'}
              onPress={ () => this.setTab('nomz') }>
 
                    <View style={styles.container}>
        <Image source={{ uri: "nomz" , isStatic: true }} style={styles.bgImg} />
        <View style={{ marginTop: 65, backgroundColor: 'transparent' }}></View>
          <Button
            style={styles.btn}
            onPress={this.playGame}>
            {"Play Nomz!"}
          </Button>
          </View>

            </TabBarIOS.Item>

            <TabBarIOS.Item
              systemIcon='more'
              selected={ this.state.selectedTab === 'profile'}
              onPress={ () => this.setTab('profile') }>
              <View></View>
            </TabBarIOS.Item>

        </TabBarIOS>

    )
  }
});

Homescreen.propTypes = {
  userId: React.PropTypes.object.isRequired
}

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