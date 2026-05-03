import { IconType } from 'react-icons'
import { FaRegClock } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'

interface taskCardProps {
id: number
title: string
timing: string
Icon: IconType
completed?: boolean
onToggle?: (id: number) => void
onDelete?: (id: number) => void
readonly?: boolean
}

const TaskCard = ({
id,
title,
timing,
Icon,
completed = false,
onToggle,
onDelete,
readonly = false
}: taskCardProps) => {

const handleToggle = () => {
if (onToggle) onToggle(id)
}

const handleDelete = () => {
if (onDelete) onDelete(id)
}

return ( <div className="bg-white w-full h-16 rounded-2xl flex justify-between items-center px-3">

  <div className="flex items-center gap-4">
    <div className="bg-[#A67B5B] px-2 py-2 rounded-lg">
      <Icon size={20} className="text-white/70" />
    </div>

    <div>
      <h1 className={`text-sm font-semibold ${completed ? 'line-through text-gray-400' : ''}`}>
        {title}
      </h1>

      <p className="text-xs text-gray-400 font-semibold flex items-center gap-2">
        <FaRegClock /> {timing}
      </p>
    </div>
  </div>

  {!readonly && (
    <div className="flex items-center gap-3">

      <button
        onClick={handleToggle}
        className={`rounded-full w-5 h-5 border ${
          completed ? 'bg-[#6F4E37]' : 'border-[#A67B5B]'
        }`}
      />

      <RxCross1
        size={16}
        className="cursor-pointer text-gray-400"
        onClick={handleDelete}
      />

    </div>
  )}

</div>

)
}

export default TaskCard
