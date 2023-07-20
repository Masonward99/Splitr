import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileNavigator from "./ProfileNavigator";


const Nav = () => {
    const Stack = createNativeStackNavigator();
    const { user } = useContext(UserContext);
    const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
          {!user ?
            //   user not signed in
              <Stack.Navigator initialRouteName="SignIn">
                  <Stack.Screen name="SignIn" component={SignIn} />
                  <Stack.Screen name="SignUp" component={SignUp} />
              </Stack.Navigator>
              :
            //   user signed in
              <Tab.Navigator>
                  <Tab.Screen name="Own Profile" component={ProfileNavigator} options={{headerShown:false}}/>
              </Tab.Navigator>
          }
    </NavigationContainer>
  );
};
export default Nav;
