import { useContext, useState } from "react"
import { View, Text, Button, Image } from "react-native"
import { UserContext } from "../contexts/User"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import SignOutConfirmation from "../modals/SignOutConfirmation";
import ReactNativeModal from "react-native-modal";

const Profile = ({navigation}) => {
    const { user, setUser } = useContext(UserContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function handleSignOut() {
        setIsModalVisible(true)
    }
    console.log(user.image.toString())
    
    return (
        <View>
            <Image source={{ uri: user.image }} style={{height:300, width:300} } />
            <Text>First name: {user.firstName}</Text>
            <Text>Last name: {user.lastName}</Text>
            <SignOutConfirmation isModalVisible={isModalVisible} navigation={navigation} setIsModalVisible={setIsModalVisible} />
            <Button title="sign Out" onPress={handleSignOut}/>
            <ExpoStatusBar/>
        </View>
    )
}
export default Profile