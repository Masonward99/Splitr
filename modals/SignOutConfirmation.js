import ReactNativeModal, { Modal } from "react-native-modal";
import { View, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function SignOutConfirmation({ isModalVisible, navigation, setIsModalVisible }) {
    const { setUser } = useContext(UserContext);
    function handleTrue() {
        signOut(auth)
        .then(setUser(false))
    }
    function hideModal() {
        setIsModalVisible(false)
    }
    return (
        <ReactNativeModal isVisible={isModalVisible} onBackdropPress={hideModal}>
            <View>
                <Text>Are you sure you would like to sign out?</Text>
                <TouchableOpacity onPress={handleTrue}>
                    <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hideModal}>
                    <Text>No</Text>
                </TouchableOpacity>
            </View>
        </ReactNativeModal>
    )
}
export default SignOutConfirmation