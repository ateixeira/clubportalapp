import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LoginActions from '../Redux/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Protected content</Text>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logout())
  }
}

export default connect(null, mapDispatchToProps)(MainScreen);
