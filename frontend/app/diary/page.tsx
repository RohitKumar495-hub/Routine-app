'use client'
import { useEffect, useState } from 'react'
import { FiCalendar } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import toast from 'react-hot-toast'

const Diary = () => {

const [diary, setDiary] = useState('')
const [history, setHistory] = useState<any>({})
const [showInput, setShowInput] = useState(false)

const todayKey = new Date().toISOString().split('T')[0]

// ✅ load diary
useEffect(() => {
const stored = localStorage.getItem("diaryByDate")

if (stored) {
  const parsed = JSON.parse(stored)
  setHistory(parsed)

  if (parsed[todayKey]) {
    setDiary(parsed[todayKey])
  }
}

}, [todayKey])

// ✅ save diary
const handleSave = () => {
if (!diary.trim()) {
toast.error("Write something first ✍️")
return
}

const stored = localStorage.getItem("diaryByDate")
let parsed = stored ? JSON.parse(stored) : {}

parsed[todayKey] = diary

localStorage.setItem("diaryByDate", JSON.stringify(parsed))
setHistory(parsed)

toast.success("Diary saved 📓")
setShowInput(false)

}

const entries = Object.entries(history).reverse()

return ( <div className='relative'>

  {/* header */}
  <div className="bg-[#4b2e1e] w-full h-18 grid px-2 fixed top-0 ">
    <div className="flex items-center justify-between h-18">
      <h1 className="text-white font-semibold">Diary</h1>

      <div className="">
        <IoAdd
          size={22}
          className="text-white cursor-pointer"
          onClick={() => setShowInput(true)}
        />
      </div>
    </div>
  </div>

<div className="pt-18">
  <div className='bg-[#F5EFE6] w-full min-h-screen rounded-t-2xl p-3'>

    {/* input box */}
    {
      showInput && (
        <div className='bg-white p-3 rounded-xl mb-4 shadow-sm'>
          <textarea
            value={diary}
            onChange={(e) => setDiary(e.target.value)}
            placeholder="Write your day..."
            className='w-full outline-none resize-none text-sm'
            rows={4}
          />

          <button
            onClick={handleSave}
            className='mt-2 bg-[#6F4E37] text-white px-3 py-1 rounded-md text-sm'
          >
            Save
          </button>
        </div>
      )
    }

    {/* history */}
    {
      entries.length === 0 ? (
        <p className='text-gray-400 text-sm'>No diary entries yet</p>
      ) : (
        entries.map(([date, text]: any) => (
          <div key={date} className='bg-white p-3 rounded-xl mb-3 shadow-sm'>
            <p className='text-xs text-[#A67B5B] font-semibold'>{date}</p>
            <p className='text-sm mt-1'>{text}</p>
          </div>
        ))
      )
    }

  </div>
</div>
</div>

)
}

export default Diary
