import React from 'react';
import { connect } from 'react-redux';
import { View, 
  Text, 
  TouchableOpacity, 
  Button, 
  Animated,
  Dimensions } 
from 'react-native';
import moment from 'moment';

import ClubDaysCardDate from './ClubDaysCardDate';
import ClubDaysCardParticipants from './ClubDaysCardParticipants';
import styles from './Styles/ClubDaysCardStyles';

const { width, height } = Dimensions.get('window');

class ClubDaysCard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      clubDaysCardExpanded: false,
    }

    this._toggleClubdayCard = this._toggleClubdayCard.bind(this);
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

  _toggleClubdayCard() {
    this.setState({
      ...this.state,
      clubDaysCardExpanded: !this.state.clubDaysCardExpanded,
    })
    console.log(`Clubday expand ---> ${this.state.clubDaysCardExpanded}`)
  }

  render() {
    const nextClubdayDate = moment(this.nextClubday.date);

    return (
      <TouchableOpacity style={[
        styles.clubdays_card__container]}
        onPress={this._toggleClubdayCard}>
        <View ref="container"
          style={[{ alignItems: 'center' }]}>

          <ClubDaysCardDate nextClubdayDate={nextClubdayDate} />
          <ClubDaysCardParticipants confirmedUsers={this.confirmedUsers} />
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.user,
    clubdays: state.clubdays,
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

