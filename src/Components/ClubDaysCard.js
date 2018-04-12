import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Button, Animated } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import TriStateSwitch from './TriStateSwitch';
import styles from './Styles/ClubDaysCardStyles';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class ClubDaysCard extends React.Component {

  constructor(props){
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.nextClubday = this._getHighlightedClubDay();
    this.confirmedUsers = this._getConfirmedUsers();
    this.userReaction = this._getUserReaction();
  }

  _getHighlightedClubDay() {
    return this.props.clubdays.items[this.props.clubdays.items.length - 1];
  }

  _getConfirmedUsers() {
    return this.nextClubday.reactions
      .filter(r => r.reactionType === 'ATTEND');
  }

  _onChange(e) {
    console.log('ON CHANGE ---> ', e)
  }

  _getUserReaction() {
    const { user } = this.props;
    const userReaction = this.confirmedUsers
      .filter(r => r.userView.id === user.details.id);

    return userReaction.length <= 0 
      ? undefined 
      : userReaction[0].reactionType === 'ATTEND' 
        ? true 
        : false;
  }

  render() {
    const nextClubdayDate = moment(this.nextClubday.date);

    return (
      <TouchableOpacity style={[styles.clubdays_card__container]}>
        <View style={[styles.clubdays_date__container]}>
          <View style={[styles.clubdays_weekday__container]}>
            <Text style={[styles.clubdays_weekday__text]}>
              {nextClubdayDate.format('dddd')}
            </Text>
          </View>
          <View style={[styles.clubdays_day__container]}>
            <Text style={[styles.clubdays_day__text]}>
              {nextClubdayDate.format('DD')}
            </Text>
          </View>
          <View style={[styles.clubdays_month_year__container]}>
            <Text style={[styles.clubdays_month_year__text]}>
              {nextClubdayDate.format('MMMM YYYY')}
            </Text>
          </View>
          <View style={[styles.clubdays_location__container]}>
            <Text style={[styles.clubdays_location__text]}>De meern</Text>
            <EvilIcon name="location" size={12} color="#ED4C67" />
          </View>
        </View>
        <View style={[styles.clubdays_participants__container]}>
          <View style={[styles.clubdays_participation_summary__container]}>
            <Text style={[styles.clubdays_participants_count__text]}>{this.confirmedUsers.length}</Text>
            <Text style={[styles.clubdays_participants_desc__text]}>people confirmed...</Text>
          </View>
          <View style={[styles.clubdays_participation_inquiry__container]}>
            <Text style={[styles.clubdays_participation_inquiry__text]}>What about you?</Text>
          </View>
          <View style={[styles.clubdays_participation_switch__container]}>
            <TriStateSwitch
              AnimatedIcon={AnimatedIcon}
              leftIconName={'times'}
              middleIconName={'question'}
              rightIconName={'check'}
              userReaction={this.userReaction}
              onChange={this._onChange}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.user,
    clubdays: state.clubdays
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (username, token) => dispatch(UserActions.userDetailsRequest(username, token)),
    getClubDays: (token) => dispatch(ClubDaysActions.clubdaysRequest(token)),
    logout: () => dispatch(LoginActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubDaysCard);

