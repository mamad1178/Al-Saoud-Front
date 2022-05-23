import {useState} from 'react'
import Image from 'next/image'
import Cards4 from './Cards4'
import Cards5 from './Cards5'
export default function Cards() {

    return (
        <div class=" bg-sky-100 w-[220px] h-[140px]   ">
        
        <div class="px-2 py-2">
          <div class="font-bold text-indigo-900  " >
            Browse
          </div>
          <p class="text-indigo-900  text-xs pt-1.5 ">
            Find titles, authors/creators, subjects, call numbers, or standard numbers in alphabetical or sequential lists, with cross-references.
          </p>
          <div class="pl-48 ">
            <Image
            src="/fleche.png"
            width={40}
            height={40}
            
            />
          </div>
        </div>
        <div className='pt-5'>
           <Cards4/>
        </div>
        <div className='pt-7'>
          <Cards5/>
        </div>
       
      </div>






    )
}
