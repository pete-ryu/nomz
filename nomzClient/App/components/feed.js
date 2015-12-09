'use strict';

var React = require('react-native');

var {
  Component,
  View,
  ListView,
  Image,
  ActivityIndicatorIOS
} = React;

var api = require('./utils/api');

class Feed extends Component{
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasCHanged: (row1, row2) => row1 !== row2
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
    this.state.isLoading: false
  }

  _renderPost(data) {
    // return a view with the passed in data
    return (
      <View>
        <Image />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color='#111'
          size='large' />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderPost.bind(this)}
          onEndReached={this._endLoading.bind(this)}
      </View>
    )
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})