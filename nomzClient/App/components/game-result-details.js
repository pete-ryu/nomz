'use strict';

var React = require('react-native');
const GOOGLE_MAPS_STATIC_API_KEY = 'AIzaSyBxQQR-fISGZgbA0YkjOqEJ4JLfzbaOrKA';

var {
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    ListView,
    TouchableHighlight
} = React;

class GameResultDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: props.rowData
        }
    }

    componentDidMount() {
        var url = 'http://localhost:1337/api/venue/' + this.state.rowData.id;
        fetch(url)
            .then((res) => res.json())
            .then((resData) => {
                console.log(resData);
                this.setState({
                    venueDetails: resData
                });
            })
            .done();
    }

    render() {

        if (!this.state.venueDetails) {
            return this.renderLoadingView();
        }

        var venueDetails = this.state.venueDetails,
            venueImage = venueDetails.categories[0].icon.prefix.replace('ss3.4sqi.net', 'foursquare.com') + 'bg_64' + venueDetails.categories[0].icon.suffix,
            lat = venueDetails.location.lat,
            lng = venueDetails.location.lng,
            gmapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=400x400&markers=color:red%7Clabel:C%7C${lat},${lng}&key=` + GOOGLE_MAPS_STATIC_API_KEY;

        return (
            <View style={styles.container}>
                <View style={styles.venueDetailsHeader}>
                    <Text style={styles.venueDetailsHeaderText}>
                    { venueDetails.name }
                    </Text>
                    <Image style={styles.venueImage} source={{uri: venueImage }} />
                </View>
                <View style={styles.venueDetailsContainer}>
                    <Image style={styles.venueMap} source={{ uri: gmapUrl }} />
                    <View style={styles.venueDetails}>
                        <Text style={styles.venueAddress}>
                        { venueDetails.location.address + '\n' }
                        { venueDetails.location.city + ', ' + venueDetails.location.state } { venueDetails.location.postalCode ? this.state.venueDetails.location.postalCode : ''  }
                        </Text>
                        <Text >
                        { venueDetails.location.crossStreet }
                        { '\n' + venueDetails.contact.formattedPhone }
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>
                  Loading
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    venueDetailsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        marginBottom: 250,
        borderColor: '#D7D7D7'
    },
    venueDetailsHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 70,
        flexDirection: 'row'
    },
    venueDetailsHeaderText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    venueDetails: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    venueMap: {
        justifyContent: 'center',
        width: 345,
        height: 200,
        marginTop: 5
    },
    venueAddress: {
        fontWeight: 'bold',
        paddingTop: 5
    },
    venueImage: {
        width: 20,
        height: 20,
        alignSelf: 'center',
    }
})

module.exports = GameResultDetails;
