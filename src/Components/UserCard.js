import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/UserCardStyles';

class UserCard extends React.Component {
  render() {
    return (
      <View style={[styles.user_card__container]}>
        <TouchableOpacity style={[styles.profile__link]}>
          <View style={[styles.profile__container]}>
            <View style={[styles.profile__badge_container]}>
              <Icon name="user-circle" size={34} color="#ffffff" />
            </View>
            <View style={[styles.profile__name_container]}>
              <Text style={[styles.profile__name_text]}>{this.props.user.details.firstName} {this.props.user.details.lastName} </Text>
              <Text style={[styles.profile__name_email]}>{this.props.user.details.email} </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.controls__container]}>
          <TouchableOpacity onPress={this._showNotifications}>
            <Icon name="bell" size={30} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="cog" size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default UserCard;
