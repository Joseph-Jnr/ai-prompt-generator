import { NextIcon } from '@public/assets'
import Image from 'next/image'

const Profile = () => {
  return (
    <section>
      <div className='profile_wrap flex flex-col flex-center text-center'>
        <div className='profile_image'>
          <Image src={NextIcon} width={100} />
        </div>
        <div className='profile_details mt-5'>
          <h1 className='font-bold text-xl orange_gradient'>Joseph Jnr</h1>
          <p className='text-slate-500 text-sm'>josephnwobodo1@gmail.com</p>
        </div>

        <div className='proile_btns mt-3'>
          <button className='black_btn'>Edit Profile</button>
        </div>
      </div>

      <div className='my-10 p-3 bg-gray-200 border border-gray-300 rounded-lg w-96'>
        <div className='single_profile_detail my-5'>
          <h2 className='font-bold'>Username</h2>
          <p className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 mt-2'>
            Joseph Jnr
          </p>
        </div>

        <div className='single_profile_detail my-5'>
          <h2 className='font-bold'>Email</h2>
          <p className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 mt-2'>
            josephnwobodo1@gmail.com
          </p>
        </div>

        <div className='single_profile_detail my-5'>
          <h2 className='font-bold'>Github</h2>
          <p className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 mt-2'>
            @Joseph-Jnr
          </p>
        </div>

        <div className='single_profile_detail my-5'>
          <h2 className='font-bold'>Phone Number</h2>
          <p className='text-sm border border-gray-400 p-2 rounded-md text-slate-600 mt-2'>
            +22999830482
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
