import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const ProfileNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Edit' component={EditProfile}/>
        </Stack.Navigator>
    )

}
export default ProfileNavigator