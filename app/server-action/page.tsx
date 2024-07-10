import { getServerSession } from 'next-auth'
import React from 'react'
import User from './user'

export default function ServerActionPage() {
    const getUser = async () => {
        'use server'
        const session = await getServerSession()
        return session?.user?.name ?? "Not Logged In"
    }
  return <User serverFucn={getUser} />
}
