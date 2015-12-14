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
  ListView
} = React;

var { BlurView, VibrancyView} = require('react-native-blur');


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
    var id = this.props.user;
    api.fetchUser(id)
      .then( (data) => {
        console.log(data)
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
    if (!this.state.user) {
      return (
             <View style={styles.loading}>
                <Text>
                  Loading
                </Text>
            </View>
      )
    }

    var header = (
      <BlurView style={styles.header} blurType='light'>
        <Image style={styles.image} source={ { uri: 'https://avatars3.githubusercontent.com/u/12356761?v=3&s=460'} } />
        <Text>Hi, my name is</Text>
      </BlurView>
    )
    return (
    <ParallaxView
      style={styles.container}
      backgroundSource={ {uri:'nomz'}}
      windowHeight={200}
      header={(
      <View>
        {header}
      </View>
      )}>
  <View style={styles.bottom}>
    <SegmentedControlIOS values={['My Nomz', 'Want List', 'Followers', 'Following']} />
  </View>
</ParallaxView>



    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10
  },
  header: {
    // backgroundColor: 'green',
    // marginTop: 20
    paddingTop: 50,
    paddingBottom: 30
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
  }
})

module.exports = Profile;