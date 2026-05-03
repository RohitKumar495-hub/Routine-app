'use client'
import { IoHome } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { FaBook, FaCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

    const navItems = [
        { name: 'Home', url: '/', icon: IoHome },
        { name: 'History', url: '/history', icon: MdWorkHistory },
        { name: 'Diary', url: '/diary', icon: FaBook },
        { name: 'Profile', url: '/profile', icon: FaCircleUser },
    ]

    const pathName = usePathname()

  return (
    <div className='flex justify-center fixed bottom-3 z-10 w-full'>
        <div className='bg-[#4b2e1e] w-[96%] h-16 rounded-2xl flex items-center justify-evenly gap-4 text-white/80'>
            {
                navItems.map((navItem) => {
                    return (
                        <Link href={navItem.url} key={navItem.name} className={`grid gap-1 place-items-center`}>
                            <div className={`${pathName === navItem.url ? 'bg-[#A67B5B] rounded-lg text-white p-2' : '' }`}>
                                <navItem.icon size={20}/>
                            </div>
                            <p className="text-xs font-semibold">{navItem.name}</p>
                        </Link>
                    )
                })
            }
        </div>

    </div>
  )
}

export default NavBar