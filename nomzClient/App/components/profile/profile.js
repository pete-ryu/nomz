'use strict';
var React = require('react-native');
var Badge = require('./badge');
var api = require('../utils/api');
var ParallaxView = require('react-native-parallax-view');
var {
  Text,
  View,
  StyleSheet,
  Image,
  Component,
  SegmentedControlIOS,
  ListView,
  ScrollView,
  Dimensions
} = React;

var Post = require('../post.js');
var { BlurView, VibrancyView} = require('react-native-blur');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var deviceWidth = Dimensions.get('window').width;

class Profile extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      dataSource: ds,
      isLoading: true,
      user: null,
      error: null
    }
  }

  componentWillMount() {
    var id = this.props.user._id;
    api.fetchUser(id)
      .then( (data) => {
        console.log('Profile component mounting, received:', data)
        this.setState({
          isLoading: false,
          user: data
        })
      }).catch( (err) => {
        this.setState({
          isLoading: true,
          error: err
        })
      })
  }

  render() {
    // var user = this.state.user || null

    console.log('in Profile. State:', this.state);
    console.log('in Profile. Props:', this.props);
    if (!this.props.user) {
      return (
             <View style={styles.loading}>
                <Text>
                  Loading
                </Text>
            </View>
      )
    }

    var header = (
      <View style={styles.header}>
        <Image style={styles.image} source={ { uri: 'https://avatars3.githubusercontent.com/u/12356761?v=3&s=460'} } />
        <View style={styles.headerStats}>
          <Text>XX Posts</Text> 
          <Text>XX Followers</Text> 
          <Text>XX Following</Text>
        </View>
      </View>
    )

    var posts = this.props.user.posts.map( (post, idx) => {
      return (
        <View key={idx}>
          <Post postData={post} />
        </View>
      )
    })
    return (
      <View style={styles.container}>
        {header}
        <ScrollableTabView>
          <ScrollView tabLabel='Posts' contentContainerStyle={styles.tabView}>
            <View>
              {posts}
            </View>
          </ScrollView>
          <ScrollView tabLabel='Followers' contentContainerStyle={styles.tabView}>
          </ScrollView>
          <ScrollView tabLabel='Following' contentContainerStyle={styles.tabView}>
            <View>
              <Text>My third Tab</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
    // marginTop: 10
  },
  header: {
    backgroundColor: 'green',
    marginTop: 30,
    paddingTop: 50,
    paddingBottom: 30
  },
  headerStats: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row'
  },
  bottom: {
    backgroundColor: 'blue',
    height: 400
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    alignSelf: 'center'
  },
  badge: {
    // marginTop: 30,
    marginBottom: 0
  },
  tabView: {
    width: deviceWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'yellow'
  }
})

module.exports = Profile;