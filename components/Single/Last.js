import {useState} from 'react'
import Image from 'next/image'
import Last1 from './Last1'
import Last3 from './Last3'
import Last4 from './Last4'
import Border from './Border'

export default function Last() {

    return (
<div class="bg-cyan-50 items-center w-full h-[650px]">
<div className='flex  justify-between '>
    <div className='pl-12 pt-12 '>
        <Image
            src="/al-saoud.png"
            width={250}
            height={70}
        />
    </div>

    <div className='flex  pt-16 w-[1410px]'>
      <div className='flex flex-col ]'>
      <p className='font-bold text-xl text-black pb-10'>
       THE FOUNDATION
      </p>
      <p className='pb-3 text-sm'>
          Presentation
      </p>
      <p className='pb-3 text-sm'>
           Location  
      </p>
         
      <p className='pb-3 text-sm'>
          The Foundation in the media
      </p>
      <p className='pb-3 text-sm'>
         Legal Status and Mission Statement
      </p>
      <p className='pb-3 text-sm'>
        Signboard
      </p> 
      <p className='pb-3 text-sm'>
        Working Hours
      </p>
      <p className='pb-3 text-sm'>
        Getting the Reader's Card
      </p>
      <p className='pb-3 text-sm'>
        Organizatoinal chart
      </p>
      <p className='pb-3 text-sm'>
        Photo gallery
      </p>
      <p className='pb-3 text-sm'>
        Video gallery
      </p>

      
      </div>
      
      <div>
       <Last1/>
      </div>

      <div>
       <Last3/>
      </div>

      <div>
       <Last4/>
      </div>

      

    </div>

    
</div>
<div>
    <div>
        <Border/>
    </div>    
</div>
</div>


    )

}