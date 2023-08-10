import { IconInfoCircle } from '@tabler/icons-react'
import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <div className='form_wrap'>
        <h1>{type} prompt</h1>
      </div>

      <form onSubmit={handleSubmit} className='prompt_form'>
        <div className='prompt_input'>
          <h2 className='font-bold'>Prompt</h2>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write prompt here'
            required
          ></textarea>
        </div>

        <div className='prompt_input'>
          <h2 className='font-bold'>
            Tags <small>(webdev)</small>
          </h2>
          <p className='text-xs my-2 flex gap-2'>
            <IconInfoCircle size={15} />{' '}
            <span className='orange_gradient'>
              Use space to add multiple tags
            </span>
          </p>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
          />
        </div>

        <div className='prompt_btn flex gap-4'>
          <button type='submit' disabled={submitting} className='black_btn'>
            {submitting ? `${type}...` : type}
          </button>
          <Link href='/' className='outline_btn'>
            Cancel
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Form
