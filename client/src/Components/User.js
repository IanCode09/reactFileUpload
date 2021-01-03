import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Description: </p>
            <div>
            {user.description}
            </div>
        </div>
    )
}

export default User
