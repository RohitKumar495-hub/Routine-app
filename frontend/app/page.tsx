'use client'
import { SiCoffeescript } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import { RiTodoLine } from "react-icons/ri";
import Button from "@/components/Button";
import { TiWeatherSunny } from "react-icons/ti";
import TaskCard from "@/components/TaskCard";
import { getDateInfo } from "@/utils/Date&Time"
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Home() {

const { formattedDate, dayName } = getDateInfo();

const [openModal, setOpenModal] = useState(false);
const [tasks, setTasks] = useState<any[]>([]);
const [isHydrated, setIsHydrated] = useState(false);

// ✅ stable key
const todayKey = new Date().toISOString().split('T')[0];

// ✅ mark hydration complete
useEffect(() => {
setIsHydrated(true);
}, []);

// ✅ LOAD tasks safely (NO overwrite)
useEffect(() => {
const stored = localStorage.getItem("tasksByDate");

if (!stored) return;

try {
  const parsed = JSON.parse(stored);

  if (parsed[todayKey]) {
    setTasks(parsed[todayKey]);
  }
} catch (err) {
  console.error("Invalid localStorage data");
}

}, [todayKey]);

// ✅ SAVE tasks safely (AFTER hydration)
useEffect(() => {
if (!isHydrated) return;

const stored = localStorage.getItem("tasksByDate");
let parsed = stored ? JSON.parse(stored) : {};

parsed[todayKey] = tasks;

localStorage.setItem("tasksByDate", JSON.stringify(parsed));

}, [tasks, todayKey, isHydrated]);

// ✅ ADD TASK
const handleAddTask = (task: any) => {
const newTask = {
...task,
completed: false
};

setTasks((prev) => [...prev, newTask]);
toast.success("Task added 🚀");


};

// ✅ TOGGLE TASK
const toggleTask = (id: number) => {
let isCompleted = false;

setTasks((prev) =>
  prev.map((task) => {
    if (task.id === id) {
      const updated = { ...task, completed: !task.completed };
      isCompleted = updated.completed;
      return updated;
    }
    return task;
  })
);

toast.success(
  isCompleted ? "Task completed ✅" : "Marked as pending ⏳"
);

};

// ✅ DELETE TASK
const deleteTask = (id: number) => {
setTasks((prev) => prev.filter((task) => task.id !== id));
toast.error("Task deleted 🗑️");
};

return ( 
<div>
  {/* header */}
  <div className="bg-[#4b2e1e] w-full h-30 grid gap-3 px-2 relative">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-white font-bold text-lg flex items-center gap-2">
          Good Morning, Rohit! <SiCoffeescript />
        </h1>
        <h2 className="text-white/80 text-xs font-semibold">
          Let's make today productive
        </h2>
      </div>
      <div className="w-10 h-10 border-2 border-white rounded-full relative" >
        <Image
          src={'/me.jpeg'}
          fill
          alt="rohit"
          className="rounded-full"
        />
      </div>
    </div>

    <div className="absolute bg-white w-28 h-14 rounded-xl right-3 -bottom-7 flex items-center gap-2 px-1 z-10">
      <FiCalendar size={20} className="text-[#4b2e1e]" />
      <div className="text-xs">
        <h3 className="font-bold text-[#4b2e1e]">{formattedDate}</h3>
        <h3 className="text-[#A67B5B] font-semibold">{dayName}</h3>
      </div>
    </div>

    <svg className="absolute -bottom-7 left-0 w-full h-12" viewBox="0 0 500 100" preserveAspectRatio="none">
      <path d="M0,40 C150,120 350,0 500,80 L500,0 L0,0 Z" fill="#4b2e1e" />
    </svg>
  </div>

  <div className="px-2 mt-10 grid gap-4">

    {/* add task */}
    <div className="bg-white w-full h-16 rounded-2xl flex justify-between items-center px-3">
      <div className="flex items-center gap-2">
        <RiTodoLine size={20} className="text-[#4b2e1e]" />
        <h1 className="text-sm font-semibold text-gray-400">What's on your mind?</h1>
      </div>
      <Button label="Add Task" handleClick={() => setOpenModal(true)} />
    </div>

    {/* header */}
    <div className="flex justify-between">
      <div>
        <h1 className="text-[#4b2e1e] font-semibold">Today's Tasks</h1>
        <hr className="w-[50%] border rounded-2xl" />
      </div>
    </div>

    {/* tasks */}
    {
      tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            timing={`${task.timing} ${task.format.toUpperCase()}`}
            completed={task.completed}
            onToggle={toggleTask}
            onDelete={deleteTask}
            Icon={TiWeatherSunny}
          />
        ))
      )
    }

  </div>

  {/* modal */}
  {
    openModal && (
      <Modal
        handleClick={() => setOpenModal(false)}
        onAddTask={handleAddTask}
      />
    )
  }

</div>

);
}
