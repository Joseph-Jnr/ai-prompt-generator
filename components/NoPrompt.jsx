import { IconInfoHexagon } from '@tabler/icons-react'

const NoPrompt = () => {
  return (
    <div className='no_prompt'>
      <div className='icon'>
        <IconInfoHexagon size={50} stroke={1} className='icon_info' />
      </div>
      <div className='text'>No prompts to display</div>
    </div>
  )
}

export default NoPrompt
