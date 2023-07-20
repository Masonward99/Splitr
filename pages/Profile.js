import { useContext, useState, useEffect } from "react"
import { View, Text, Button, Image, TouchableOpacity } from "react-native"
import { UserContext } from "../contexts/User"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import SignOutConfirmation from "../modals/SignOutConfirmation";
import { getUserById } from "../functions";

const Profile = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function handleSignOut() {
        setIsModalVisible(true);
    }
    function handleEdit() {
        navigation.navigate("Edit")
    }
    
    return (
        <View>
            <Image source={{ uri: user.image }} style={{height:300, width:300} } />
            <Text>First name: {user.firstName}</Text>
            <Text>Last name: {user.lastName}</Text>
            {user.bio !== '' ? <Text>Bio: {user.bio}</Text> : null}
            <SignOutConfirmation isModalVisible={isModalVisible} navigation={navigation} setIsModalVisible={setIsModalVisible} />
            <TouchableOpacity onPress={handleEdit} >
                <Text>Edit</Text>
            </TouchableOpacity>
            <Button title="sign Out" onPress={handleSignOut}/>
            <ExpoStatusBar/>
        </View>
    )
}
export default Profile