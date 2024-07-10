'use client'
import React, { useEffect, useState } from 'react'

export default function ClientApi() {
    const [user, setUser] = useState<any>()

    useEffect(() => {
        fetch("/api/user").then(res => res.json()).then(data => setUser(data))
    }, [])

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-4xl font-bold'>User Client API</h2>
            <p>{JSON.stringify(user)}</p>
            <div className='flex flex-col gap-2'>
                {user?.name && <span>Name: {user?.name}</span>}
                {user?.email && <span>Email: {user?.email}</span>}
                {user?.image && <span>ImageURL: {user?.image}</span>}
                {user?.message && <span>Message: {user?.message}</span>}
            </div>
        </div>
    )
}
