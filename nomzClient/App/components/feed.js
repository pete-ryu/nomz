'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var api = require('./utils/api');

class Feed extends Component{
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      isLoading: true,
      dataSource: ds,
      error: false
    }

  }

  componentDidMount() {
    var id = 1
    api.fetchFeed(id)
      .then( data => {
        console.log(data)
        if (data.message === 'Not Found') {// Double check server error
          this.setState({
            error: 'Feed not found for user',
            isLoading: false
          })
        } else {
          this.setState ({
            dataSource: this.state.dataSource.cloneWithRows(data)
          })
        }

    }).done();
  }

  _endLoading() {
    this.state.isLoading = false
  }

  _renderPost(data) {
    // return a view with the passed in data
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Text> { `MenuItem: ${data.menuItem}` } </Text>
            <TouchableHighlight 
              // style={styles.nomzButton}
              underlayColor='transparant'>
              <Text> !NOMZ_ICON! </Text>
            </TouchableHighlight>
        </View>
        <Image 
          style={styles.postImage}
          source={{uri: data.imageUrl}}
        />
            <TouchableHighlight 
            // style={styles.postUser}
            underlayColor='transparant'>
              <Text style={styles.postUser}> { `User: ${data._id}` } </Text>
            </TouchableHighlight>
        <View>
          <Text> { data.caption } </Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} >
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color='#111'
            size='large' />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderPost.bind(this)}
            onEndReached={this._endLoading.bind(this)} />
        </View>
      </View>
    )
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  post: {
    borderWidth: 3,
    borderRadius: 3,
      borderColor: '#000',
    width: 400,
    height: 400,
    padding:10,
    marginBottom: 20
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  postImage: {
    height: 360,
    flex: 1
  },
  // postUser: {
  //   marginTop: 15
  // },
  postUser: {
    marginTop: 10,
    color: 'green'
  },


})

module.exports = Feed;