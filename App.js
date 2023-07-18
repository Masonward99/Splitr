import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function App() {

  const Stack = createNativeStackNavigator()

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
