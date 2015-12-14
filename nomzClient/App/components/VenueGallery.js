'use strict';

var React = require('react-native'),
    {
        Dimensions,
        Component,
        StyleSheet,
        Image,
        ListView,
        View
    } = React,
    deviceWidth = Dimensions.get('window').width,
    deviceHeight = Dimensions.get('window').height;


class VenueGallery extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        this.state = {
            dataSource: ds.cloneWithRows(props.photos)
        }
    }

    get view() {
        return (
            <View style={styles.container}>
		            <ListView contentContainerStyle={styles.list}
					        dataSource={this.state.dataSource}
					        renderRow={(rowData) => <Image style={styles.item} source={{ uri: rowData }} /> }
					/>
            </View>     
        );
    }
}

var styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        left: -45,
        backgroundColor: 'black',
        height: deviceHeight
    },
    list: {
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
    },
    item: {
        margin: 10,
        width: 100,
        height: 100
    }
});

module.exports = VenueGallery;
