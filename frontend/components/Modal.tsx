import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import Button from './Button'
import { toast } from 'react-toastify'

interface ModalProps {
    handleClick?: () => void
    onAddTask?: (task: any) => void
}

const Modal = ({ handleClick, onAddTask }: ModalProps) => {

    const [formData, setFormData] = useState({
        title: '',
        timing: '',
        format: 'am'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.title || !formData.timing) {
            toast.error('Please fill all fields')
            return
        }

        const newTask = {
            id: Date.now(),
            title: formData.title,
            timing: formData.timing,
            format: formData.format
        }


        onAddTask?.(newTask)   // only add task
        toast.success("Task Added Successfully")
        handleClick?.()        // close modal

        setFormData({
            title: '',
            timing: '',
            format: 'am'
        })

    }

    return (
        <div className='bg-black/70 w-full h-screen top-0 z-20 fixed flex items-center px-2'> <div className='bg-[#f6dfc7] w-full rounded-xl p-4'>

            <div className='flex justify-between items-center mb-3'>
                <h1 className='font-bold text-[#4b2e1e]'>Add Task</h1>
                <RxCross1 size={16} onClick={handleClick} className='cursor-pointer' />
            </div>

            <form onSubmit={handleSubmit} className='grid gap-3'>

                <div className='grid gap-1'>
                    <label>Title *</label>
                    <input
                        type="text"
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className='border rounded-md px-2 py-1 outline-none'
                    />
                </div>

                <div className='grid gap-1'>
                    <label>Timing *</label>
                    <input
                        type="number"
                        name='timing'
                        value={formData.timing}
                        onChange={handleChange}
                        className='border rounded-md px-2 py-1 outline-none'
                    />
                </div>

                <div className='grid gap-1'>
                    <label>Select *</label>
                    <select
                        name="format"
                        value={formData.format}
                        onChange={handleChange}
                        className='border rounded-md px-2 py-1'
                    >
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>
                </div>

                <Button label='Add Task' />
            </form>

        </div>
        </div>

    )
}

export default Modal
