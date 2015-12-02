'use strict';

var React = require('react-native');

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

    getInitialState() {
        return {
            venueDetails: null,
        };
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

        return (
            <View style={styles.container}>
                <View style={styles.venueDetailsContainer}>
                    <Text style={styles.venueDetailsHeader}>
                    { this.state.venueDetails.name }
                    </Text>
                    <View style={styles.venueDetails}>
                        <Text numberOfLines={2}>
                        { this.state.venueDetails.location.address + '\n' }
                        { this.state.venueDetails.location.city + ', ' + this.state.venueDetails.location.state } { this.state.venueDetails.location.postalCode ? this.state.venueDetails.location.postalCode : ''  }
                        </Text>
                        <Text>
                        
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
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    rowContent: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
    },
    venueDetailsContainer: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 70,
        alignItems: 'center'
    },
    venueDetailsHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    venueDetails: {
        fontSize: 12,
        alignItems: 'center'
    }
})

module.exports = GameResultDetails;
