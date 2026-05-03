import Image from 'next/image'
import { BiHeart } from 'react-icons/bi'
import { MdGrass } from "react-icons/md";
import { FiCalendar } from 'react-icons/fi'

const Profile = () => {
  return (
    <div className='relative'>
      <div className="bg-[#4b2e1e] w-full h-25 grid gap-3 px-2 relative">
        <div className="flex items-center justify-between h-18">
          <h1 className="text-white font-semibold">Profile</h1>
          <FiCalendar size={20} className="text-white" />
        </div>
      </div>


      <div className='bg-[#F5EFE6] w-full h-20 rounded-t-2xl absolute -bottom-12 p-2 grid gap-3'>

        <div className="bg-white w-full h-25 rounded-2xl flex justify-between items-center px-3">
          <div className="flex items-center gap-4">
            <div className="border-3 border-[#A67B5B] px-2 py-2 rounded-full w-20 h-20 relative">
              <Image
                src='/me.jpeg'
                alt='Rohit'
                fill
                className='rounded-full'
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold ">Rohit Kumar</h1>
              <p className="text-xs text-gray-400 font-semibold flex items-center gap-2">Stay consistent, achieve your goals.</p>
            </div>
          </div>
        </div>

        <div className="bg-white w-full h-60 rounded-2xl grid place-items-center px-3">
            <div className="w-full h-40 lg:w-70 relative">
              <Image
                src='/family.jpeg'
                alt='Rohit'
                fill
                className='rounded-lg'
              />
            </div>
            <div className='grid place-items-center'>
              <h1 className="text-md font-semibold text-[#4b2e1e]">This is why I can't give up.</h1>
              <p className="text-xs text-red-500 font-semibold"><BiHeart size={20} /></p>
            </div>
        </div>

        <div className='bg-[#f6dfc7] w-full h-30 rounded-2xl p-3 grid gap-2 relative'>
           <h1 className='font-semibold text-xs text-center'>"Discipline is choosing between what you want now and what you want most"</h1>
           <h1 className='font-semibold text-xs text-center'>"You can't loose bro. You are the hope of your parents,You have to win."</h1>
           <div className='absolute right-0 -bottom-1.5'><MdGrass size={58} className='text-[#a47f57]'/></div>
        </div>

      </div>
    </div>
  )
}

export default Profile