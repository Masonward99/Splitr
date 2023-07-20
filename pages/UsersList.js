import { useContext, useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { UserContext } from "../contexts/User"
import { getUsersList } from "../functions"
import UserCard from "../components/UsersCard"

function UsersList({navigation}) {
    const { user } = useContext(UserContext)
    const [users, setUsers] = useState(false)
    useEffect(() => { getUsersList(user.id).then(users => setUsers(users)) }, [])
    function renderItem(item) {
        return <UserCard data={item} navigation={navigation}/>
    }
    return (
        <View>
            <Text>Users will go here</Text>
            <FlatList data={users} renderItem={renderItem}/>
        </View>
    )
}
export default UsersList