import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Button, Animated } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/ClubDaysCardStyles';
import TriStateSwitch from './TriStateSwitch';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class ClubDaysCard extends React.Component {

  _getHighlightedClubDay() {
    return this.props.clubdays.items[this.props.clubdays.items.length - 1];
  }

  _willUserAttend() {
    const { user } = this.props;

    console.log('user', user);

    const x = this._getHighlightedClubDay().reactions
      .filter((r) => r.userView.id === user.details.id)
      // .map((r) => r.reactionType === 'ATTEND')
      // .reduce((a, b) => b, {});
    console.log('x', x);
    return x;
  }

  render() {
    return (
      <TouchableOpacity style={[styles.clubdays_card__container]}>
        <View style={[styles.clubdays_date__container]}>
          <View style={[styles.clubdays_weekday__container]}>
            <Text style={[styles.clubdays_weekday__text]}>Friday</Text>
          </View>
          <View style={[styles.clubdays_day__container]}>
            <Text style={[styles.clubdays_day__text]}>20</Text>
          </View>
          <View style={[styles.clubdays_month_year__container]}>
            <Text style={[styles.clubdays_month_year__text]}>April 2018</Text>
          </View>
          <View style={[styles.clubdays_location__container]}>
            <Text style={[styles.clubdays_location__text]}>De meern</Text>
            <EvilIcon name="location" size={12} color="#ED4C67" />
          </View>
        </View>
        <View style={[styles.clubdays_participants__container]}>
          <View style={[styles.clubdays_participation_summary__container]}>
            <Text style={[styles.clubdays_participants_count__text]}>39</Text>
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

