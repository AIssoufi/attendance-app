import { Alert } from 'react-native';

export function displayMessageError(message) {
  return function (dispatch) {
    try {
      Alert.alert(
        'Oups !',
        message,
        [
          { text: 'OK', onPress: () => { } },
        ],
        { cancelable: false }
      );
    } catch (message) {
      console.log("error : ", message);
    }
  }
}