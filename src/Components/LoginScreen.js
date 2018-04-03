import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import styles from './Styles/LoginScreenStyles';
import { Images } from '../Themes';
import LoginActions from '../Redux/Login';
import * as hoc from './Hocs';

const DismissKeyboardView = hoc.DismissKeyboard(View);
const FullSCreenSpinnerAndDismissKeyboardView = hoc.Spinner(
  DismissKeyboardView
);
const KeyboardAwareView = hoc.KeyboardAware(View);
const KeyboardAwareImage = hoc.KeyboardAware(View);

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'andreteixeira',
      password: ''
    }
    this.isAttempting = false
  }

  render() {
    return (
      <FullSCreenSpinnerAndDismissKeyboardView spinner={this.props.fetching} style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
          <KeyboardAwareView style={styles.keyboardAwareView} styleDuringKeyboardShow={{ marginBottom: 10 }}>
            <KeyboardAwareImage resizeMode="contain" style={styles.keyboardAwareImage}
              styleDuringKeyboardShow={{ opacity: 0.5 }} source={Images.logo} />
          </KeyboardAwareView>
          <TextInput
            placeholder="Username"
            keyboardType='default'
            autoCapitalize='none'
            autoCorrect={false}
            style={[styles.textInput]}
            onChangeText={(username) => this.setState({ username: username })}
          />
          <TextInput
            placeholder="Password"
            returnKeyType='go'
            secureTextEntry
            style={[styles.textInput, { marginVertical: 20 }]}
            ref={(input) => this.passwordInput = input}
            onChangeText={(password) => this.setState({ password: password })}
          />
          <TouchableOpacity onPress={this.submitLogin} style={[styles.button]}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>SIGN IN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.footerContainer}>
          <Text style={{ alignSelf: 'center', color: '#A6A8A9', fontSize: 15 }}> Don’t have an account yet ?</Text>
          <TouchableOpacity style={[styles.footer]}>
            <Text style={{ color: '#25bade', fontSize: 15 }}> Activate your account </Text>
          </TouchableOpacity>
        </View>
      </FullSCreenSpinnerAndDismissKeyboardView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)