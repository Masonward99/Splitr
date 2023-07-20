import { useContext, useState, useEffect } from "react"
import { View, Text, Button, Image, TouchableOpacity } from "react-native"
import { UserContext } from "../contexts/User"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import SignOutConfirmation from "../modals/SignOutConfirmation";
import { getUserById } from "../functions";
import ProfileData from "../components/ProfileData";

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
            <ProfileData user={user}/>
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