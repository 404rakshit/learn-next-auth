'use client'

import { useState } from "react"

export default function User({ serverFucn }: { serverFucn: () => Promise<string> }) {
    const [name, setName] = useState<string>()
    return (
        <div className='flex flex-col gap-2'>
            <section className="flex justify-between">
                <h2 className='text-4xl font-bold'>User</h2>
                <button onClick={async () => {
                    setName(await serverFucn())
                }} className='border px-3 py-2 rounded-lg hover:bg-zinc-800/30 transition-all duration-300'>Get User</button>
            </section>
            {name && <p>You are {name}</p>}
        </div>
    )
}
