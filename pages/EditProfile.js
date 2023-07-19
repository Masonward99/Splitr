import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, View, Text } from 'react-native';
import { addProfilePic } from '../functions';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const EditProfile = () => {
    const { user } = useContext(UserContext);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0,
        })
            if (!result.canceled){ 
                addProfilePic(user.id, result.assets[0].uri)
                .then((res)=> console.log(res))

    }
}
    return (
        <View>
            <TouchableOpacity onPress={pickImage}>
                <Text>Select image from camera roll</Text>
            </TouchableOpacity>
        </View>
    )
    
}
export default EditProfile