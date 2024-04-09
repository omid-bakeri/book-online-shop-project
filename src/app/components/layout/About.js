import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <>
        <div className='flex justify-between items-center'> 
        <div className='flex flex-col gap-2'>
        <h1 className='text-[20px] pt-4 font-bold p-3'>Books are a fundamental medium for conveying information</h1>
        <h4 className='text-[16px] text-gray-400 leading-10 max-w-[500px] mb-10 p-2 ml-2'>
        Fiction: Novels, short stories, plays, and poetry that are not based on real events.
Non-Fiction: Books based on real events, facts, and information. Non-fiction includes genres like biography, history, science, self-help, and more.
Reference Books: Encyclopedias, dictionaries, atlases, and other resources used for consultation.
Textbooks: Educational books used for teaching and learning in schools, colleges, and universities.
        </h4>
        </div>

        <Image src={'/remobgabout.png'} alt='books about' width={300} height={300}/>
        </div>
    </>
  )
}

export default About