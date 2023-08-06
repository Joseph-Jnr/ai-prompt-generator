const NewPrompt = () => {
  return (
    <section>
      <div className='profile_wrap flex flex-col flex-center text-center'>
        <h1 className='text-xl font-bold'>Create a prompt</h1>
      </div>

      <div className='my-10 p-3 bg-gray-200 border border-gray-300 rounded-lg w-96'>
        <div className='prompt_input my-5'>
          <h2 className='font-bold'>Prompt</h2>
          <textarea className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 bg-transparent outline-none mt-2 w-full'></textarea>
        </div>

        <div className='prompt_input my-5'>
          <h2 className='font-bold'>
            Tags <small>(#web)</small>
          </h2>
          <input
            type='text'
            className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 bg-transparent outline-none mt-2 w-full'
          />
        </div>

        <div className='prompt_btn flex gap-4'>
          <button className='black_btn'>Create</button>
          <button className='outline_btn'>Cancel</button>
        </div>
      </div>
    </section>
  )
}

export default NewPrompt
