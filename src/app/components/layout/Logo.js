import React from 'react'
import Book from '../icons/Book'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'}>
    <div className="font-bold text-[22px]
         text-primary select-none flex justify-center items-center gap-1">OMIDBOOK<Book/></div></Link>
  )
}

export default Logo