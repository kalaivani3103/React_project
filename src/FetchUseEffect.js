import React, { useEffect, useState } from 'react'

export default function FetchUseEffect() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setData(users))
    }, [])


    return (
        <>

            {
                data.map((user) => <li key={user.id}>{user.id}-{user.name}-{user.email}-{user.address.city}</li>)
            }

        </>
    )
}