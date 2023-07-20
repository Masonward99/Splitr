import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UsersList from "../pages/UsersList";
import OtherUser from "../pages/OtherUser";

function UsersNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Users">
            <Stack.Screen name='Users' component={UsersList} />
            <Stack.Screen name='UserProfile' component={OtherUser}/>
        </Stack.Navigator>
    )
}
export default UsersNavigator