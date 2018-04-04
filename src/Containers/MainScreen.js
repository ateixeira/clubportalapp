import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/MainScreenStyles';
import LoginActions from '../Redux/Login';
import UserActions from '../Redux/User';

class MainScreen extends Component {
  componentDidMount(){
    const { username, token } = this.props.login;
    this.props.getUserDetails(username, token);
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.user_card__container}>
          {/* {this.props.user.isFetching ? loadingMsg : userCard} */}
        </View>
        <View style={styles.content__container}>
        </View>

        <TouchableOpacity onPress={this.props.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

MainScreen.navigationOptions = {
  title: 'Main Screen',
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (username, token) => dispatch(UserActions.userDetailsRequest(username, token)),
    logout: () => dispatch(LoginActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
