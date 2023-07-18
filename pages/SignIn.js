import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Button, TextInput, View, Text } from "react-native"
import { auth } from "../firebaseConfig"

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit() {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => console.log(user.uid))
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
            <Button title='SignUp' onPress={nav}/>
        </View>
    )
}
export default SignIn