import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  clubdays_card__container: {
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 20,
    padding: 10,
  },
    clubdays_title__container: {
      flexDirection: 'row',
    },
      clubdays_title__text: {
        fontSize: 14,
      },
    clubdays_date__container: {
      flexDirection: 'row',
    },
      clubdays_day__container: {
        // backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1
      },
        clubdays_day__text: {
          fontWeight: 'bold',
          fontSize: 50,
          color: '#3c87b5',
          alignItems: 'flex-start',
          paddingRight: 5,
        },
      clubdays_rest_of_date__container: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
        clubdays_weekday__container: {
          // backgroundColor: 'blue',
          borderColor: 'black',
          borderWidth: 1
        },
          clubdays_weekday__text:{
            fontWeight: 'bold',
            fontSize: 26,
          },
        clubdays_month_year__container: {
          // backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: 1
        },
          clubdays_month_year__text: {
            fontSize: 14,
            fontWeight: '200',
          }
});