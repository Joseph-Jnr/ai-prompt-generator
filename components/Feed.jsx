'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import NoPrompt from './NoPrompt'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='prompt_list'>
      {data.length > 0 ? (
        data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
      ) : (
        <NoPrompt />
      )}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearch = (e) => {}

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          className='search_input peer'
          placeholder='Search'
          value={searchText}
          onChange={handleSearch}
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
