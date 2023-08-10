'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { NextIcon } from '@public/assets'
import Image from 'next/image'
import { Profile } from '@components'

const Profiles = () => {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()

      setPosts(data)
    }

    if (session?.user.id) fetchPosts()
  }, [])

  const handleEdit = () => {}
  const handleDelete = async () => {}

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default Profiles
