// Dependencies
import { createStackNavigator } from 'react-navigation';

// Screens
import LogInScreen from '../screens/LogInScreen';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator(
  {
    LogIn: LogInScreen,
    SignIn: SignInScreen
  },
  {
    initialRouteName: 'LogIn'
  }
);

export default AuthStack;