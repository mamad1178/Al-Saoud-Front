import {useState} from 'react'
import Image from 'next/image'
import Search from './Search'


function NavLink({to, children}) {


}
function MobileNav({open, setOpen}) {

}


export default function secondly() {

return (
    <div className="bg-IMG bg-center h-[200px]  w-full  bg-cover  ">
      
        
      
        
        
        <div className="bg-indigo-900/80 h-full ">
            
           
        <div class="p-20">
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-6 ">
                All
            </button>
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-6">
            Title
            </button>
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-6 ">
                Author
            </button>
            <button class="bg-gray-300 hover:bg-sky-600 text-purple-900  py-2 px-6 ">
            ISBN
            </button>
        
        
  <Search />
 <div className='text-white text-right underline underline-offset-1  '>
     <a href="/Searchh" >Advanced search</a>
 </div>
 
 </div>
</div>

</div>  






)

}