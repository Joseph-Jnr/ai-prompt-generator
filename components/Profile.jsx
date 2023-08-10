import { useSession } from 'next-auth/react'
import Image from 'next/image'
import PromptCard from './PromptCard'
import NoPrompt from './NoPrompt'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession()

  return (
    <section className='w-full'>
      <div className='profile_wrap'>
        <div className='profile_image'>
          <Image
            src={session?.user.image}
            className='rounded-full'
            width={100}
            height={100}
          />
        </div>
        <div className='profile_details'>
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
      </div>

      <div className='prompt_list'>
        {data.length > 0 ? (
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <NoPrompt />
        )}
      </div>
    </section>
  )
}

export default Profile
