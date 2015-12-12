"use strict";
 
var React = require("react-native");
var api = require('../utils/api');
var Button = require('../react-native-button');
var Home = require('../home-screen');
var {
    Component,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    AsyncStorage
} = React;
  
class LoginView extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoading: false,
            error: false
        };
        // this.onSubmitPressed = this.onSubmitPressed.bind(this)
    }
 
   onSubmitPressed() {
        console.log('submit Pressed')
        // console.log(this.state)
        this.setState({
            isLoading: true
        })
        // Make api post request and login user
        // go to next state
        api.login({
            email: this.state.email.trim(),
            password: this.state.password.trim()
        }).then( (res) => {
            console.log('inside the then', res.user._id.toString())
            return AsyncStorage.setItem('userId', res.user._id)
        }).then( (id) => {
            console.log('stored to asyncStorage:', id);
            this.props.navigator.replace({
                component: Home,
                passProps: { user: id }
            })
        }).catch( val => {
            console.log(val)

        })

        .done()
    }


    render() {
        // console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign In
                </Text>
                <View>
                    <TextInput
                        placeholder="Email"
                        onChange={(event) => this.setState({email: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.email} />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <Button
                        style={styles.btn}
                        onPress={this.onSubmitPressed.bind(this)} >
                        {"Login"}
                    </Button>

                </View>
            </View>
        );
    }
 
    // onSubmitPressed() {
    //     console.log('submit Pressed')
    //     // Make api post request and login user
    //     // go to next state
    //     api.login({
    //         email: this.state.email,
    //         password: this.state.password
    //     }).then( res => {
    //         if (res.message === 'Invalid login credentials.') {
    //             console.log("Invalid login!")
    //         } else {
    //             console.log(res)
    //         }
    //     })
    // }
 
};
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    btn: {
      flexDirection: 'row',
      width: 300,
      fontSize: 20,
      color: 'black',
      padding: 10,
      marginBottom: 20,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#007aff'
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});
 
                    //  <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
                    //     <Text style={styles.buttonText}>Submit</Text>
                    // </TouchableHighlight>
module.exports = LoginView;