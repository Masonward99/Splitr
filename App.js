
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignUp from './pages/SignUp';

export default function App() {

  const Stack = createNativeStackNavigator()

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
