import {useState} from 'react'
import Image from 'next/image'
import Search from './Search'
import Cards from './Cards'

function NavLink({to, children}) {


}
function MobileNav({open, setOpen}) {

}


export default function secondly() {

return (
    <div className="bg-IMG bg-center h-[570px]  w-full  bg-cover  ">
      
        
      
        
        
        <div className="bg-indigo-900/50 h-full ">
            
            <div class="flex justify-between " >
            <p class="text-5xl text-left p-20 text-white w-[750px]  ">King Abdul-Aziz Al saoud Foundation for Islamic Studies and Human 
            Sciences                        
            </p>

            <div class="pt-12 pr-12">
               <Cards/> 
            </div>
            
            
            </div>
        <div class="p-20">
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-4 ">
                All
            </button>
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-4">
            Title
            </button>
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-4 ">
                Author
            </button>
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-4 ">
            ISBN
            </button>
        
        
  <Search />
 <div className='text-white text-center underline underline-offset-1 '>
     <a href="/Searchh" >Advanced search</a>
 </div>
 
 </div>
</div>

</div>  






)

}