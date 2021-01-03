import React, {useState, useEffect} from 'react'
import axios from 'axios'
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const listUsers = async() => {
            const { data } = await axios.get('/user')
            console.log(data)

            setUsers(data)
        }

        listUsers()
    }, [])

    return (
        <div>
            <h2>List Users</h2>
            {users.map(user => (
                <User key={user._id} user={user} />
            ))}
        </div>
    )
}

export default Users
