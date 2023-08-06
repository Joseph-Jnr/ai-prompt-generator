import { CopyIcon, NextIcon } from '@public/assets'
import Image from 'next/image'
import React from 'react'

const Feed = () => {
  return (
    <div className='my-20'>
      <div className='glassmorphism'>
        <div className='flex gap-3 flex-start'>
          <Image src={NextIcon} width={30} />
          <div className='details'>
            <div className='header flex flex-between items-center'>
              <div className='user-info'>
                <h1 className='font-bold'>Joseph Jnr</h1>
                <p className='text-sm text-slate-500'>
                  josephnwobodo1@gmail.com
                </p>
              </div>
              <div className='icon'>
                <Image src={CopyIcon} className='cursor-pointer' />
              </div>
            </div>
            <div className='description text-sm mt-5 text-slate-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              magnam natus reprehenderit culpa laudantium vel aliquam obcaecati.
            </div>

            <div className='tags mt-7'>
              <div className='flex flex-start gap-2'>
                <div className='rounded-full bg-gray-200 border border-gray-300 text-black p-2 text-xs'>
                  #webdevelopment
                </div>

                <div className='rounded-full bg-gray-200 border border-gray-300 text-black p-2 text-xs'>
                  #javascript
                </div>

                <div className='rounded-full bg-gray-200 border border-gray-300 text-black p-2 text-xs'>
                  #api
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
