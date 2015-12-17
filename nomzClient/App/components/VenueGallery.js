'use strict';

var React = require('react-native'),
    {
        Dimensions,
        Component,
        StyleSheet,
        Image,
        ListView,
        View,
        TouchableOpacity,
        Modal
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
            dataSource: ds.cloneWithRows(props.photos),
            animated: true,
            modalVisible: false,
            transparent: false
        }
    }

    _setModalVisible(visible, imageUrl) {
        this.setState({
            modalVisible: visible,
            imageUrl: imageUrl
        });
    }

    _toggleAnimated() {
        this.setState({
            animated: !this.state.animated
        });
    }

    _toggleTransparent() {
        this.setState({
            transparent: !this.state.transparent
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal  animated={this.state.animated}
                        transparent={this.state.transparent}
                        visible={this.state.modalVisible}>
                    <View>
                        <TouchableOpacity onPress={ this._setModalVisible.bind(this, false) }>
                            <Image style={{ height: deviceHeight, width: deviceWidth }} resizeMode={ Image.resizeMode.contain } source={{ uri: this.state.imageUrl }} />
                        </TouchableOpacity>
                    </View>
                </Modal>
                <ListView contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                    <TouchableOpacity onPress={ this._setModalVisible.bind(this, true, rowData) }>
                        <Image style={styles.item} source={{ uri: rowData }} />
                    </TouchableOpacity> } />
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
        width: deviceWidth / 3,
        height: deviceWidth / 3
    }
});

module.exports = VenueGallery;
