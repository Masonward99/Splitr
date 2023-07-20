import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, View, Text, Image, TextInput } from 'react-native';
import { addProfilePic, getUserById, updateProfile } from '../functions';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/User';

const EditProfile = ({navigation}) => {
    const { user, setUser } = useContext(UserContext);
    const [image, setImage] = useState(false)
    const [bio, setBio] = useState('')
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0,
        })
        if (!result.canceled) { 
                setImage(result.assets[0].uri)
        }
    }
    async function handleSubmit() {
        const res = await addProfilePic(user.id, image)
        updateProfile(user.id, res, bio)
            .then(()=>getUserById(user.id))
            .then((user)=> setUser(user))
            .then(navigation.navigate("Profile"))
        
    }
    return (
        <View>
            <TouchableOpacity onPress={pickImage}>
                <Text>Select image from camera roll</Text>
            </TouchableOpacity>
            {image ? <Image source={{ uri: image }} style={{ height: 200, width: 200 }} /> : null}
            <Text>Bio</Text>
            <TextInput value={ bio} onChangeText={setBio} placeholder='bio...' />
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Confirm changes</Text>
            </TouchableOpacity>
        </View>
    )
    
}
export default EditProfile