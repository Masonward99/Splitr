import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth } from '../firebaseConfig';
import { addUser } from "../functions";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("")
    const [state, setState] = useState(false)
    function handlePress() {
        if (email != '' && password != "" && first !== "" && last !== "") {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCred) => {
                    const user = userCred.user;
                    return user;
                })
                .then(user => {
                    addUser(user.uid, first, last);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            setState(true)
        }
    }
    return (
      <View>
        <Text>Email</Text>
        <TextInput onChangeText={setEmail} value={email} placeholder="email" />
        <Text>Password</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="password..."
          secureTextEntry={true}
        />
        <Text>First Name:</Text>
        <TextInput onChangeText={setFirst} value={first} placeholder="first name..." />
        <Text>Last name:</Text>
            <TextInput onChangeText={setLast} value={last} placeholder="last name..." />
            {state?<Text>fill in all fields</Text> :null}
        <Button onPress={handlePress} title="Submit" />
        <StatusBar />
      </View>
    );
}
export default SignUp