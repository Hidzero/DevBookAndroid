import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4b0081',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50,
    },
    historyContainer: {
      width: '100%',
    },
    historyNameContainer: {
      width: '100%', 
      alignItems: 'flex-start',
      paddingLeft: 10, 
      margin: 20,
    },
    historyName: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    historyFeed: {
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 10,
    },
    historyFeedInfo: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
    },
    image: {
      resizeMode: 'contain',
    },
    addButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      position: 'absolute',
      top: 50,
      right: 10,
      zIndex: 10, // Garante que o botão esteja sobreposto
    },
    addButtonText: {
      color: '#4b0081',
    },
    perfilButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      position: 'absolute',
      top: 50,
      left: 10,
      zIndex: 10,
    },
    commentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      marginTop: 10,
    },
    commentInput: {
      flex: 1,
      padding: 5,
      color: '#000',
    },
    commentButton: {
      padding: 10,
      backgroundColor: '#4b0081',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    commentButtonText: {
      color: '#fff',
    },
    commentText: {
      color: '#fff',
      marginTop: 5,
    },
    comments: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    commentName: {
      color: '#fff',
      fontWeight: 'bold',
      marginRight: 5,
    },
  });

export { styles }