import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function AxiosUseEffect() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => setData(users.data)) //because response come with status code like that.
            .catch(error=> console.log(`Error Fetching user local data ${error}`))
    }, [])


    return (
        <>

            {
                data.map((user) => <li key={user.id}>{user.id}-{user.name}-{user.email}-{user.address.city}</li>)
            }

        </>
    )
}