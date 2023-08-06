'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Logo, NextIcon } from '@public/assets'

const Nav = () => {
  const isUserLoggedIn = true
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
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>

            <Link href='/profile'>
              <Image
                src={NextIcon}
                width={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <button type='button' onClick={signIn} className='black_btn'>
            Sign In
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
