import React from 'react'
import Image from 'next/image'
import { CiShoppingBasket } from "react-icons/ci";
import Link from 'next/link';
import Shop from "../icons/shop"

const Hero = () => {
  return (
    <section className='mt-1 p-1 flex'>
        <div className='w-[55%] mt-10 justify-start items-start flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>
        Buy more books and read them 
        </h1>
        <h4 className='leading-[32px] text-gray-500'>
        in various forms and poetry collections They viewed on electronic devices such as e-readers genres, including novels, non-fiction works, textbooks, reference books, poetry collections, and more. They serve as a means of conveying information,
        </h4>

        <div className='flex justify-center items-center gap-4'>
        <button className='text-xl font-medium hover:bg-green-500 hover:duration-500
        mt-4 bg-primary px-6 py-2 flex justify-center items-center gap-2 rounded-full text-white'>
        Buy Now <Shop/>
       </button>
       <Link href={''} className='font-semibold hover:text-black hover:duration-500 text-gray-500 leading-xl text-[16px] mt-4'>
        Learn more
       </Link>
        </div>
        </div>

       
       <Image src={'/book.png'} height={500} 
       objectFit={'contain'} 
       width={500} alt={'book'}/>
    
    </section>
  )
}

export default Hero