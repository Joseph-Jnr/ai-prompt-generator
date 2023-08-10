'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { CopyIcon, TickIcon } from '@public/assets'
import Image from 'next/image'
import { IconEdit, IconTrash } from '@tabler/icons-react'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()
  const [copied, setCopied] = useState('')

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <div className='my-20'>
      <div className='glassmorphism'>
        <div className='flex gap-3 flex-start'>
          <Image
            src={post.creator.image}
            className='rounded-full'
            width={30}
            height={30}
          />
          <div className='details'>
            <div className='header flex flex-between items-center'>
              <div className='user-info'>
                <h1 className='font-bold capitalize'>
                  {post.creator.username}
                </h1>
                <p className='text-sm text-slate-500'>{post.creator.email}</p>
              </div>
              <div className='flex-center gap-4'>
                {session?.user.id === post.creator._id &&
                  pathName === '/profile' && (
                    <div
                      className='edit_post cursor-pointer'
                      onClick={handleEdit}
                    >
                      <IconEdit color='green' stroke={1} size={20} />
                    </div>
                  )}

                <div className='icon' onClick={handleCopy}>
                  <Image
                    src={copied === post.prompt ? TickIcon : CopyIcon}
                    className='cursor-pointer'
                  />
                </div>
              </div>
            </div>
            <div className='description text-sm mt-5 text-slate-700'>
              {post.prompt}
            </div>

            <div className='tags mt-7'>
              <div className='flex flex-start gap-2'>
                <div
                  className='rounded-full bg-gray-200 border border-gray-300 text-black p-2 text-xs'
                  onClick={() => handleTagClick && handleTagClick(post.tag)}
                >
                  <span>#{post.tag}</span>
                </div>
              </div>
            </div>

            {session?.user.id === post.creator._id &&
              pathName === '/profile' && (
                <div className='flex flex-end mt-3'>
                  <div
                    className='delete_post cursor-pointer bg-red-100 hover:bg-red-200 p-2 rounded'
                    onClick={handleDelete}
                  >
                    <IconTrash color='red' stroke={1} size={20} />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard
