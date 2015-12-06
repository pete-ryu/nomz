'use strict';

var React = require('react-native');
var GameResultDetails = require('./game-result-details');

var {
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    ListView,
    TouchableHighlight,
    NavigatorIOS,
    ActivityIndicatorIOS,
    Dimensions
} = React;

class GameResults extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds,
            lat: props.lat,
            long: props.long,
            loading: true,
            loaderYAxis: Dimensions.get('window').height
        }
    }

    componentDidMount() {
        let url = `http://localhost:1337/api/venue/near?lat=${this.state.lat}&long=${this.state.long}`;

        fetch(url)
            .then((res) => res.json())
            .then((resData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resData)
                });
            })
            .done();
    }

    renderRow(rowData) {
        // Use first category's image
        // Replace the url from the venue endpoint because it was returning xml instead of actual image
        var venueImage = rowData.categories[0].icon.prefix.replace('ss3.4sqi.net', 'foursquare.com') + 'bg_64' + rowData.categories[0].icon.suffix,
            venueDistance = rowData.location ? parseFloat((parseInt(rowData.location.distance) * 0.000621371)).toFixed(2) : '(?)';

        return (
            <TouchableHighlight onPress={() => this._onPress(rowData)} underlayColor='#ddd'>
              <View style={styles.rowContent}>
                <View >
                  <Image style={styles.venueImage} source={{uri: venueImage }} />
                </View>
                <View style={styles.venueDetails}>
                  <View style={styles.venueDetailsLeft}>
                    <Text style={{fontWeight: 'bold'}}>
                      { rowData.name }
                    </Text>
                    <Text>
                    { rowData.location 
                        ? rowData.location.address + '\n' + rowData.location.city + ', ' + rowData.location.state + ' ' + rowData.location.postalCode
                        : '(Not Available)' 
                    }
                    </Text>
                  </View>
                  <View style={styles.venueDetailsRight}>
                    <Text>
                      { venueDistance + ' mi' }
                    </Text>
                    <View style={styles.checkin}>
                        <Text>
                          { rowData.stats.checkinsCount }
                        </Text>
                        <Image style={styles.checkinImage} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/eldorado-mobile/40/location_current-20.png' }} />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicatorIOS
                    animating={this.state.loading}
                    style={[styles.centering, { height: this.state.loaderYAxis }]}
                    size='large' />
                <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)} onEndReached={ this._endLoading.bind(this) }/>
            </View>
        );
    }

    _onPress(rowData) {
        this.props.navigator.push({
            component: GameResultDetails,
            title: rowData.name,
            passProps: {
                rowData: rowData
            }
        });
    }

    _endLoading() {
        this.state.animating = false;
        this.state.loaderYAxis = 0;
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    rowContent: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingLeft: 10,
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
    },
    venueImage: {
        width: 50,
        height: 50
    },
    venueDetails: {
        flexDirection: 'row',
        flex: 1
    },
    venueDetailsLeft: {
        marginLeft: 10,
        flexDirection: 'column'
    },
    venueDetailsRight: {
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    checkinImage: {
        width: 20,
        height: 20
    },
    checkin: {
        flexDirection: 'row'
    }
});

module.exports = GameResults;
