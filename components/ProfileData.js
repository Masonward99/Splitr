import { View, Image, Text } from "react-native"

function ProfileData({ user }) {
    return (
        <View>
            <Image source={{ uri: user.image }} style={{height:300, width:300} } />
            <Text>Name: {user.name}</Text>
            {user.bio !== '' ? <Text>Bio: {user.bio}</Text> : null}
        </View>
    )
}
export default ProfileData