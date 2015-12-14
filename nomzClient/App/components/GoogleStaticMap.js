'use strict';

var React = require('react-native'),
    {
        Dimensions,
        Component,
        StyleSheet,
        View,
        Image
    } = React,
    deviceWidth = Dimensions.get('window').width,
    deviceHeight = Dimensions.get('window').height;

const GOOGLE_MAPS_STATIC_API_KEY = 'AIzaSyBxQQR-fISGZgbA0YkjOqEJ4JLfzbaOrKA';

class GoogleStaticMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xStart: props.xStart,
            yStart: props.yStart,
            xEnd: props.xEnd,
            yEnd: props.yEnd
        }
    }

    get url() {
        return `https://maps.googleapis.com/maps/api/staticmap?feature:road&visibility:simplified&path=color:0xff0000ff|weight:3|${this.state.xStart},${this.state.yStart}|${this.state.xEnd},${this.state.yEnd}&center=${this.centerCoordinate.X},${this.centerCoordinate.Y}&zoom=${this.zoomLevel}&size=${deviceWidth}x${deviceHeight}&key=${GOOGLE_MAPS_STATIC_API_KEY}`;
    }

    get centerCoordinate() {
        return {
            X: ((this.state.xStart + this.state.xEnd) / 2),
            Y: ((this.state.yStart + this.state.yEnd) / 2)
        }
    }

    get zoomLevel() {
        var d = Math.sqrt(Math.pow((this.state.xEnd - this.state.xStart), 2) + Math.pow((this.state.yEnd - this.state.yStart), 2));
        return d * 26;
    }

    get view() {
        return (
            <View>
        	   <Image style={styles.map} source={{ uri: this.url }} />
        	</View>
        );
    }
}

var styles = StyleSheet.create({
    map: {
        width: deviceWidth,
        left: -75,
        justifyContent: 'center',
        height: deviceHeight - 150,
    }
})

module.exports = GoogleStaticMap;
