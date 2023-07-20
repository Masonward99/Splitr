import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar"
import { Text , TouchableOpacity, View} from "react-native"

function UserCard({ data, navigation }) {
    const user  = data.item
    function handlePress() {
        navigation.navigate('UserProfile', { user });
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text>{user.name}</Text>
        </TouchableOpacity>
    )

}
export default UserCard