import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth } from '../firebaseConfig';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("")
    function handlePress() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          const user = userCred.user;
          console.log(user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    return (
      <View>
        <Text>Email</Text>
        <TextInput onChangeText={setEmail} value={email} placeholder="email" />
        <Text>password</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
        <Text>First Name:</Text>
        <TextInput onChangeText={setFirst} value={first} placeholder="first name..." />
        <Text>Last name:</Text>
        <TextInput onChangeText={setLast} value={last} placeholder="last name..." />
        <Button onPress={handlePress} title="Submit" />
        <StatusBar />
      </View>
    );
}
export default SignUp