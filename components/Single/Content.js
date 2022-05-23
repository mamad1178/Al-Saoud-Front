import {useState} from 'react'
import {
    InstantSearch 
}
from 'react-instantsearch-dom'
import Image from 'next/image'
import Table from './Table'

export default function Search2() {

    return (
        <div>
        
            <div className='flex pl-20 pt-4'>
                <aside className=' border-2 w-[255px]  h-[800px]   pt-5 '>
                    <div className='flex justify-between w-[240px] '>
                        <div className=' pl-4 font-bold '>
                           Related books
                        </div>
                        
                    </div>
                    <div className='border-b w-[205px] ml-4 mt-2.5 '>
            </div>
           
             <div class="flex-col justify-between  ">
                 <div className='pl-12 pt-8'>
                   <Image
                       src="/book5.jpg"
                       width={170}
                       height={250}
                   />
                   <div className='pl-10'>
                       Book's name 
                   </div>
                 </div>

                 <div className='pl-12 pt-8'>
                   <Image
                       src="/book-5.jpg"
                       width={170}
                       height={250}
                   />
                   <div className='pl-10'>
                       Book's name 
                   </div>
                 </div>
            </div>
             </aside>
             <main className='border-2 w-[1350px]  h-[800px] ml-6   p-12 '>
                 
            <div className='flex '>

                 
                        <div  >
                        <Image
                        src="/book5.jpg"
                        width={250}
                        height={350}
                        
                        />
                        </div>
                        <div>
                            <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                           Title : 
                         </p>
                         <p className='pl-2 pt-6'>
                           Le temps à l'oeuvre : sur la pensée d'Emmanuel Levinas / Sophie Galabru ; préface
                         </p>
                         </div>

                         <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                           Author : 
                         </p>
                         <p className='pl-2 pt-6'>
                         Galabru,Sohpie(1990-...)
                         </p>
                         </div>
                        
                         <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                           Publisher : 
                         </p>
                         <p className='pl-2 pt-6'>
                         Hermann
                         </p>
                         </div>
                         
                         <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                           Pub date : 
                         </p>
                         <p className='pl-2 pt-6'>
                           impr.2020
                         </p>
                         </div>
                         
                         <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                           Pages : 
                         </p>
                         <p className='pl-2 pt-6'>
                           408p
                         </p>
                         </div>

                         <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                           ISBN : 
                         </p>
                         <p className='pl-2 pt-6'>
                         979-1-0370-0292-1
                         </p>
                         </div>
                           
                         <div className='flex' >
                         <p className='pl-10 pt-6 font-bold'>
                         Number of items :
                         </p>
                         <p className='pl-2 pt-6'>
                         2
                         </p>
                         </div>
                            

                         
                        </div>
              
              </div>  
             <Table/> 
             </main>
             
         </div>
        




    </div>
  
  
  
  
  
        )
}