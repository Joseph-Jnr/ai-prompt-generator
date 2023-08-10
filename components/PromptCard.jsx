'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { CopyIcon, TickIcon } from '@public/assets'
import Image from 'next/image'
import { IconEdit, IconTrash } from '@tabler/icons-react'

const Tag = ({ tag, tagClickAction }) => {
  const handleTagClickAction = () => tagClickAction && tagClickAction(tag)

  return (
    <div className='prompt_tag' onClick={handleTagClickAction}>
      <span>#{tag}</span>
    </div>
  )
}

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

  const tagsArray = post.tag.split(' ')

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
            <div className='prompt_header'>
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
            <div className='prompt_desc'>{post.prompt}</div>

            <div className='tags mt-7'>
              <div className='flex flex-start gap-2'>
                {tagsArray.map((tag, index) => (
                  <Tag key={index} tag={tag} tagClickAction={handleTagClick} />
                ))}
              </div>
            </div>

            {session?.user.id === post.creator._id &&
              pathName === '/profile' && (
                <div className='flex flex-end mt-3'>
                  <div className='delete_prompt' onClick={handleDelete}>
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
