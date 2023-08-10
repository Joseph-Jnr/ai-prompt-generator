import { useSession } from 'next-auth/react'
import Image from 'next/image'
import PromptCard from './PromptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession()

  return (
    <section className='w-full'>
      <div className='profile_wrap flex-center flex-col text-center gap-4'>
        <div className='profile_image'>
          <Image
            src={session?.user.image}
            className='rounded-full'
            width={100}
            height={100}
          />
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
