'use strict';

var React = require('react-native'),
    ScrollableTabView = require('react-native-scrollable-tab-view'),
    GoogleStaticMap = require('./GoogleStaticMap'),
    VenueGallery = require('./VenueGallery'),
    VenueInfo = require('./VenueInfo')

var {
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    ListView,
    TouchableHighlight,
    ScrollView
} = React;

class GameResultDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            venue: props.rowData,
            lat: props.lat,
            long: props.long
        }
    }

    render() {
        let venue = this.state.venue,
            vInfo = new VenueInfo(venue);

        return (
            <View style={styles.container}>
                <ScrollableTabView>
                    <View tabLabel="Info" style={styles.tabContainer}>
                        <VenueInfo {...venue} />
                    </View>
                    <View tabLabel="Gallery" style={styles.tabContainer}>
                        <VenueGallery photos={ venue.details.photos.groups[0].items.map(e => {
                            return e.prefix + 'width300' + e.suffix;
                        }) }/>
                    </View>
                    <View tabLabel="Directions" style={styles.tabContainer}>
                        <GoogleStaticMap xStart={ this.state.lat } yStart={ this.state.long} xEnd={ venue.location.lat } yEnd={venue.location.lng} />
                    </View>
                </ScrollableTabView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    tabContainer: {
        marginHorizontal: 15
    }
})

module.exports = GameResultDetails;
