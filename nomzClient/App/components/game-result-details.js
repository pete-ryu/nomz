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
        let url = 'http://localhost:1337/api/venue/' + this.state.rowData.id;
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

        let venueDetails = this.state.venueDetails,
            venueImage = venueDetails.categories[0].icon.prefix.replace('ss3.4sqi.net', 'foursquare.com') + 'bg_64' + venueDetails.categories[0].icon.suffix,
            lat = venueDetails.location.lat,
            lng = venueDetails.location.lng,
            gmapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=400x400&markers=color:red%7Clabel:C%7C${lat},${lng}&key=` + GOOGLE_MAPS_STATIC_API_KEY;

        // foursquare api is inconsistent with some of the fields: address, contact, url, etc.
        // rather than showing undefined, add them only if they actually exists
        let venAddress = [],
            venAddlInfo = [];

        let address2 = venueDetails.location.city;
        if (venueDetails.location.state)
            address2 += ', ' + venueDetails.location.state;

        if (venueDetails.location.postalCode)
            address2 += ', ' + venueDetails.location.postalCode;

        venAddress.push(venueDetails.location.address);
        venAddress.push(address2);

        if (venueDetails.location.crossStreet)
            venAddlInfo.push(venueDetails.location.crossStreet);

        if (venueDetails.contact.formattedPhone)
            venAddlInfo.push(venueDetails.contact.formattedPhone);

        if (venueDetails.url)
            venAddlInfo.push(venueDetails.url);

        return (
            <View style={styles.container}>
                <View style={styles.venueDetailsContainer}>
                    <Image style={styles.venueMap} source={{ uri: gmapUrl }} >
                        <View style={styles.venueDetailsHeader}>
                            <Text style={styles.venueDetailsHeaderText}>
                            { venueDetails.name }
                            </Text>
                            <Image style={styles.venueImage} source={{uri: venueImage }} />
                        </View>
                    </Image>
                </View>
                <View>
                   <View style={styles.venueDetails}>
                        <Text style={styles.venueAddress}>{ venAddress.join('\n') }</Text>
                        <Text>{ venAddlInfo.join('\n') }</Text>
                    </View>
                </View>
                {(() => {
                    if (venueDetails.bestPhoto)
                        return (<View style={styles.venueDetailsContainer}> 
                            <Image style={styles.venueMap} source={{uri: venueDetails.bestPhoto.prefix + 'width' + venueDetails.bestPhoto.width + venueDetails.bestPhoto.suffix }} />
                        </View>)
                })()}
               
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
        marginHorizontal: 10,
        marginTop: 70,
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    venueDetailsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D7D7D7',
        padding: 5
    },
    venueDetailsHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    venueDetailsHeaderText: {
        fontSize: 20,
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
        height: 150,
        flexDirection: 'row',
        padding: 5
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
