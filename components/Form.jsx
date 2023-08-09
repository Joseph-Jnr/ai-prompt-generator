import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <div className='profile_wrap flex flex-col flex-center text-center'>
        <h1 className='text-xl font-bold'>{type} prompt</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='my-10 p-3 bg-gray-200 border border-gray-300 rounded-lg w-96'
      >
        <div className='prompt_input my-5'>
          <h2 className='font-bold'>Prompt</h2>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write prompt here'
            className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 bg-transparent outline-none mt-2 w-full'
            required
          ></textarea>
        </div>

        <div className='prompt_input my-5'>
          <h2 className='font-bold'>
            Tags <small>(#web)</small>
          </h2>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 bg-transparent outline-none mt-2 w-full'
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
