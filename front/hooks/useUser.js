'use client'
import sessionState from 'fbase/sessionState'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()
  useEffect(() => {
    sessionState(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/')
    user && router.push('/scholarships')
  }, [user])

  return user
}
