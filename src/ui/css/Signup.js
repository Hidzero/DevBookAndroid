import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4b0081',
      alignItems: 'center',
      justifyContent: 'center',
    },
    login: {
      backgroundColor: '#fff',
      width: 300,
      height: 550,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    separate: {
      height: 1,
      margin: 10,
      width: '80%',
      backgroundColor: '#000',
      alignSelf: 'center',
    },
    textInput: {
      alignSelf: 'center',
      margin: 10,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    logo: {
      alignSelf: 'center',
      margin: 10,
    },
    textLogo: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    loginText: {
      alignSelf: 'center',
      marginTop: 10,
      color: '#0000FF',
    },
  });

  
  export { styles };