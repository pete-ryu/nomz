// cite your sources:
// http://browniefed.com/blog/2015/06/06/react-native-tinder-like-cards/
// https://github.com/brentvatne/react-native-animated-demo-tinder/blob/master/index.ios.js

'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  ActivityIndicatorIOS,
  Image,
  Navigator,
  TouchableOpacity,
  Animation
} = React;

const GAME_DATA_URL = 'http://localhost:1337/api/mock';

var Application = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
      connectError: false,
      gameSources: [],
      currentImage: {},
      answeredCount: 0,
      preferences: {
        likes: {},
        dislikes: {}
      },
      Yes: 0,
      No: 0,
      x: 0,
      y: 0,
      lastDragDirection: 'Drag and Release'
    }
  },

  componentDidMount: function() {
    this.fetchSourceData();
  },

  fetchSourceData: function() {
    var game_url = GAME_DATA_URL;
    if(this.props.mealType) {
      game_url += "/" + this.props.mealType;
    }
    fetch(GAME_DATA_URL)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        gameSources: this.state.gameSources.concat(response),
        // gameSources: response,
        loaded: true
      });
      this.advanceImage();
    })
    .catch((err) => {
      console.log("Error connecting to server!");
      this.setState({
        connectError: true
      });
    })
    .done();
  },

  advanceImage: function() {
    if(this.state.gameSources.length<5) {
      // fetch now so we don't have to wait when there are no images left
      this.fetchSourceData();
    }
    let next = this.state.gameSources.splice(0,1);
    this.setState({
      currentImageUrl: next[0].url,
      currentImageTags: next[0].tags,
      answeredCount: this.state.answeredCount++
    })
  },

  setPosition: function(e) {
    this.setState({
      x: this.state.x + (e.nativeEvent.pageX - this.drag.x),
      y: this.state.y + (e.nativeEvent.pageY - this.drag.y)
    });
    this.drag.x = e.nativeEvent.pageX;
    this.drag.y = e.nativeEvent.pageY;
  },

  resetPosition: function(e) {
    this.dragging = false;

    var xPos = e.nativeEvent.pageX;
    var windowWidth = windowSize.width;
    var tolerance = 0.15;
    var xDelta = Math.abs(this.dragStart.x - xPos);
    if( (tolerance*windowWidth) > xDelta ) {
      // didn't move image far enough
      // doesnt count as a swipe, just reset the image to center
      return this.setState({
        x: 0,
        y: 0,
      });
    }

    var liked = xPos > (windowWidth/2),
        displayText = liked ? 'Released right' : 'Released left';
    this.setState({
      answeredCount: ++this.state.answeredCount,
      x: 0,
      y: 0,
      lastDragDirection: displayText
    })

    // update preferences
    this.savePreference(liked);
    // now load next image
    this.advanceImage();
  },

  savePreference: function(like) {
    // for testing
    if(like) {
      this.setState({ Yes: ++this.state.Yes });
    } else {
      this.setState({ No: ++this.state.No });
    }

    let pref = like ? 'likes' : 'dislikes';
    this.state.currentImageTags.forEach((tag) => {
      this.state.preferences[pref][tag] = this.state.preferences[pref][tag] || 0;
      this.state.preferences[pref][tag]++;
    });
  },

  getRotationDegree: function(rotateTop, x) {
    var rotation = ( (x/windowSize.width) * 100)/3;
    var rotate = rotateTop ? 1 : -1,
        rotateString = (rotation * rotate) + 'deg';
    return rotateString;
  },

  getCardStyle: function() {
    var transform = [{translateX: this.state.x}, {translateY: this.state.y}];
    if (this.dragging) {
        transform.push({rotate: this.getRotationDegree(this.rotateTop, this.state.x)})
    }
    return {transform: transform};
  },

  _onStartShouldSetResponder: function(e) {
    this.dragging = true;
    this.rotateTop = e.nativeEvent.locationY <= 150;
    this.drag = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    };
    // save start position so we can calculate total change
    this.dragStart = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    };
    return true;
  },

  _onMoveShouldSetResponder: function(e) {
    return true;
  },

  render: function() {
    if(!this.state.loaded) {
      if(this.state.connectError)
        return this.renderMessageView("Error connecting to server");
      else
        return this.renderMessageView("Loading...");
    }
    return this.renderCard();
  },

  renderMessageView: function(text) {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 65 }}></View>
        <View style={styles.box}>
          <Text style={styles.myText}>{text}</Text>
        </View>
      </View>
    )
  },

  renderCard: function() {
    return (
      <View style={styles.container}>
          <View
            onResponderMove={this.setPosition}
            onResponderRelease={this.resetPosition}
            onStartShouldSetResponder={this._onStartShouldSetResponder}
            onMoveShouldSetResponder={this._onMoveShouldSetResponder}
            style={[styles.card, this.getCardStyle()]}
          >
            <Image
              source={{ uri: this.state.currentImageUrl }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.textLeft}>Rabbit, 10</Text>
              <Text style={styles.textRight}>1 Connection</Text>
            </View>
          </View>
          <View>
            <Text>{this.state.currentImageUrl}</Text>
            <Text>{this.state.currentImageTags}</Text>
            <Text>{this.state.answeredCount}</Text>
            <Text>{this.state.Yes}</Text>
            <Text>{this.state.No}</Text>
          </View>
          <View style={styles.dragText}>
            <Text>{this.state.lastDragDirection}</Text>
          </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dragText: {
    position: 'absolute',
    bottom: 65,
    left: 0
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10
  },
  cardImage: {
    height: 260,
  },
  textLeft: {
    position: 'absolute',
    left:0,
    top:0
  },
  textRight: {
    position: 'absolute',
    right: 0,
    top: 0
  }
});

module.exports = Application;
