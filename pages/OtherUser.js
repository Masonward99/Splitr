import { View, Text } from "react-native"
import ProfileData from "../components/ProfileData"

function OtherUser({ route }) {
    const { user } = route.params
    
    return (
        <View>
            <ProfileData user={ user} />
        </View>
    )
}
export default OtherUser