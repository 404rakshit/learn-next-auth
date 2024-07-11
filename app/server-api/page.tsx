import { headers } from "next/headers"

export default async function ClientApi() {
    
    const user = await fetch("http://localhost:3000/api/user", {
        method: "GET",
        headers: headers()
    }).then(res => res.json())

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-4xl font-bold'>User Server API (RSC)</h2>
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