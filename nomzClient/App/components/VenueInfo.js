'use strict';

var React = require('react-native'),
    {
        Dimensions,
        Component,
        StyleSheet,
        Text,
        View,
        Image
    } = React,
    deviceWidth = Dimensions.get('window').width,
    deviceHeight = Dimensions.get('window').height;


class VenueInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            address: props.location.address,
            city: props.location.city,
            state: props.location.state,
            postalCode: props.location.postalCode,
            icon: props.categories[0].icon.prefix.replace('ss3.4sqi.net', 'foursquare.com') + 'bg_64' + props.categories[0].icon.suffix,
            checkinsCount: props.stats.checkinsCount,
            usersCount: props.stats.usersCount,
            phone: props.details.contact.formattedPhone,
            tips: props.tips ? props.tips.groups : [],
            photo: props.details.bestPhoto.prefix.replace('ss3.4sqi.net', 'foursquare.com') + 'width' + deviceWidth + props.details.bestPhoto.suffix,
            url: props.details.url
        }
    }

    get view() {
        // foursquare api is inconsistent with some of the fields: address, contact, url, etc.
        // rather than showing undefined, add them only if they actually exists
        let venAddress = [],
            venAddlInfo = [];

        let address2 = this.state.city;
        if (this.state.state)
            address2 += ', ' + this.state.state;

        if (this.state.postalCode)
            address2 += ', ' + this.state.postalCode;

        venAddress.push(this.state.address);
        venAddress.push(address2);

        if (this.state.phone)
            venAddlInfo.push(this.state.phone);

        if (this.state.url)
            venAddlInfo.push(this.state.url);

        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>
                    <View>
                        <Image source={{ uri: this.state.photo }} style={styles.banner} />
                        <View style={styles.stats}>
                            <View style={styles.statBoxLeft}>
                                <Text style={styles.statBoxText}>{this.state.checkinsCount} CHECKINS</Text>
                            </View>
                            <View style={styles.statBoxRight}>
                                <Text style={styles.statBoxText}>{this.state.usersCount} VISITORS</Text>
                            </View>
                        </View>
                        <View style={styles.descriptionBox}>
                            <Text style={styles.description}>{venAddress.join('\n') }</Text>
                        </View>
                        <View style={styles.descriptionBox}>
                            <Text style={styles.description}>{ this.state.phone }</Text>
                        </View>
                        <View style={styles.descriptionBox}>
                            <Text style={styles.description}>{this.state.url}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: deviceWidth,
        height: deviceHeight,
        left: -15,
        backgroundColor: 'black',
        top: 0,
        bottom: 0,
        right: 0
    },
    banner: {
        flex: 1,
        flexDirection: 'column',
        height: deviceHeight / 4, 
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9
    },
    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statBoxLeft: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#21618C',
        width: Math.floor(deviceWidth / 2),
        height: Math.floor(deviceHeight / 8),
        justifyContent: 'center'
    },
    statBoxRight: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#154360',
        width: Math.ceil(deviceWidth / 2),
        height: Math.floor(deviceHeight / 8),
        justifyContent: 'center'
    },
    statBoxText: {
      fontFamily: 'Arial',
      color: 'white',
      fontWeight: 'bold',
      shadowColor: 'black',
      shadowOffset: {
        height: 1,
        width: 1
      },
      shadowRadius: 1,
      shadowOpacity: 0.9,
      backgroundColor: 'transparent'
    },
    descriptionBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Math.floor(deviceHeight / 12),
        width: deviceWidth,
        backgroundColor: '#1B2631',
        borderBottomColor: '#154360',
        borderBottomWidth: 1,
    },
    description: {
        color: 'white', 
        fontSize: 15
    }
});

module.exports = VenueInfo;
