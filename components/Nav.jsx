'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { GoogleIcon, Logo } from '@public/assets'
import { IconLogout, IconUser } from '@tabler/icons-react'

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const handleDropdownToggle = () => {
    setToggleDropdown((prev) => !prev)
  }

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src={Logo}
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      <div className='flex'>
        {session?.user ? (
          <div className='relative flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>

            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full cursor-pointer'
              alt='profile'
              onClick={handleDropdownToggle}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <div className='dropdown_link'>
                  <IconUser size={14} />
                  <Link href='/profile' onClick={handleDropdownToggle}>
                    My Profile
                  </Link>
                </div>
                <button
                  type='button'
                  onClick={() => {
                    handleDropdownToggle
                    signOut()
                  }}
                  className='dropdown_link text-left'
                >
                  <IconLogout size={14} /> <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn flex gap-2'
                >
                  <Image src={GoogleIcon} width={20} />
                  Sign in with Google
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
