import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext, useState } from "react"
import { Button, TextInput, View, Text } from "react-native"
import { auth } from "../firebaseConfig"
import { getUserById } from "../functions"
import { UserContext } from "../contexts/User"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar"

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
    function handleSubmit() {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => getUserById(user.uid))
            .then((user) => { setUser(user) })
    }
    function nav() {
        navigation.navigate("SignUp");
        
    }
    return (
        <View>
            <Text>Email</Text>
            <TextInput placeholder="Email..." onChangeText={setEmail} value={email} />
            <Text>Password</Text>
            <TextInput placeholder="password..." onChangeText={setPassword} value={password} secureTextEntry={true} />
            <Button title="submit" onPress={handleSubmit} />
            <Button title='SignUp' onPress={nav} />
            <ExpoStatusBar/>
        </View>
    )
}
export default SignIn