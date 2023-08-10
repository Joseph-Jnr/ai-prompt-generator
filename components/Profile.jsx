import { NextIcon } from '@public/assets'
import Image from 'next/image'
import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <div className='profile_wrap flex-center flex-col text-center gap-4'>
        <div className='profile_image'>
          <Image src={NextIcon} width={100} />
        </div>
        <div className='profile_details'>
          <h1 className='font-bold text-xl orange_gradient'>{name}</h1>
          <p className='text-slate-500 text-sm'>{desc}</p>
        </div>
      </div>

      <div className='mt-10 prompt_list'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile
