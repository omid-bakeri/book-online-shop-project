import React from 'react'
import Link from "next/link";
import Book from '../icons/Book';
import User from '../icons/user';
import Logo from './Logo';
const Header = () => {
  return (
    <header className="flex p-4  justify-between 
    items-center">
        <div className='flex justify-start items-center gap-10'> 
        <Logo/>
         <nav className="flex justify-center 
         gap-4 text-[16px] font-medium text-gray-500 items-center">
          <Link href={''}>Home</Link>
          <Link href={''}>Shop</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
         </nav>
        </div>
        <div className='flex justify-center items-center gap-2'>
        <Link href={'/Login'} className="bg-gray-400 text-white px-8 py-1 rounded-full flex justify-center items-center gap-2" >Login <User/></Link>
        <Link href={'/Register'} className="bg-primary text-white px-8 py-1 rounded-full flex justify-center items-center gap-2" >Register <User/></Link>
        </div>
      </header>
  )
}

export default Header