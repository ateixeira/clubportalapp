import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  user_card__container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
    profile__link: {
      flex: 3
    },
    profile__container: {
      flex: 4,
      flexDirection: 'row',
    },
      profile__badge_container: {
        flex: 1,
        justifyContent: 'center',
      },
      profile__name_container: {
        flex: 4,
        justifyContent: 'center'
      },
        profile__name_text: {
          fontSize: 18,
          color: '#ffffff'
        },
        profile__name_email: {
          fontSize: 11,
          color: '#ffffff'
        },
    controls__container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 35,
      paddingRight: 5,
    },
});