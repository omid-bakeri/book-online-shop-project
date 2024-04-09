import React from 'react'
import Image from 'next/image'
import Cart from "../icons/Cart"
import Link from 'next/link'
const Menu = () => {
  return (
    <section className='p-4 hover:border-2 hover:cursor-pointer border-2 border-transparent hover:border-primary hover:duration-700
     bg-gray-100  rounded-xl shadow-[10px]
     h-[400px] mb-10 flex flex-col justify-center items-center'>
        <Image src={'/book.png'} height={300} width={300} objectFit='contain' alt={'book'}/>
        <h1 className='font-bold '>
            Roman Power
        </h1>

        <h4 className='text-[12px] text-gray-500 mt-4 justify-center items-center flex'>
        The Black Swan: The Impact of the Highly Improbable is a 2007 book by Nassim Nicholas Taleb, who is a former options trader.
        </h4>

        <Link href={''} className='mt-10 gap-3 hover:bg-green-500
         hover:duration-500 flex items-center
          justify-center bg-primary text-white hover:cursor-pointer
           rounded-full px-10 py-2'> 
            ADD TO CART <Cart/>
        </Link>
    </section>
  )
}

export default Menu