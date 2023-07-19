import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";

const Nav = () => {
    const Stack = createNativeStackNavigator();
    const { user } = useContext(UserContext);
    const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
          {!user ?
            //   user signed in state
              <Stack.Navigator initialRouteName="SignIn">
                  <Stack.Screen name="SignIn" component={SignIn} />
                  <Stack.Screen name="SignUp" component={SignUp} />
              </Stack.Navigator>
              :
            //   user not signed in
              <Tab.Navigator>
                  <Tab.Screen name="home" component={Home}/>
              </Tab.Navigator>
          }
    </NavigationContainer>
  );
};
export default Nav;
