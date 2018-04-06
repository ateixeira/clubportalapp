import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 26,
      paddingTop: 26,
      paddingBottom: 18,
      backgroundColor: '#ffffff',
    },
      keyboard__avoiding__view: {
        flex: 1,
      },
        keyboard__aware__view: {
          flex: 2,
          marginBottom: 30,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center'
        },
          keyboard__aware__image: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
        subtitle: {
          flex:0.5,
          justifyContent: 'flex-end',
          alignSelf: 'center',
          color: 'black',
          fontSize: 14,
          fontWeight: '200'
        },
        text__input: {
          height: 60,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: '#ECF0F3',
          paddingHorizontal: 19
        },
        button: {
          height: 60,
          borderRadius: 3,
          backgroundColor: '#76c19f',
          justifyContent: 'center',
          alignItems: 'center'
        },
      footer__container: {
        paddingTop: 40,
      },
        footer: {
          alignSelf: 'center', 
          height: 34, 
          justifyContent: 'center'
        }
});