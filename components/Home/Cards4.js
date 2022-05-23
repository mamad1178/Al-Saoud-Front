import {useState} from 'react'
import Image from 'next/image'
export default function Cards4() {

    return (
        <div class=" bg-sky-100 w-[220px] h-[140px]   ">
        
        <div class="px-2 py-2">
          <div class="font-bold text-indigo-900  " >
            Advanced Search
          </div>
          <p class="text-indigo-900  text-xs pt-1.5 ">
           Conbine search words using guided menus.
           </p>
          <div class="pl-48 pt-12">
            <Image
            src="/fleche.png"
            width={40}
            height={40}
            
            />
          </div>
        </div>
       
      </div>






    )
}
