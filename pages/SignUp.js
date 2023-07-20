import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth } from '../firebaseConfig';
import { addUser, getUserById } from "../functions";
import { UserContext } from "../contexts/User";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [state, setState] = useState(false)
    const {setUser} = useContext(UserContext)
    function handlePress() {
        if (email != '' && password != "" && name !== "" ) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCred) => {
                    const user = userCred.user;
                    return user;
                })
                .then(user => {
                    addUser(user.uid, name);
                    return user.uid
                })
                .then((user) => {
                    getUserById(user)
                })
                .then((user)=>setUser(user))
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